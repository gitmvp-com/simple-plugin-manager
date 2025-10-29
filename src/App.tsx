import { PluginManager } from './components/PluginManager';
import './App.css';

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <h1>🔌 Simple Plugin Manager</h1>
                <p>MVP inspired by Vencord - A demonstration of plugin architecture</p>
            </header>
            <main className="app-main">
                <PluginManager />
            </main>
        </div>
    );
}

export default App;
