import chalk from 'chalk';
import prompts from 'prompts';
import ora from 'ora';
import fs from 'fs-extra';
import path from 'path';
import { execSync } from 'child_process';

async function detectPackageManager(cwd: string): Promise<'npm' | 'pnpm' | 'yarn' | 'bun'> {
  if (await fs.pathExists(path.join(cwd, 'pnpm-lock.yaml'))) {
    return 'pnpm';
  }
  if (await fs.pathExists(path.join(cwd, 'yarn.lock'))) {
    return 'yarn';
  }
  if (await fs.pathExists(path.join(cwd, 'bun.lockb')) || await fs.pathExists(path.join(cwd, 'bun.lock'))) {
    return 'bun';
  }
  if (await fs.pathExists(path.join(cwd, 'package-lock.json'))) {
    return 'npm';
  }

  // Fallback to environment checks
  const userAgent = process.env.npm_config_user_agent || '';
  if (userAgent.includes('pnpm')) return 'pnpm';
  if (userAgent.includes('yarn')) return 'yarn';
  if (userAgent.includes('bun')) return 'bun';

  return 'npm';
}

async function isExpoProject(cwd: string): Promise<boolean> {
  const pkgPath = path.join(cwd, 'package.json');
  if (!await fs.pathExists(pkgPath)) return false;
  try {
    const pkg = await fs.readJSON(pkgPath);
    return !!(pkg.dependencies?.['expo'] || pkg.devDependencies?.['expo']);
  } catch {
    return false;
  }
}

// Helper to find the monorepo packages/nativecn directory to copy core files
function getSourceLibPath(): string {
  // Try locating relative to cli workspace first
  const relativePath = path.resolve(__dirname, '../../../../packages/nativecn/src/lib');
  if (fs.existsSync(relativePath)) {
    return relativePath;
  }
  const alternativePath = path.resolve(__dirname, '../../packages/nativecn/src/lib');
  if (fs.existsSync(alternativePath)) {
    return alternativePath;
  }
  return '';
}

