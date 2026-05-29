import chalk from 'chalk';
import prompts from 'prompts';
import ora from 'ora';
import fs from 'fs-extra';
import path from 'path';

// In a real CLI, this would fetch from a remote registry (e.g. nativecn.com/registry.json)
// For this monorepo, we'll simulate it or copy directly from the packages/nativecn dir
const REGISTRY = {
  button: {
    name: 'button',
    dependencies: ['typography', 'use-haptics', 'use-press-animation'],
    registryDependencies: ['typography'],
    files: [
      { name: 'button.tsx', dir: 'components/button' },
      { name: 'index.ts', dir: 'components/button' }
    ]
  },
  typography: {
    name: 'typography',
    dependencies: [],
    registryDependencies: [],
    files: [
      { name: 'typography.tsx', dir: 'components/typography' },
      { name: 'index.ts', dir: 'components/typography' }
    ]
  }
};

export async function add(components: string[], options: any) {
  let targetComponents = components;

  if (targetComponents.length === 0) {
    const response = await prompts({
      type: 'multiselect',
      name: 'components',
      message: 'Which components would you like to add?',
      choices: Object.keys(REGISTRY).map(c => ({ title: c, value: c }))
    });
    targetComponents = response.components;
  }

  if (!targetComponents || targetComponents.length === 0) {
    console.log(chalk.red('No components selected.'));
    process.exit(0);
  }

  const spinner = ora(`Installing components: ${targetComponents.join(', ')}...`).start();

  try {
    // Check if nativecn.json exists
    const configPath = path.join(process.cwd(), 'nativecn.json');
    if (!await fs.pathExists(configPath)) {
      spinner.fail('No nativecn.json found. Please run `npx nativecn init` first.');
      process.exit(1);
    }

    const config = await fs.readJSON(configPath);
    const componentsDir = config.aliases.components.replace('~/', '');

    // Resolve dependencies (simple version)
    const allComponentsToInstall = new Set<string>();
    
    const resolveDeps = (comp: string) => {
      if (!REGISTRY[comp as keyof typeof REGISTRY]) return;
      allComponentsToInstall.add(comp);
      REGISTRY[comp as keyof typeof REGISTRY].registryDependencies.forEach(dep => resolveDeps(dep));
    };

    targetComponents.forEach(resolveDeps);

    // Simulated download / copy
    for (const comp of allComponentsToInstall) {
      spinner.text = `Installing ${comp}...`;
      const compData = REGISTRY[comp as keyof typeof REGISTRY];
      
      const targetDir = path.join(process.cwd(), componentsDir, comp);
      await fs.ensureDir(targetDir);
      
      // In a real CLI we would fetch from URL. Here we simulate writing the file.
      await fs.writeFile(path.join(targetDir, 'index.ts'), `// Downloaded ${comp} from Nativecn Registry\nexport * from './${comp}';`);
      await fs.writeFile(path.join(targetDir, `${comp}.tsx`), `// Downloaded ${comp} from Nativecn Registry\nimport React from 'react';\n// Implementation...`);
    }

    spinner.succeed(`Successfully installed ${Array.from(allComponentsToInstall).join(', ')}`);
    console.log(chalk.green('\n🎉 Done!'));

  } catch (error: any) {
    spinner.fail(`Failed to install components: ${error.message}`);
  }
}
