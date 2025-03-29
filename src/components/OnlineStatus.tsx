import { TrendingUp, ChevronDown, MoreHorizontal, Maximize2 } from "lucide-react";

const MarketPerformance = () => {
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div className="flex items-center">
          <TrendingUp size={20} className="mr-2" />
          <h2 className="text-lg font-bold">Market Performance</h2>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <button className="px-3 py-1 rounded-full text-sm font-medium bg-purple-500 text-white">All Markets</button>
          
          <div className="flex items-center bg-white px-3 py-1 rounded-full">
            <span className="text-sm font-medium mr-1">Quarter</span>
            <ChevronDown size={16} />
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-1 rounded-lg hover:bg-gray-100">
              <MoreHorizontal size={20} />
            </button>
            <button className="p-1 rounded-lg hover:bg-gray-100">
              <Maximize2 size={18} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="status-card bg-gradient-to-b from-orange-500 to-orange-400 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-1">24.5%</h2>
          <p className="text-sm opacity-80">S&P 500</p>
        </div>
        
        <div className="status-card">
          <h2 className="text-3xl md:text-4xl font-bold mb-1">7.6%</h2>
          <p className="text-sm text-gray-500">NASDAQ</p>
        </div>
        
        <div className="status-card">
          <h2 className="text-3xl md:text-4xl font-bold mb-1">-2.9%</h2>
          <p className="text-sm text-gray-500">DOW</p>
        </div>
        
        <div className="status-card">
          <h2 className="text-3xl md:text-4xl font-bold mb-1">18.5%</h2>
          <p className="text-sm text-gray-500">Russell 2000</p>
        </div>
        
        <div className="status-card">
          <h2 className="text-3xl md:text-4xl font-bold mb-1">17.0%</h2>
          <p className="text-sm text-gray-500">NYSE</p>
        </div>
      </div>
    </div>
  );
};

export default MarketPerformance;
