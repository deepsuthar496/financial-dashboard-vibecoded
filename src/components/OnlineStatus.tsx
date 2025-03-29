
import { Wifi, ChevronDown, MoreHorizontal, Maximize2 } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const OnlineStatus = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="mb-4 md:mb-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 md:mb-6">
        <div className="flex items-center">
          <Wifi size={isMobile ? 18 : 20} className="mr-2" />
          <h2 className="text-base md:text-lg font-bold">Online Status</h2>
        </div>
        
        <div className="flex flex-wrap items-center gap-2 md:gap-3">
          <button className="px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-purple-500 text-white">All</button>
          
          <div className="flex items-center bg-white px-2 md:px-3 py-1 rounded-full">
            <span className="text-xs md:text-sm font-medium mr-1">Month</span>
            <ChevronDown size={isMobile ? 14 : 16} />
          </div>
          
          <div className="flex items-center gap-1 md:gap-2">
            <button className="p-1 rounded-lg hover:bg-gray-100">
              <MoreHorizontal size={isMobile ? 18 : 20} />
            </button>
            <button className="p-1 rounded-lg hover:bg-gray-100">
              <Maximize2 size={isMobile ? 16 : 18} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4">
        <div className="status-card bg-gradient-to-b from-orange-500 to-orange-400 text-white py-3 md:py-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-0 md:mb-1">2458</h2>
          <p className="text-xs md:text-sm opacity-80">Visitors</p>
        </div>
        
        <div className="status-card py-3 md:py-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-0 md:mb-1">756</h2>
          <p className="text-xs md:text-sm text-gray-500">New Orders</p>
        </div>
        
        <div className="status-card py-3 md:py-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-0 md:mb-1">298</h2>
          <p className="text-xs md:text-sm text-gray-500">Refunds</p>
        </div>
        
        <div className="status-card py-3 md:py-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-0 md:mb-1">18</h2>
          <p className="text-xs md:text-sm text-gray-500">Cancellations</p>
        </div>
        
        <div className="status-card py-3 md:py-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-0 md:mb-1">1700</h2>
          <p className="text-xs md:text-sm text-gray-500">Active Users</p>
        </div>
      </div>
    </div>
  );
};

export default OnlineStatus;
