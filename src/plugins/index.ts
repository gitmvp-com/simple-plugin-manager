import { PluginManager } from '../api/plugins';
import { examplePlugin } from './example';
import { consoleLoggerPlugin } from './consoleLogger';
import { timestampPlugin } from './timestamp';

// Register all plugins
export function initPlugins() {
    PluginManager.registerPlugin(examplePlugin);
    PluginManager.registerPlugin(consoleLoggerPlugin);
    PluginManager.registerPlugin(timestampPlugin);
    console.log('[PluginManager] All plugins registered');
}
