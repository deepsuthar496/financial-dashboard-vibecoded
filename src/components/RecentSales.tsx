
import { CircleDotIcon } from "lucide-react";

const RecentSales = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center mb-4">
        <CircleDotIcon size={18} className="mr-2" />
        <h3 className="font-bold">Recent Sales</h3>
      </div>
      
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden mr-3">
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
      </div>
    </div>
  );
};

export default RecentSales;
