import type { Plugin } from '../api/plugins';

let intervalId: number | undefined;

export const timestampPlugin: Plugin = {
    name: 'Timestamp Logger',
    description: 'Logs the current timestamp every 5 seconds',
    version: '1.0.0',
    author: 'Plugin Manager',
    enabled: false,

    start() {
        console.log('⏰ Timestamp Logger: Started!');
        intervalId = window.setInterval(() => {
            const now = new Date();
            console.log(`[Timestamp] ${now.toLocaleTimeString()}`);
        }, 5000);
    },

    stop() {
        if (intervalId !== undefined) {
            clearInterval(intervalId);
            intervalId = undefined;
            console.log('⏰ Timestamp Logger: Stopped!');
        }
    },

    settings: {
        interval: 5000,
        format: 'time',
    },
};
