#!/usr/bin/env node
import { Command } from 'commander';
import { init } from './commands/init';
import { add } from './commands/add';

const program = new Command();

program
  .name('cnnative')
  .description('CLI to add cnnative-ui components to your React Native / Expo project')
  .version('1.0.0');

program
  .command('init')
  .description('Initialize your project and install core dependencies (Nativewind v5, Reanimated 3)')
  .action(init);

program
  .command('add')
  .description('Add a component to your project')
  .argument('[components...]', 'the components to add')
  .option('-y, --yes', 'skip confirmation prompt', false)
  .option('-o, --overwrite', 'overwrite existing files', false)
  .action(add);

program.parse();
