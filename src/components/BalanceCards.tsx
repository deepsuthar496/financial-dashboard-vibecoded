
import { CircleDollarSign, Calendar } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const BalanceCards = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`${isMobile ? "grid grid-cols-1 gap-3" : "flex gap-4"} mb-4 md:mb-8`}>
      <div className="bg-white p-3 md:p-4 rounded-xl shadow-sm flex items-center flex-1">
        <div className="min-w-8 h-8 md:w-10 md:h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-2 md:mr-3">
          <CircleDollarSign className="text-purple-500" size={isMobile ? 16 : 20} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-gray-500 mb-0.5 truncate">Available Balance</p>
          <h3 className="text-base md:text-lg font-bold truncate">$ 27,980.24</h3>
        </div>
        <span className="text-xs font-medium px-2 py-0.5 md:py-1 bg-black text-white rounded-full ml-1 md:ml-2 whitespace-nowrap">+11%</span>
      </div>
      
      <div className="bg-white p-3 md:p-4 rounded-xl shadow-sm flex items-center flex-1">
        <div className="min-w-8 h-8 md:w-10 md:h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-2 md:mr-3">
          <CircleDollarSign className="text-orange-500" size={isMobile ? 16 : 20} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-gray-500 mb-0.5 truncate">Pending Balance</p>
          <h3 className="text-base md:text-lg font-bold truncate">$ 3980.23</h3>
        </div>
        <span className="text-xs font-medium px-2 py-0.5 md:py-1 bg-black text-white rounded-full ml-1 md:ml-2 whitespace-nowrap">-1%</span>
      </div>
      
      <div className="bg-white p-3 md:p-4 rounded-xl shadow-sm flex items-center flex-1">
        <div className="min-w-8 h-8 md:w-10 md:h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-2 md:mr-3">
          <Calendar className="text-gray-800" size={isMobile ? 16 : 20} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-gray-500 mb-0.5 truncate">Period</p>
          <h3 className="text-xs md:text-sm font-medium truncate">26 Jul - 26 Aug</h3>
        </div>
      </div>
    </div>
  );
};

export default BalanceCards;
