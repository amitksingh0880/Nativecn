import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const REGISTRY_DIR = path.resolve(__dirname, '../src/data/registry');
const OUTPUT_PATH = path.resolve(__dirname, '../src/data/docs-registry.tsx');

async function generate() {
  console.log(`🔨 Compiling docs registry from modular folders...`);

  if (!await fs.pathExists(REGISTRY_DIR)) {
    console.error(`❌ Registry directory not found at ${REGISTRY_DIR}`);
    process.exit(1);
  }

  const categories = ['core', 'premium'];
  const registry = { core: {}, premium: {} };
  const imports = [];

  for (const cat of categories) {
    const catDir = path.join(REGISTRY_DIR, cat);
    if (!await fs.pathExists(catDir)) {
      continue;
    }

    const slugs = await fs.readdir(catDir);
    // Sort slugs for deterministic file generation
    slugs.sort();

    for (const slug of slugs) {
      const slugDir = path.join(catDir, slug);
      if (!(await fs.stat(slugDir)).isDirectory()) {
        continue;
      }

      const metadataPath = path.join(slugDir, 'metadata.json');
      const mockupPath = path.join(slugDir, 'mockup.tsx');

      if (!await fs.pathExists(metadataPath)) {
        console.warn(`   ⚠️ Warning: Missing metadata.json for ${cat}/${slug}`);
        continue;
      }

      const metadata = await fs.readJSON(metadataPath);
      const hasMockup = await fs.pathExists(mockupPath);

      // Convert slug (e.g. biometric-button) to PascalCase for mockup function name
      const camelSlug = slug
        .split('-')
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join('');
      const mockupName = `Interactive${camelSlug}Mockup`;

      if (hasMockup) {
        imports.push(`import ${mockupName} from "./registry/${cat}/${slug}/mockup";`);
      }

      registry[cat][slug] = {
        name: metadata.name,
        description: metadata.description,
        category: metadata.category,
        installation: metadata.installation,
        usageCode: metadata.usageCode,
        mockupName: hasMockup ? mockupName : null
      };
    }
  }

  // Build TSX output
  let fileContent = `// ==========================================
// AUTO-GENERATED FILE - DO NOT EDIT DIRECTLY
// To modify component entries, edit their metadata.json or mockup.tsx
// under apps/docs/src/data/registry/ and run:
//   npm run registry:generate
// ==========================================

import React from "react";
${imports.join('\n')}

export interface DocEntry {
  name: string;
  description: string;
  category: string;
  installation: string;
  usageCode: string;
  componentMockup: () => React.ReactNode;
}

export const docsRegistry: Record<string, Record<string, DocEntry>> = {
  core: {
`;

  // Sort keys for stable outputs
  const coreKeys = Object.keys(registry.core).sort();
  for (const slug of coreKeys) {
    const entry = registry.core[slug];
    fileContent += `    "${slug}": {
      name: ${JSON.stringify(entry.name)},
      description: ${JSON.stringify(entry.description)},
      category: ${JSON.stringify(entry.category)},
      installation: ${JSON.stringify(entry.installation)},
      usageCode: ${JSON.stringify(entry.usageCode)},
      componentMockup: () => React.createElement(${entry.mockupName})
    },\n`;
  }

  fileContent += `  },
  premium: {
`;

  const premiumKeys = Object.keys(registry.premium).sort();
  for (const slug of premiumKeys) {
    const entry = registry.premium[slug];
    fileContent += `    "${slug}": {
      name: ${JSON.stringify(entry.name)},
      description: ${JSON.stringify(entry.description)},
      category: ${JSON.stringify(entry.category)},
      installation: ${JSON.stringify(entry.installation)},
      usageCode: ${JSON.stringify(entry.usageCode)},
      componentMockup: () => React.createElement(${entry.mockupName})
    },\n`;
  }

  fileContent += `  }
};

export function getDocEntry(category: string, slug: string): DocEntry | null {
  return docsRegistry[category]?.[slug] || null;
}
`;

  await fs.ensureDir(path.dirname(OUTPUT_PATH));
  await fs.writeFile(OUTPUT_PATH, fileContent, 'utf8');

  console.log(`\n🎉 Success! Consolidated registry written to:`);
  console.log(`   └─ ${OUTPUT_PATH}\n`);
}

generate().then(() => {
  if (process.argv.includes('--watch')) {
    console.log(`👀 Watching for registry changes under ${REGISTRY_DIR}...`);
    let timeout;
    fs.watch(REGISTRY_DIR, { recursive: true }, (eventType, filename) => {
      if (filename && (filename.endsWith('metadata.json') || filename.endsWith('mockup.tsx'))) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          console.log(`🔄 Change detected: ${filename}. Rebuilding...`);
          generate().catch(console.error);
        }, 300);
      }
    });
  }
}).catch(err => {
  console.error(`❌ Generation failed:`, err);
});
