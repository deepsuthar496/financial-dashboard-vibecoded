import { useState } from "react";
import { BarChart, ChevronDown, MoreHorizontal, Maximize2, Filter } from "lucide-react";
import { 
  BarChart as RechartsBarChart, 
  Bar, 
  XAxis, 
  ResponsiveContainer,
  Tooltip,
  Cell
} from "recharts";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

type Platform = "All" | "US" | "Asia" | "Europe";
type Period = "Day" | "Week" | "Month" | "Year";

// Sample data for different markets
const allData = [
  { name: 'Jan', value: 2500 },
  { name: 'Feb', value: 1800 },
  { name: 'Mar', value: 4000 },
  { name: 'Apr', value: 2700 },
  { name: 'May', value: 1500 },
];

const usData = [
  { name: 'Jan', value: 1200 },
  { name: 'Feb', value: 900 },
  { name: 'Mar', value: 1800 },
  { name: 'Apr', value: 1500 },
  { name: 'May', value: 1000 },
];

const asiaData = [
  { name: 'Jan', value: 800 },
  { name: 'Feb', value: 600 },
  { name: 'Mar', value: 1400 },
  { name: 'Apr', value: 900 },
  { name: 'May', value: 300 },
];

const europeData = [
  { name: 'Jan', value: 500 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 800 },
  { name: 'Apr', value: 300 },
  { name: 'May', value: 200 },
];

const dataMap = {
  "All": allData,
  "US": usData,
  "Asia": asiaData,
  "Europe": europeData
};

