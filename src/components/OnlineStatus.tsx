
import { Wifi, ChevronDown, MoreHorizontal, Maximize2 } from "lucide-react";

const OnlineStatus = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Wifi size={20} className="mr-2" />
          <h2 className="text-lg font-bold">Online Status</h2>
        </div>
        
        <div className="flex items-center space-x-3">
          <button className="px-3 py-1 rounded-full text-sm font-medium bg-purple-500 text-white">All</button>
          
          <div className="flex items-center ml-4 bg-white px-3 py-1 rounded-full">
            <span className="text-sm font-medium mr-1">Month</span>
            <ChevronDown size={16} />
          </div>
          
          <button className="p-1 rounded-lg">
            <MoreHorizontal size={20} />
          </button>
          <button className="p-1 rounded-lg">
            <Maximize2 size={18} />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-5 gap-6">
        <div className="status-card bg-gradient-to-b from-orange-500 to-orange-400 text-white">
          <h2 className="text-4xl font-bold mb-1">2458</h2>
          <p className="text-sm opacity-80">Visitors</p>
        </div>
        
        <div className="status-card">
          <h2 className="text-4xl font-bold mb-1">756</h2>
          <p className="text-sm text-gray-500">New Orders</p>
        </div>
        
        <div className="status-card">
          <h2 className="text-4xl font-bold mb-1">298</h2>
          <p className="text-sm text-gray-500">Refunds</p>
        </div>
        
        <div className="status-card">
          <h2 className="text-4xl font-bold mb-1">18</h2>
          <p className="text-sm text-gray-500">Cancellations</p>
        </div>
        
        <div className="status-card">
          <h2 className="text-4xl font-bold mb-1">1700</h2>
          <p className="text-sm text-gray-500">Active Users</p>
        </div>
      </div>
    </div>
  );
};

export default OnlineStatus;
