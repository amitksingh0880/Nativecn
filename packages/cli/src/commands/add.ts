import chalk from 'chalk';
import prompts from 'prompts';
import ora from 'ora';
import fs from 'fs-extra';
import path from 'path';

// Dynamic resolver for components in monorepo
function getSourcePath(): string {
  const paths = [
    path.resolve(__dirname, '../../../../packages/nativecn/src'),
    path.resolve(__dirname, '../../packages/nativecn/src')
  ];
  for (const p of paths) {
    if (fs.existsSync(p)) return p;
  }
  return '';
}

// Find a premium component file under any subdirectory of src/premium
async function findPremiumComponentFile(srcPath: string, compName: string): Promise<string | null> {
  const premiumDir = path.join(srcPath, 'premium');
  if (!await fs.pathExists(premiumDir)) return null;

  const categories = await fs.readdir(premiumDir);
  for (const cat of categories) {
    const catPath = path.join(premiumDir, cat);
    if ((await fs.stat(catPath)).isDirectory()) {
      const filePath = path.join(catPath, `${compName}.tsx`);
      if (await fs.pathExists(filePath)) {
        return filePath;
      }
    }
  }
  return null;
}

export async function add(components: string[], options: any) {
  let targetComponents = components;
  const cwd = process.cwd();

  // Read config
  const configPath = path.join(cwd, 'cnnative.json');
  if (!await fs.pathExists(configPath)) {
    console.log(chalk.red('❌ No cnnative.json found. Please run `npx cnnative init` first.'));
    process.exit(1);
  }

  const config = await fs.readJSON(configPath);
  const componentsDir = config.aliases.components.replace('~/', '');
  const hooksDir = config.aliases.hooks.replace('~/', '');
  const libDir = config.aliases.lib.replace('~/', '');

  const srcPath = getSourcePath();
  if (!srcPath) {
    console.log(chalk.red('❌ Could not locate the Nativecn UI source files in the workspace.'));
    process.exit(1);
  }

  // If no components were specified, show a prompt with all available components
  if (targetComponents.length === 0) {
    const availableComponents: string[] = [];

    // Scan core components
    const coreDir = path.join(srcPath, 'components');
    if (await fs.pathExists(coreDir)) {
      const coreDirs = await fs.readdir(coreDir);
      for (const d of coreDirs) {
        if ((await fs.stat(path.join(coreDir, d))).isDirectory()) {
          availableComponents.push(d);
        }
      }
    }

    // Scan premium components
    const premiumDir = path.join(srcPath, 'premium');
    if (await fs.pathExists(premiumDir)) {
      const categories = await fs.readdir(premiumDir);
      for (const cat of categories) {
        const catPath = path.join(premiumDir, cat);
        if ((await fs.stat(catPath)).isDirectory()) {
          const files = await fs.readdir(catPath);
          for (const f of files) {
            if (f.endsWith('.tsx')) {
              availableComponents.push(f.replace('.tsx', ''));
            }
          }
        }
      }
    }

    const response = await prompts({
      type: 'multiselect',
      name: 'components',
      message: 'Which components would you like to add?',
      choices: availableComponents.sort().map(c => ({ title: c, value: c }))
    });
    targetComponents = response.components;
  }

  if (!targetComponents || targetComponents.length === 0) {
    console.log(chalk.red('No components selected.'));
    process.exit(0);
  }

  const spinner = ora(`Installing components: ${targetComponents.join(', ')}...`).start();

  try {
    const installed = new Set<string>();
    const filesWritten = new Set<string>();

    const copyAndRewrite = async (filePath: string, destPath: string) => {
      let content = await fs.readFile(filePath, 'utf8');

      // 1. Rewrite relative hook imports, e.g. '../../hooks/use-haptics' -> '~/hooks/use-haptics'
      content = content.replace(
        /from\s+['"](?:\.\.\/)+hooks\/([^'"]+)['"]/g,
        (match, hookName) => {
          // Trigger hook installation
          installHook(hookName);
          return `from '~/hooks/${hookName}'`;
        }
      );

      // 2. Rewrite relative lib imports, e.g. '../../lib/utils' -> '~/lib/utils'
      content = content.replace(
        /from\s+['"](?:\.\.\/)+lib\/([^'"]+)['"]/g,
        (match, libName) => {
          // Trigger lib installation
          installLib(libName);
          return `from '~/lib/${libName}'`;
        }
      );

      // 3. Rewrite sibling component imports, e.g. '../typography' -> '~/components/ui/typography'
      content = content.replace(
        /from\s+['"]\.\.\/([^'"]+)['"]/g,
        (match, compName) => {
          installComponent(compName);
          return `from '~/components/ui/${compName}'`;
        }
      );

      // 4. Rewrite deep component imports, e.g. '../../components/typography' -> '~/components/ui/typography'
      content = content.replace(
        /from\s+['"](?:\.\.\/)+components\/([^'"]+)['"]/g,
        (match, compName) => {
          installComponent(compName);
          return `from '~/components/ui/${compName}'`;
        }
      );

      await fs.ensureDir(path.dirname(destPath));
      await fs.writeFile(destPath, content, 'utf8');
      filesWritten.add(destPath);
    };

    const installHook = async (hookName: string) => {
      const srcHookFile = path.join(srcPath, 'hooks', `${hookName}.ts`);
      const destHookFile = path.join(cwd, hooksDir, `${hookName}.ts`);

      if (await fs.pathExists(srcHookFile) && !filesWritten.has(destHookFile)) {
        await copyAndRewrite(srcHookFile, destHookFile);
      }
    };

    const installLib = async (libName: string) => {
      const extensions = ['.ts', '.tsx'];
      for (const ext of extensions) {
        const srcLibFile = path.join(srcPath, 'lib', `${libName}${ext}`);
        const destLibFile = path.join(cwd, libDir, `${libName}${ext}`);

        if (await fs.pathExists(srcLibFile) && !filesWritten.has(destLibFile)) {
          await copyAndRewrite(srcLibFile, destLibFile);
          break;
        }
      }
    };

    const installComponent = async (compName: string) => {
      if (installed.has(compName)) return;
      installed.add(compName);

      spinner.text = `Installing ${compName}...`;

      // Case 1: Core component folder (e.g. src/components/button)
      const coreCompDir = path.join(srcPath, 'components', compName);
      if (await fs.pathExists(coreCompDir)) {
        const destCompDir = path.join(cwd, componentsDir, compName);
        await fs.ensureDir(destCompDir);

        const files = await fs.readdir(coreCompDir);
        for (const file of files) {
          await copyAndRewrite(
            path.join(coreCompDir, file),
            path.join(destCompDir, file)
          );
        }
        return;
      }

      // Case 2: Premium component flat file (e.g. src/premium/mobile/biometric-button.tsx)
      const premiumFile = await findPremiumComponentFile(srcPath, compName);
      if (premiumFile) {
        const destCompDir = path.join(cwd, componentsDir, compName);
        await fs.ensureDir(destCompDir);

        // Put premium component in its own folder with an index file for clean modular imports
        await copyAndRewrite(
          premiumFile,
          path.join(destCompDir, `${compName}.tsx`)
        );
        await fs.writeFile(
          path.join(destCompDir, 'index.ts'),
          `export * from './${compName}';\n`,
          'utf8'
        );
        filesWritten.add(path.join(destCompDir, 'index.ts'));
        return;
      }

      console.log(chalk.yellow(`\n⚠️ Component "${compName}" could not be found in the registry.`));
    };

    // Begin installation
    for (const comp of targetComponents) {
      await installComponent(comp);
    }

    spinner.succeed(`Successfully installed components: ${targetComponents.join(', ')}`);
    console.log(chalk.green('\n🎉 Done!'));
    console.log(chalk.gray(`Copied files & resolved dependencies in components, hooks, and lib folders.\n`));

  } catch (error: any) {
    spinner.fail(`Failed to install components: ${error.message}`);
  }
}

