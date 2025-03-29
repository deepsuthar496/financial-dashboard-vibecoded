import { Search, Bell, Github } from "lucide-react";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
      <div className="flex items-center space-x-3">
        <div className="flex space-x-3">
          <button className="nav-pill active">Overview</button>
          <button className="nav-pill inactive">Member</button>
          <button className="nav-pill inactive">Account</button>
          <button className="nav-pill inactive">Payment</button>
        </div>
        
        <div className="h-6 border-l border-gray-300 mx-1"></div>
        
        <a 
          href="https://github.com/deepsuthar496/financial-dashboard-vibecoded" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nav-pill bg-black text-white hover:bg-gray-800 flex items-center gap-1"
        >
          <Github size={16} />
          <span>GitHub</span>
        </a>
      </div>
      
      <div className="flex items-center space-x-4 w-full md:w-auto">
        <div className="relative w-full md:w-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input 
            type="text" 
            placeholder="Start searching here..." 
            className="bg-white h-10 pl-10 pr-4 rounded-full text-sm w-full md:w-[300px] focus:outline-none border-0"
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <Bell className="h-5 w-5" />
          </div>
          <span className="text-sm text-gray-700">Sat, 26 Aug</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
