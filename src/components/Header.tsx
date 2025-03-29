
import { Search, Bell } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex space-x-3">
        <button className="nav-pill active">Overview</button>
        <button className="nav-pill inactive">Member</button>
        <button className="nav-pill inactive">Account</button>
        <button className="nav-pill inactive">Payment</button>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input 
            type="text" 
            placeholder="Start searching here..." 
            className="bg-white h-10 pl-10 pr-4 rounded-full text-sm w-[300px] focus:outline-none"
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
