import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOCS_REGISTRY_PATH = path.resolve(__dirname, '../src/data/docs-registry.tsx');
const REGISTRY_DIR = path.resolve(__dirname, '../src/data/registry');

// Function to extract matching brace blocks
function extractBraceBlock(content, startIndex) {
  let braceCount = 0;
  let inString = false;
  let stringChar = '';
  let inComment = false;
  let inLineComment = false;

  for (let i = startIndex; i < content.length; i++) {
    const char = content[i];
    const nextChar = content[i + 1];

    // Handle comments
    if (inLineComment && char === '\n') {
      inLineComment = false;
      continue;
    }
    if (inComment && char === '*' && nextChar === '/') {
      inComment = false;
      i++;
      continue;
    }
    if (!inString && !inComment && !inLineComment) {
      if (char === '/' && nextChar === '/') {
        inLineComment = true;
        continue;
      }
      if (char === '/' && nextChar === '*') {
        inComment = true;
        i++;
        continue;
      }
    }

    if (inComment || inLineComment) {
      continue;
    }

    // Handle strings/template literals
    if ((char === '"' || char === "'" || char === '`') && content[i - 1] !== '\\') {
      if (!inString) {
        inString = true;
        stringChar = char;
      } else if (char === stringChar) {
        inString = false;
      }
    }

    if (!inString) {
      if (char === '{') {
        braceCount++;
      } else if (char === '}') {
        braceCount--;
        if (braceCount === 0) {
          return content.substring(startIndex, i + 1);
        }
      }
    }
  }
  return null;
}

// Function to extract mockup function bodies
function extractMockupFunction(content, funcName) {
  const funcPattern = new RegExp(`(?:function|const)\\s+${funcName}\\b`);
  const match = content.match(funcPattern);
  if (!match) return null;

  const startIdx = content.indexOf('{', match.index);
  if (startIdx === -1) return null;

  const body = extractBraceBlock(content, startIdx);
  if (!body) return null;

  // Re-assemble the function signature + body
  return `export default function ${funcName}() ${body}\n`;
}

async function migrate() {
  if (!await fs.pathExists(DOCS_REGISTRY_PATH)) {
    console.error(`❌ Original docs-registry.tsx not found at ${DOCS_REGISTRY_PATH}`);
    process.exit(1);
  }

  console.log(`📦 Reading original registry...`);
  const content = await fs.readFile(DOCS_REGISTRY_PATH, 'utf8');

  // Find docsRegistry outer block
  const registryMatch = content.match(/export const docsRegistry(?:\s*:\s*[^=]+)?\s*=\s*\{/);
  if (!registryMatch) {
    console.error(`❌ Could not locate export const docsRegistry in the file.`);
    process.exit(1);
  }

  const registryStart = content.indexOf('{', registryMatch.index);
  const registryBody = extractBraceBlock(content, registryStart);
  if (!registryBody) {
    console.error(`❌ Failed to parse docsRegistry brace block.`);
    process.exit(1);
  }

  // Parse core and premium blocks inside the registry body
  const categories = ['core', 'premium'];
  
  for (const cat of categories) {
    console.log(`⚙️ Processing category: ${cat}`);
    const catPattern = new RegExp(`\\b${cat}\\s*:\\s*\\{`);
    const catMatch = registryBody.match(catPattern);
    if (!catMatch) {
      console.warn(`⚠️ Category ${cat} not found in docsRegistry.`);
      continue;
    }

    const catStart = registryBody.indexOf('{', catMatch.index);
    const catBody = extractBraceBlock(registryBody, catStart);
    if (!catBody) {
      console.error(`❌ Failed to parse ${cat} category brace block.`);
      continue;
    }

    // Match each component entry inside the category block
    // Entries are defined as: slug: { ... } or "slug": { ... }
    const entryPattern = /(?:\b([a-zA-Z0-9_-]+)|"([a-zA-Z0-9_-]+)")\s*:\s*\{/g;
    let match;
    const entries = [];

    while ((match = entryPattern.exec(catBody)) !== null) {
      const slug = match[1] || match[2];
      const entryStart = catBody.indexOf('{', match.index);
      const entryContent = extractBraceBlock(catBody, entryStart);
      entries.push({ slug, entryContent });
    }

    console.log(`🔍 Found ${entries.length} entries in ${cat}. Migrating...`);

    for (const { slug, entryContent } of entries) {
      const targetDir = path.join(REGISTRY_DIR, cat, slug);
      await fs.ensureDir(targetDir);

      // Parse fields using regex (since they are formatted nicely)
      const nameMatch = entryContent.match(/name\s*:\s*["']([^"']+)["']/);
      const descMatch = entryContent.match(/description\s*:\s*["']([^"']+)["']/);
      const categoryMatch = entryContent.match(/category\s*:\s*["']([^"']+)["']/);
      const installMatch = entryContent.match(/installation\s*:\s*["']([^"']+)["']/);
      
      // Extract usageCode backtick template literal
      const usageStartIdx = entryContent.indexOf('usageCode: `');
      let usageCode = '';
      if (usageStartIdx !== -1) {
        const afterBacktick = usageStartIdx + 'usageCode: `'.length;
        const endBacktickIdx = entryContent.indexOf('`', afterBacktick);
        if (endBacktickIdx !== -1) {
          usageCode = entryContent.substring(afterBacktick, endBacktickIdx);
        }
      }

      // Find componentMockup function reference
      const mockupMatch = entryContent.match(/componentMockup\s*:\s*\(\)\s*=>\s*(?:React\.createElement\()?([a-zA-Z0-9]+Mockup)/);
      const mockupFuncName = mockupMatch ? mockupMatch[1] : null;

      const metadata = {
        name: nameMatch ? nameMatch[1] : slug,
        description: descMatch ? descMatch[1] : '',
        category: categoryMatch ? categoryMatch[1] : '',
        installation: installMatch ? installMatch[1] : '',
        usageCode: usageCode
      };

      // Write metadata.json
      await fs.writeJSON(path.join(targetDir, 'metadata.json'), metadata, { spaces: 2 });

      // Extract and write mockup component if found
      if (mockupFuncName) {
        console.log(`   └─ Splitting mockup: ${mockupFuncName} for ${slug}`);
        const mockupFuncContent = extractMockupFunction(content, mockupFuncName);
        if (mockupFuncContent) {
          const mockupFileContent = `import React from "react";\n\n${mockupFuncContent}`;
          await fs.writeFile(path.join(targetDir, 'mockup.tsx'), mockupFileContent, 'utf8');
        } else {
          console.warn(`   ⚠️ Warning: Could not find function implementation for ${mockupFuncName}`);
        }
      }
    }
  }

  console.log(`\n🎉 Migration complete! All component folders created under apps/docs/src/data/registry/`);
}

migrate().catch(err => {
  console.error(`❌ Migration failed:`, err);
});
