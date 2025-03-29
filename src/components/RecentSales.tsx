
import { CircleDotIcon } from "lucide-react";

const RecentSales = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center mb-6">
        <CircleDotIcon size={18} className="mr-2" />
        <h3 className="font-bold">Recent Sales</h3>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-3">
            <img 
              src="https://randomuser.me/api/portraits/women/44.jpg" 
              alt="Karen" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-medium">Karen</p>
            <p className="text-xs text-gray-500">01 Day ago</p>
          </div>
          <div className="ml-auto">
            <p className="font-bold">$249.95</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-3">
            <img 
              src="https://randomuser.me/api/portraits/men/86.jpg" 
              alt="Marcus" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-medium">Marcus</p>
            <p className="text-xs text-gray-500">03 Days ago</p>
          </div>
          <div className="ml-auto">
            <p className="font-bold">$399.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentSales;
