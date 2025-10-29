import type { Plugin } from '../api/plugins';

let originalConsoleLog: typeof console.log;
let logCount = 0;

export const consoleLoggerPlugin: Plugin = {
    name: 'Console Logger',
    description: 'Intercepts console.log calls and adds a counter',
    version: '1.0.0',
    author: 'Plugin Manager',
    enabled: false,

    start() {
        originalConsoleLog = console.log;
        logCount = 0;

        console.log = (...args: any[]) => {
            logCount++;
            originalConsoleLog(`[Log #${logCount}]`, ...args);
        };

        console.log('Console Logger Plugin: Now counting all console logs!');
    },

    stop() {
        if (originalConsoleLog) {
            console.log = originalConsoleLog;
            originalConsoleLog(`Console Logger Plugin: Stopped. Total logs counted: ${logCount}`);
            logCount = 0;
        }
    },

    settings: {
        prefix: '[Log]',
        showCount: true,
    },
};
