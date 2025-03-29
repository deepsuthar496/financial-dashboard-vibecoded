
import { BarChart, Circle, ChevronDown, MoreHorizontal, Maximize2, Filter } from "lucide-react";
import { BarChart as RechartsBarChart, Bar, XAxis, ResponsiveContainer } from "recharts";

const salesData = [
  { name: 'Jan', value: 2500 },
  { name: 'Feb', value: 1800 },
  { name: 'Mar', value: 4000 },
  { name: 'Apr', value: 2700 },
  { name: 'May', value: 1500 },
];

const ProductAnalytics = () => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <BarChart size={20} className="mr-2" />
          <h2 className="text-lg font-bold">Product Analytics</h2>
        </div>
        
        <div className="flex items-center space-x-3">
          <button className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100">All</button>
          <button className="platform-pill active">Shopee</button>
          <button className="px-3 py-1 rounded-full text-sm font-medium bg-white">Tokopedia</button>
          <button className="px-3 py-1 rounded-full text-sm font-medium bg-white">Amazon</button>
          
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
          <button className="flex items-center bg-white px-3 py-1 rounded-full">
            <Filter size={16} className="mr-1" />
            <span className="text-sm font-medium">Filter</span>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center">
              <span className="text-gray-700 mr-2">$</span>
              <span className="font-medium">Sales</span>
            </div>
            <div className="text-orange-500 font-bold">$ 8762</div>
            <MoreHorizontal size={18} className="text-gray-400" />
          </div>
          
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsBarChart data={salesData}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <Bar 
                  dataKey="value" 
                  fill="#000" 
                  radius={[4, 4, 0, 0]}
                  barSize={30}
                  shape={(props) => {
                    const { x, y, width, height, index } = props;
                    return (
                      <rect
                        x={x}
                        y={y}
                        width={width}
                        height={height}
                        fill={index === 2 ? "#ff6347" : "#000"}
                        radius={[4, 4, 0, 0]}
                      />
                    );
                  }}
                />
              </RechartsBarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center">
              <span className="font-medium">Growth</span>
            </div>
            <MoreHorizontal size={18} className="text-gray-400" />
          </div>
          
          <div className="flex items-center justify-center h-56">
            <div className="relative w-40 h-40">
              <div className="absolute inset-0 rounded-full border-[16px] border-gray-100"></div>
              <div 
                className="absolute inset-0 rounded-full border-[16px] border-purple-500" 
                style={{ 
                  clipPath: 'polygon(0 0, 100% 0, 100% 32%, 0 32%)',
                  transform: 'rotate(90deg)'
                }}
              ></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-center">
                  <span className="text-xl font-bold">+32%</span>
                  <p className="text-xs text-gray-500">Growth rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center">
              <span className="font-medium">Total Customer</span>
            </div>
            <MoreHorizontal size={18} className="text-gray-400" />
          </div>
          
          <div className="flex flex-col items-center justify-center h-56">
            <h2 className="text-4xl font-bold mb-6">2135</h2>
            <div className="w-full h-4 bg-orange-400 rounded-full"></div>
            <div className="w-full text-right mt-6">
              <button className="text-sm text-gray-700 font-medium">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAnalytics;
