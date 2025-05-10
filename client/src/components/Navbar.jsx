import { Search, Code, Folder, PlusCircle, Settings, Moon, User, Star } from 'lucide-react';
import { useState } from 'react';

const sideNavItems = [
    { id: 'all', icon: <Code size={20} />, label: 'All Snippets' },
    { id: 'favorites', icon: <Star size={20} />, label: 'My Snippets'},
    { id: 'folders', icon: <Folder size={20} />, label: 'Shared Folders' },
    { id: 'settings', icon: <Settings size={20} />, label: 'Settings' }
  ];

const distinctColor = "#E8A317";
const sideNavColor = "#0f172a";


export default function Navbar() {
    const [active, setActiveTab] = useState('all')
  

    return (
        <nav className="flex-1 overflow-y-auto p-2" style={{ backgroundColor: sideNavColor}}>
          <ul>
            {sideNavItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`w-full flex items-center p-3 mb-1 rounded-md transition-colors ${
                    active === item.id ? 'bg-blue-800 text-blue-100' : 'hover:bg-slate-800 text-slate-300'}`}
                    onClick={() => setActiveTab(item.id)}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
    )
}