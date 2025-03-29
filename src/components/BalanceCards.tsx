import { CircleDollarSign, Calendar } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const BalanceCards = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`${isMobile ? "grid grid-cols-1" : "flex"} gap-4 mb-8`}>
      <div className="bg-white p-4 rounded-xl shadow-sm flex items-center flex-1">
        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
          <CircleDollarSign className="text-purple-500" size={20} />
        </div>
        <div className="flex-1">
          <p className="text-xs text-gray-500 mb-0.5">Investment Value</p>
          <h3 className="text-lg font-bold">$ 27,980.24</h3>
        </div>
        <span className="text-xs font-medium px-2 py-1 bg-black text-white rounded-full ml-2">+11%</span>
      </div>
      
      <div className="bg-white p-4 rounded-xl shadow-sm flex items-center flex-1">
        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
          <CircleDollarSign className="text-orange-500" size={20} />
        </div>
        <div className="flex-1">
          <p className="text-xs text-gray-500 mb-0.5">Dividends</p>
          <h3 className="text-lg font-bold">$ 3980.23</h3>
        </div>
        <span className="text-xs font-medium px-2 py-1 bg-black text-white rounded-full ml-2">+4%</span>
      </div>
      
      <div className="bg-white p-4 rounded-xl shadow-sm flex items-center flex-1">
        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
          <Calendar className="text-gray-800" size={20} />
        </div>
        <div className="flex-1">
          <p className="text-xs text-gray-500 mb-0.5">Fiscal Period</p>
          <h3 className="text-sm font-medium">Q3 2023</h3>
        </div>
      </div>
    </div>
  );
};

export default BalanceCards;
