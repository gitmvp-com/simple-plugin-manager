export interface PluginSettings {
    [key: string]: any;
}

export interface Plugin {
    name: string;
    description: string;
    version: string;
    author?: string;
    enabled: boolean;
    start?: () => void;
    stop?: () => void;
    settings?: PluginSettings;
}

class PluginManagerAPI {
    private plugins: Map<string, Plugin> = new Map();
    private listeners: Set<() => void> = new Set();

    registerPlugin(plugin: Plugin) {
        this.plugins.set(plugin.name, plugin);
        this.notifyListeners();
    }

    getPlugin(name: string): Plugin | undefined {
        return this.plugins.get(name);
    }

    getAllPlugins(): Plugin[] {
        return Array.from(this.plugins.values());
    }

    togglePlugin(name: string) {
        const plugin = this.plugins.get(name);
        if (!plugin) return;

        if (plugin.enabled) {
            plugin.stop?.();
            plugin.enabled = false;
            console.log(`[PluginManager] Stopped plugin: ${name}`);
        } else {
            plugin.start?.();
            plugin.enabled = true;
            console.log(`[PluginManager] Started plugin: ${name}`);
        }

        this.notifyListeners();
    }

    updatePluginSettings(name: string, settings: PluginSettings) {
        const plugin = this.plugins.get(name);
        if (!plugin) return;

        plugin.settings = { ...plugin.settings, ...settings };
        this.notifyListeners();
        console.log(`[PluginManager] Updated settings for: ${name}`);
    }

    subscribe(listener: () => void) {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
    }

    private notifyListeners() {
        this.listeners.forEach(listener => listener());
    }
}

export const PluginManager = new PluginManagerAPI();
