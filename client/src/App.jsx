import { Search, Code, Folder, PlusCircle, Settings, Moon, User } from 'lucide-react';
import Navbar from './components/Navbar/Navbar';

export default function App() {

  const accentColor = "#38bdf8";
  const sideNavColor = "#0f172a";
  const distinctColor = "#E8A317";
  const mainContentColor = "#1e293b"; // Slightly lighter blue for main content
  const secondaryTextColor = "#94a3b8"; // Secondary text

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
        <Navbar />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden" style={{ backgroundColor: mainContentColor}}>
        <header className="h-15.25 border-b border-slate-700 flex items-center justify-between px-6">
            <div className="relative w-96">
              <input
                type="text"
                placeholder="Search snippets..."
                className="w-full py-2 pl-10 pr-4 rounded-md bg-slate-800 border border-slate-700 focus:outline-none focus:border-blue-500"
              />
              <Search size={18} className="absolute left-3 top-3" style={{ color: secondaryTextColor }} />
            </div>
        </header>
      </div>
      
      
    </div>
  )
}