export async function init() {
  console.log(chalk.blue('\n🚀 Initializing Nativecn UI in your project...\n'));

  const cwd = process.cwd();
  const pkgPath = path.join(cwd, 'package.json');

  if (!await fs.pathExists(pkgPath)) {
    console.log(chalk.red('❌ No package.json found. Please run this command in your React Native project root.'));
    process.exit(1);
  }

  const detectedPkgManager = await detectPackageManager(cwd);
  const detectedExpo = await isExpoProject(cwd);

  const response = await prompts([
    {
      type: 'confirm',
      name: 'typescript',
      message: 'Are you using TypeScript?',
      initial: true,
    },
    {
      type: 'text',
      name: 'componentsDir',
      message: 'Where would you like to store your components?',
      initial: 'components/ui',
    },
    {
      type: 'text',
      name: 'hooksDir',
      message: 'Where would you like to store custom hooks?',
      initial: 'hooks',
    },
    {
      type: 'text',
      name: 'libDir',
      message: 'Where would you like to store utility files (cn, cva)?',
      initial: 'lib',
    },
    {
      type: 'select',
      name: 'packageManager',
      message: 'Which package manager would you like to use?',
      choices: [
        { title: 'npm', value: 'npm' },
        { title: 'pnpm', value: 'pnpm' },
        { title: 'yarn', value: 'yarn' },
        { title: 'bun', value: 'bun' }
      ],
      initial: ['npm', 'pnpm', 'yarn', 'bun'].indexOf(detectedPkgManager) >= 0 ? ['npm', 'pnpm', 'yarn', 'bun'].indexOf(detectedPkgManager) : 0
    },
    {
      type: 'confirm',
      name: 'installDeps',
      message: 'Would you like the CLI to install the required peer and core dependencies?',
      initial: true
    }
  ]);

  if (!response.componentsDir) {
    console.log(chalk.red('Initialization cancelled.'));
    process.exit(0);
  }

  const spinner = ora('Writing nativecn.json configuration...').start();

  const config = {
    $schema: "https://nativecn.com/schema.json",
    style: "default",
    typescript: response.typescript,
    tailwind: {
      config: "tailwind.config.js",
      css: "global.css",
      baseColor: "zinc",
    },
    aliases: {
      components: `~/${response.componentsDir}`,
      hooks: `~/${response.hooksDir}`,
      lib: `~/${response.libDir}`,
    }
  };

  await fs.writeJSON(path.join(cwd, 'nativecn.json'), config, { spaces: 2 });
  spinner.succeed('Created nativecn.json');

  // Copying Core Library Files
  const libSpinner = ora('Writing core utility files to ' + response.libDir + '...').start();
  try {
    const targetLibDir = path.join(cwd, response.libDir);
    await fs.ensureDir(targetLibDir);

    const sourceLibPath = getSourceLibPath();

    if (sourceLibPath && await fs.pathExists(sourceLibPath)) {
      // Copy real core lib files from monorepo source
      await fs.copy(sourceLibPath, targetLibDir);
      libSpinner.succeed('Created core utility files (cn, create-component, platform, types, variants) in ' + response.libDir);
    } else {
      // Fallback: Write defaults in case source files are not found (e.g. running standalone CLI)
      await fs.writeFile(path.join(targetLibDir, 'utils.ts'), `import { clsx, type ClassValue } from 'clsx';\nimport { twMerge } from 'tailwind-merge';\n\nexport function cn(...inputs: ClassValue[]): string {\n  return twMerge(clsx(inputs));\n}\n\nexport function composeEventHandlers<E>(\n  originalEventHandler?: (event: E) => void,\n  ourEventHandler?: (event: E) => void,\n  { checkForDefaultPrevented = true } = {}\n) {\n  return function handleEvent(event: E) {\n    originalEventHandler?.(event);\n    if (checkForDefaultPrevented === false || !(event as any)?.defaultPrevented) {\n      return ourEventHandler?.(event);\n    }\n  };\n}\n`);
      await fs.writeFile(path.join(targetLibDir, 'variants.ts'), `import { cva, type VariantProps } from 'class-variance-authority';\nexport { cva, type VariantProps };\n`);
      await fs.writeFile(path.join(targetLibDir, 'platform.ts'), `import { Platform } from 'react-native';\nexport const isIOS = Platform.OS === 'ios';\nexport const isAndroid = Platform.OS === 'android';\nexport const isWeb = Platform.OS === 'web';\nexport const isNative = isIOS || isAndroid;\nexport function platformClasses(classes: { ios?: string; android?: string; web?: string; native?: string; default?: string; }): string {\n  if (isIOS && classes.ios) return classes.ios;\n  if (isAndroid && classes.android) return classes.android;\n  if (isWeb && classes.web) return classes.web;\n  if (isNative && classes.native) return classes.native;\n  return classes.default || '';\n}\n`);
      await fs.writeFile(path.join(targetLibDir, 'types.ts'), `import type { ViewStyle, TextStyle, ImageStyle } from 'react-native';\nexport type AnyStyle = ViewStyle | TextStyle | ImageStyle;\nexport type BooleanString = 'true' | 'false';\nexport type ComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'icon' | 'icon-sm' | 'icon-lg';\nexport type ComponentVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'gradient' | 'glass';\nexport type HapticFeedbackType = 'none' | 'selection' | 'light' | 'medium' | 'heavy' | 'success' | 'warning' | 'error';\n`);
      await fs.writeFile(path.join(targetLibDir, 'create-component.tsx'), `import React, { forwardRef } from 'react';\nimport { cn } from './utils';\n\nexport interface CreateComponentOptions<TProps, TVariants> {\n  Component: React.ElementType;\n  baseClassName?: string;\n  variants?: (props: any) => string;\n  defaultProps?: Partial<TProps>;\n}\n\nexport function createComponent<TRef, TProps extends { className?: string; style?: any }>(options: CreateComponentOptions<TProps, any>) {\n  const { Component, baseClassName = '', variants, defaultProps = {} } = options;\n  const ForwardedComponent = forwardRef<TRef, TProps>((props, ref) => {\n    const mergedProps = { ...defaultProps, ...props };\n    const { className, style, ...restProps } = mergedProps;\n    const variantClassName = variants ? variants(mergedProps) : '';\n    const finalClassName = cn(baseClassName, variantClassName, className);\n    return <Component ref={ref} className={finalClassName || undefined} style={style} {...restProps} />;\n  });\n  ForwardedComponent.displayName = \`NativecnComponent(\${(Component as any).displayName || (Component as any).name || 'Unknown'})\`;\n  return ForwardedComponent;\n}\n`);
      libSpinner.succeed('Created fallback utility files in ' + response.libDir);
    }
  } catch (error: any) {
    libSpinner.fail('Failed to write utility files: ' + error.message);
  }

  // Installing Dependencies
  if (response.installDeps) {
    const installSpinner = ora('Preparing dependency installation...').start();
    try {
      const pm = response.packageManager;
      
      const nativeDeps = [
        'react-native-reanimated',
        'react-native-gesture-handler',
        'react-native-safe-area-context',
        'react-native-svg',
        'expo-haptics',
        'expo-blur',
        'expo-linear-gradient',
        'expo-local-authentication'
      ];

      const jsDeps = [
        'clsx',
        'tailwind-merge',
        'class-variance-authority',
        'lucide-react-native',
        'moti'
      ];

      installSpinner.stop();

      if (detectedExpo) {
        console.log(chalk.cyan(`\n📦 Expo project detected. Installing native libraries via Expo CLI...`));
        const expoCmd = `npx expo install ${nativeDeps.join(' ')}`;
        console.log(chalk.gray(`Running: ${expoCmd}`));
        execSync(expoCmd, { stdio: 'inherit', cwd });

        console.log(chalk.cyan(`\n📦 Installing remaining utility libraries via ${pm}...`));
        const pmInstallCmd = 
          pm === 'npm' ? `npm install ${jsDeps.join(' ')}` :
          pm === 'pnpm' ? `pnpm add ${jsDeps.join(' ')}` :
          pm === 'yarn' ? `yarn add ${jsDeps.join(' ')}` :
          `bun add ${jsDeps.join(' ')}`;
        console.log(chalk.gray(`Running: ${pmInstallCmd}`));
        execSync(pmInstallCmd, { stdio: 'inherit', cwd });
      } else {
        console.log(chalk.cyan(`\n📦 Installing all peer and core libraries via ${pm}...`));
        const allDeps = [...nativeDeps, ...jsDeps];
        const pmInstallCmd = 
          pm === 'npm' ? `npm install ${allDeps.join(' ')}` :
          pm === 'pnpm' ? `pnpm add ${allDeps.join(' ')}` :
          pm === 'yarn' ? `yarn add ${allDeps.join(' ')}` :
          `bun add ${allDeps.join(' ')}`;
        console.log(chalk.gray(`Running: ${pmInstallCmd}`));
        execSync(pmInstallCmd, { stdio: 'inherit', cwd });
      }

      console.log(chalk.green('\n✅ Dependencies successfully installed.'));
    } catch (error: any) {
      console.log(chalk.red(`\n❌ Failed to install dependencies: ${error.message}`));
      console.log(chalk.yellow('You will need to manually install these packages in your project.'));
    }
  } else {
    console.log(chalk.yellow('\n⚠️ Dependency installation skipped. Please ensure you install them manually:'));
    console.log(chalk.gray('react-native-reanimated, react-native-gesture-handler, react-native-safe-area-context, react-native-svg, expo-haptics, expo-blur, expo-linear-gradient, expo-local-authentication, clsx, tailwind-merge, class-variance-authority, lucide-react-native, moti\n'));
  }

  console.log(chalk.green('\n✅ Initialization complete.'));
  console.log(chalk.gray('You can now run `npx nativecn add button` to add your first component.\n'));
}

