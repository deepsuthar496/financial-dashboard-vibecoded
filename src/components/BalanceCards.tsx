
import { Calendar, CircleDollarSign } from "lucide-react";

const BalanceCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <CircleDollarSign className="text-purple-500" size={24} />
          </div>
          <span className="text-xs font-medium px-2 py-1 bg-purple-100 text-purple-800 rounded-full">+11%</span>
        </div>
        <p className="text-gray-600 mb-1">Available Balance</p>
        <h3 className="text-2xl font-bold">$ 27,980.24</h3>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
            <CircleDollarSign className="text-orange-500" size={24} />
          </div>
          <span className="text-xs font-medium px-2 py-1 bg-black text-white rounded-full">-1%</span>
        </div>
        <p className="text-gray-600 mb-1">Pending Balance</p>
        <h3 className="text-2xl font-bold">$ 3980.23</h3>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
            <Calendar className="text-gray-800" size={24} />
          </div>
        </div>
        <p className="text-gray-600 mb-1">Period</p>
        <h3 className="text-lg font-medium">26 Jul - 26 Aug</h3>
      </div>
    </div>
  );
};

export default BalanceCards;
