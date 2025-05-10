import { Search, Code, Folder, PlusCircle, Settings, Moon, User,  Star} from 'lucide-react';
import Navbar from './components/Navbar';
import AllSnippets from './pages/AllSnippets';

export default function App() {

  const accentColor = "#38bdf8";
  const sideNavColor = "#0f172a";
  const distinctColor = "#E8A317";
  const mainContentColor = "#1e293b"; // Slightly lighter blue for main content
  const secondaryTextColor = "#94a3b8"; // Secondary text

  return (
    <div className="flex h-screen w-full bg-slate-900 text-slate-200 overflow-hidden">
      <div className="w-64 h-full flex flex-col" style={{ backgroundColor: sideNavColor }}>
        <div className="p-4 flex items-center border-b border-slate-700">
            <Code size={24} className="mr-2" style={{ color: accentColor }} />
            <h1 className="text-xl font-bold">CodeVault</h1>
        </div>
        <Navbar />
        <div className="p-4 border-t border-slate-700">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-2">
              <User size={16} />
            </div>
            <div>
              <p className="text-sm font-medium">Developer</p>
              <p className="text-xs" style={{ color: secondaryTextColor}}>Free Account</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col overflow-hidden rounded-xl" style={{ backgroundColor: mainContentColor}}>
        <main className="flex-1 overflow-y-auto p-4">
          <div className="flex flex-col justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold">Community Snippets</h2>
              <p className="text-slate-400 mt-2">Discover and use code snippets from developers worldwide</p>
            </div>
            <div className="mt-4 relative w-full">
              <input 
                type="text"
                placeholder="Search snippets..." 
                className="bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-4 py-2 w-full text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search size={16} className="absolute left-3 top-3.25 text-slate-500" />
            </div>
          </div>
          <AllSnippets />
        </main>
        
      </div>
      
      
    </div>
  )
}