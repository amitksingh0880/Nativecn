# cnnative

The official Command-Line Interface (CLI) for the **cnnative-ui** ecosystem. A tool for configuring and copying premium React Native component primitives directly into your application directory.

## Installation

You do not need to install the CLI globally. You can invoke it dynamically on demand:

```bash
npx cnnative <command>
```

---

## Commands

### `init`
Initializes your project workspace for `cnnative-ui`.
```bash
npx cnnative init
```
This command runs an interactive prompt that lets you configure your workspace directory structures, creates a `cnnative.json` file, writes baseline layout utilities (like `cn`, `platform`, `types`, etc.), and installs required peer dependencies.

### `add`
Downloads and writes a component directly into your configured directories, automatically rewriting relative imports to match your project settings.
```bash
# Add a single component
npx cnnative add button

# Add multiple components
npx cnnative add card switch input dialog

# Interactively choose from available components
npx cnnative add
```

---

## Configuration (`cnnative.json`)

When you run `init`, the CLI generates a `cnnative.json` configuration file at your root directory. A typical configuration looks like this:

```json
{
  "$schema": "https://cnnative.com/schema.json",
  "style": "default",
  "typescript": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "global.css",
    "baseColor": "zinc"
  },
  "aliases": {
    "components": "~/components/ui",
    "hooks": "~/hooks",
    "lib": "~/lib"
  }
}
```

## License

MIT
