import type { Plugin } from '../api/plugins';

export const examplePlugin: Plugin = {
    name: 'Example Plugin',
    description: 'A simple example plugin that demonstrates the plugin API',
    version: '1.0.0',
    author: 'Plugin Manager',
    enabled: false,

    start() {
        console.log('✅ Example Plugin: Started!');
        console.log('Example Plugin: This plugin demonstrates basic functionality');
    },

    stop() {
        console.log('⛔ Example Plugin: Stopped!');
    },

    settings: {
        exampleSetting: true,
        message: 'Hello from Example Plugin!',
    },
};
