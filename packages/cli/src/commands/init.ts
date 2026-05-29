import chalk from 'chalk';
import prompts from 'prompts';
import ora from 'ora';
import fs from 'fs-extra';
import path from 'path';

export async function init() {
  console.log(chalk.blue('\n🚀 Initializing Nativecn UI in your project...\n'));

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

  await fs.writeJSON(path.join(process.cwd(), 'nativecn.json'), config, { spaces: 2 });
  
  spinner.succeed('Created nativecn.json');

  console.log(chalk.green('\n✅ Initialization complete.'));
  console.log(chalk.gray('You can now run `npx nativecn add button` to add your first component.\n'));
}