const PortfolioAnalytics = () => {
  const [activePlatform, setActivePlatform] = useState<Platform>("All");
  const [period, setPeriod] = useState<Period>("Month");
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  
  // Get data based on selected market
  const currentData = dataMap[activePlatform];
  
  // Calculate totals
  const totalValue = currentData.reduce((acc, item) => acc + item.value, 0);
  const growthRate = activePlatform === "All" ? 32 : 
                    activePlatform === "US" ? 45 : 
                    activePlatform === "Asia" ? 28 : 22;
  
  const stockCount = activePlatform === "All" ? 135 : 
                    activePlatform === "US" ? 82 : 
                    activePlatform === "Asia" ? 36 : 17;

  // Market button colors
  const getPlatformButtonClass = (platform: Platform) => {
    if (platform === activePlatform) {
      return platform === "All" ? "bg-gray-100" :
             platform === "US" ? "bg-purple-500 text-white" :
             platform === "Asia" ? "bg-green-500 text-white" :
             "bg-orange-500 text-white";
    }
    return "bg-white hover:bg-gray-50";
  };

  return (
    <div className="mb-8 transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <BarChart size={20} className="mr-2" />
          <h2 className="text-lg font-bold">Portfolio Analytics</h2>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex space-x-2">
            {(["All", "US", "Asia", "Europe"] as Platform[]).map((platform) => (
              <button 
                key={platform}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${getPlatformButtonClass(platform)}`}
                onClick={() => setActivePlatform(platform)}
              >
                {platform}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-2 ml-4">
            <Select value={period} onValueChange={(value) => setPeriod(value as Period)}>
              <SelectTrigger className="h-8 bg-white px-3 py-1 rounded-full w-32">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Day">Day</SelectItem>
                <SelectItem value="Week">Week</SelectItem>
                <SelectItem value="Month">Month</SelectItem>
                <SelectItem value="Year">Year</SelectItem>
              </SelectContent>
            </Select>
            
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 rounded-full flex items-center gap-1 bg-white hover:bg-gray-50">
                  <Filter size={16} />
                  <span className="text-sm font-medium">Filter</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <h4 className="font-medium">Filter Options</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Show percentages</span>
                      <input type="checkbox" className="rounded" />
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Include tax</span>
                      <input type="checkbox" className="rounded" checked />
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Include shipping</span>
                      <input type="checkbox" className="rounded" checked />
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            
            <button className="p-1 hover:bg-gray-100 rounded">
              <Maximize2 size={18} />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <MoreHorizontal size={20} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md relative overflow-hidden">
          {/* Grid background with combined fade effects */}
          <div className="absolute inset-0">
            <div className="w-full h-full opacity-[0.02]" 
                 style={{
                   backgroundImage: `
                     linear-gradient(to right, black 1px, transparent 1px),
                     linear-gradient(to bottom, black 1px, transparent 1px)
                   `,
                   backgroundSize: '20px 20px'
                 }}>
            </div>
            {/* Combined edge fade and corner fade */}
            <div className="absolute inset-0 pointer-events-none" 
                 style={{
                   background: `
                     linear-gradient(to right, white, transparent 20%, transparent 80%, white),
                     linear-gradient(to bottom, white, transparent 20%, transparent 80%, white),
                     radial-gradient(circle at center, transparent 60%, white 85%)
                   `
                 }}>
            </div>
          </div>
          
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <span className="text-gray-700 font-medium">$</span>
                <span className="font-medium ml-1">Portfolio Value</span>
              </div>
              <div className="text-orange-500 font-bold">$ {totalValue}</div>
              <MoreHorizontal size={18} className="text-gray-400 cursor-pointer" />
            </div>
            
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart 
                  data={currentData} 
                  margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                  onMouseMove={(data) => {
                    if (data.activeTooltipIndex !== undefined) {
                      setHoveredBar(data.activeTooltipIndex);
                    }
                  }}
                  onMouseLeave={() => setHoveredBar(null)}
                >
                  <XAxis 
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12 }}
                  />
                  <Tooltip 
                    cursor={false}
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-black text-white p-2 rounded-md text-xs">
                            <p className="font-medium">{payload[0].payload.name}</p>
                            <p className="font-bold">${payload[0].value}</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar 
                    dataKey="value" 
                    fill="#000" 
                    radius={4}
                    barSize={30}
                    animationDuration={500}
                  >
                    {currentData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`}
                        fill={hoveredBar === index ? "#ff6347" : (index === 2 ? "#ff6347" : "#000")}
                        className="transition-colors duration-200"
                      />
                    ))}
                  </Bar>
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-5 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <span className="font-medium">ROI</span>
            </div>
            <MoreHorizontal size={18} className="text-gray-400 cursor-pointer" />
          </div>
          
          <div className="flex items-center justify-center">
            <div className="relative w-40 h-40">
              {/* Created a completely new solution using SVG only for both circle and arc */}
              <svg className="w-full h-full" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  fill="none"
                  stroke="#f3f4f6" /* gray-100 color */
                  strokeWidth="12"
                />
                
                {/* Progress arc */}
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  fill="none"
                  stroke="rgb(168, 85, 247)" /* Purple-500 color */
                  strokeWidth="10" /* Increased from 8 to 10 */
                  strokeLinecap="round"
                  strokeDasharray={`${(growthRate / 100) * 276.46} 276.46`} /* 276.46 is approx 2πr where r=44 */
                  className="transition-all duration-700 ease-in-out -rotate-90 origin-center"
                  style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
                />
              </svg>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-center">
                  <span className="text-2xl font-bold">+{growthRate}%</span>
                  <p className="text-xs text-gray-500 mt-1">Growth rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-5 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <span className="font-medium">Total Securities</span>
            </div>
            <MoreHorizontal size={18} className="text-gray-400 cursor-pointer" />
          </div>
          
          <div className="flex flex-col items-center justify-center py-4">
            <h2 className="text-4xl font-bold mb-6 transition-all duration-500">{stockCount}</h2>
            <div className="w-full h-3 bg-orange-400 rounded-full mb-6 relative overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-orange-600 transition-all duration-700"
                style={{ width: `${(stockCount / 150) * 100}%` }}
              ></div>
            </div>
            <div className="w-full text-right">
              <button className="text-sm text-gray-700 font-medium hover:text-gray-900 transition-colors">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioAnalytics;
