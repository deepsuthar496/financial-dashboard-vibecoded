import { CircleDotIcon } from "lucide-react";

const RecentTransactions = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center mb-6">
        <CircleDotIcon size={18} className="mr-2" />
        <h3 className="font-bold">Recent Transactions</h3>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-3">
            <span className="text-sm font-bold text-green-600">AAPL</span>
          </div>
          <div>
            <p className="font-medium">Apple Inc.</p>
            <p className="text-xs text-gray-500">Buy • 01 Day ago</p>
          </div>
          <div className="ml-auto">
            <p className="font-bold">$249.95</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-3">
            <span className="text-sm font-bold text-red-600">MSFT</span>
          </div>
          <div>
            <p className="font-medium">Microsoft Corp.</p>
            <p className="text-xs text-gray-500">Sell • 03 Days ago</p>
          </div>
          <div className="ml-auto">
            <p className="font-bold">$399.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
