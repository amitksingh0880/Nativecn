# cnnative

The complete ecosystem for a beautiful, responsive, and highly customizable React Native component library, inspired by the philosophy of shadcn/ui. 

Unlike traditional UI libraries that add heavy weight and lock you into fixed styles, `cnnative` uses a CLI-driven, copy-paste model. You install the peer dependencies once, and copy individual components directly into your project's codebase where you own and modify them.

## Workspace Structure

This repository is organized as an npm monorepo containing the following workspaces:

*   **`packages/cli` (`cnnative`)**: The command-line interface tool to initialize your project config and add component files directly into your codebase.
*   **`packages/nativecn` (`cnnative-ui`)**: The core component library package housing the original TypeScript source code for core and premium animated components.
*   **`apps/docs`**: The Next.js-powered documentation and preview website deployed at [https://nativecn-docs.vercel.app/](https://nativecn-docs.vercel.app/).

---

## Quick Start

### 1. Initialize Your Project
Run the initialization command in the root of your existing React Native or Expo project:
```bash
npx cnnative init
```
This command will:
1. Create a `cnnative.json` configuration file at your project root.
2. Prompt you to customize directory mappings for components, custom hooks, and utility files.
3. Write core utility files (`cn`, `platform`, `variants`, `types`, and `create-component`) into your utility directory.
4. Auto-install peer dependencies (NativeWind v5, Reanimated 4, Gesture Handler, Blur, Safe Area Context, etc.) if requested.

### 2. Add Components
Use the CLI to copy components directly into your codebase:
```bash
npx cnnative add button
```
To see a list of all available components, run the command without arguments:
```bash
npx cnnative add
```

---

## Local Development

To run the monorepo workspace locally:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/amitksingh0880/Nativecn.git
    cd Nativecn
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Build the workspaces**:
    ```bash
    npm run build
    ```
4.  **Run the documentation site**:
    ```bash
    npm run dev --workspace=@nativecn/docs
    ```
    Access the site at `http://localhost:3000`.

## License

This project is licensed under the MIT License.
