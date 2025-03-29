import { 
  Flame, 
  Home, 
  List, 
  File, 
  User, 
  Star, 
  Settings, 
  Box, 
  Layers, 
  HelpCircle 
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-12 bg-white h-screen flex flex-col items-center fixed left-0 top-0 shadow-sm z-10">
      <div className="mt-3 mb-5">
        <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center">
          <Flame size={14} />
        </div>
      </div>
      
      <div className="flex flex-col items-center space-y-1 flex-1">
        <div className="sidebar-icon active">
          <Home size={16} />
        </div>
        <div className="sidebar-icon">
          <List size={16} />
        </div>
        <div className="sidebar-icon">
          <File size={16} />
        </div>
        <div className="sidebar-icon">
          <User size={16} />
        </div>
        <div className="sidebar-icon">
          <Star size={16} />
        </div>
        <div className="sidebar-icon">
          <Settings size={16} />
        </div>
        <div className="sidebar-icon">
          <Box size={16} />
        </div>
        <div className="sidebar-icon">
          <Layers size={16} />
        </div>
        <div className="sidebar-icon">
          <HelpCircle size={16} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
