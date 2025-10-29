import { useEffect, useState } from 'react';
import { PluginManager as PM, type Plugin } from '../api/plugins';
import { initPlugins } from '../plugins';
import './PluginManager.css';

export function PluginManager() {
    const [plugins, setPlugins] = useState<Plugin[]>([]);
    const [selectedPlugin, setSelectedPlugin] = useState<Plugin | null>(null);

    useEffect(() => {
        // Initialize plugins on mount
        initPlugins();
        setPlugins(PM.getAllPlugins());

        // Subscribe to plugin changes
        const unsubscribe = PM.subscribe(() => {
            setPlugins(PM.getAllPlugins());
        });

        return unsubscribe;
    }, []);

    const handleTogglePlugin = (pluginName: string) => {
        PM.togglePlugin(pluginName);
    };

    return (
        <div className="plugin-manager">
            <div className="plugin-list">
                <h2>📋 Installed Plugins</h2>
                <div className="plugins">
                    {plugins.map((plugin) => (
                        <div
                            key={plugin.name}
                            className={`plugin-card ${
                                plugin.enabled ? 'enabled' : 'disabled'
                            } ${selectedPlugin?.name === plugin.name ? 'selected' : ''}`}
                            onClick={() => setSelectedPlugin(plugin)}
                        >
                            <div className="plugin-header">
                                <h3>{plugin.name}</h3>
                                <span className={`status-badge ${
                                    plugin.enabled ? 'enabled' : 'disabled'
                                }`}>
                                    {plugin.enabled ? '✓ Enabled' : '○ Disabled'}
                                </span>
                            </div>
                            <p className="plugin-description">{plugin.description}</p>
                            <div className="plugin-footer">
                                <span className="plugin-version">v{plugin.version}</span>
                                {plugin.author && (
                                    <span className="plugin-author">by {plugin.author}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedPlugin && (
                <div className="plugin-details">
                    <div className="details-header">
                        <h2>{selectedPlugin.name}</h2>
                        <button
                            className={`toggle-btn ${
                                selectedPlugin.enabled ? 'enabled' : 'disabled'
                            }`}
                            onClick={() => handleTogglePlugin(selectedPlugin.name)}
                        >
                            {selectedPlugin.enabled ? 'Disable' : 'Enable'}
                        </button>
                    </div>
                    <p className="details-description">{selectedPlugin.description}</p>
                    <div className="details-meta">
                        <p><strong>Version:</strong> {selectedPlugin.version}</p>
                        {selectedPlugin.author && (
                            <p><strong>Author:</strong> {selectedPlugin.author}</p>
                        )}
                    </div>
                    {selectedPlugin.settings && (
                        <div className="plugin-settings">
                            <h3>⚙️ Settings</h3>
                            <div className="settings-list">
                                {Object.entries(selectedPlugin.settings).map(([key, value]) => (
                                    <div key={key} className="setting-item">
                                        <span className="setting-key">{key}:</span>
                                        <code className="setting-value">
                                            {JSON.stringify(value)}
                                        </code>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
