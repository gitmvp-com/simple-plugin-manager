# Simple Plugin Manager

> MVP version inspired by [Vencord](https://github.com/Vendicated/Vencord) - A demonstration of a simple plugin architecture

## 🎯 What is this?

This is a simplified MVP version inspired by Vencord's plugin system. It demonstrates the core concept of a modular plugin architecture where plugins can be:
- Enabled/disabled dynamically
- Configured with settings
- Managed through a clean UI

## ✨ Features

- **Plugin Manager**: Simple system to load and manage plugins
- **Dynamic Plugin Loading**: Enable/disable plugins at runtime
- **Plugin Settings**: Each plugin can have its own settings
- **React UI**: Clean interface to manage plugins
- **TypeScript**: Fully typed for better development experience

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## 📦 Project Structure

```
src/
├── api/           # Core plugin API
│   └── plugins.ts # Plugin manager
├── plugins/       # Plugin implementations
│   ├── example/   # Example plugin
│   └── index.ts   # Plugin registry
├── components/    # React components
│   └── PluginManager.tsx
├── utils/         # Utility functions
└── main.tsx       # Entry point
```

## 🔌 Creating a Plugin

Plugins follow a simple interface:

```typescript
export interface Plugin {
    name: string;
    description: string;
    version: string;
    enabled: boolean;
    start?: () => void;
    stop?: () => void;
    settings?: PluginSettings;
}
```

Example plugin:

```typescript
export const myPlugin: Plugin = {
    name: "My Plugin",
    description: "Does something cool",
    version: "1.0.0",
    enabled: false,
    start() {
        console.log("Plugin started!");
    },
    stop() {
        console.log("Plugin stopped!");
    },
};
```

## 🎨 Built With

- **React 19** - UI framework
- **TypeScript 5.8** - Type safety
- **Vite 6** - Build tool
- **pnpm** - Package manager

## 📝 License

MIT License - This is an educational MVP inspired by Vencord

## 🙏 Acknowledgments

- Inspired by [Vencord](https://github.com/Vendicated/Vencord) by Vendicated
- This is a simplified educational version to demonstrate plugin architecture concepts

## ⚠️ Disclaimer

This is an educational MVP demonstrating plugin architecture concepts. It is NOT a Discord client mod and does not interact with Discord in any way.
