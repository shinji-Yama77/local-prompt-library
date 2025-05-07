import './App.css';
import { Search, Code, Folder, PlusCircle, Settings, Moon, User } from 'lucide-react';

export default function App() {

  const accentColor = "#38bdf8";
  const sideNavColor = "#0f172a";
  const distinctColor = "#E8A317";

  const sideNavItems = [
    { id: 'all', icon: <Code size={20} />, label: 'All Snippets' },
    { id: 'folders', icon: <Folder size={20} />, label: 'Folders' },
    { id: 'settings', icon: <Settings size={20} />, label: 'Settings' }
  ];

  return (
    <div className="flex h-screen w-full bg-slate-900 text-slate-200 overflow-hidden">
      <div className="w-64 h-full flex flex-col" style={{ backgroundColor: sideNavColor }}>
        <div className="p-4 flex items-center border-b border-slate-700">
            <Code size={24} className="mr-2" style={{ color: accentColor }} />
            <h1 className="text-xl font-bold">CodeVault</h1>
        </div>
        <nav className="flex-1 overflow-y-auto p-2">
          <ul>
            {sideNavItems.map(item => (
              <li key={item.id}>
                <button
                  className="w-full flex items-center p-3 mb-1 rounded-md transition-colors"
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      
    </div>
  )
}