
import { TargetIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const WelcomeSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-4 md:p-6 rounded-xl shadow-sm">
      <div className="max-w-full md:max-w-xl">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2">Hi Richard Sugiono</h1>
        <p className="text-sm md:text-base text-gray-600">
          Hi Richard, How Is Your Day? Below We Show Your Sales Report For This Month
        </p>
      </div>
      
      <div className="flex flex-col items-start md:items-end w-full md:w-auto mt-2 md:mt-0">
        <div className="flex items-center mb-1 md:mb-2">
          <TargetIcon className="mr-2 text-gray-700" size={isMobile ? 16 : 18} />
          <span className="text-gray-700 font-medium text-sm md:text-base">Sales target</span>
          <span className="ml-4 md:ml-6 bg-purple-500 text-white px-3 py-0.5 md:px-4 md:py-1 rounded-full text-xs md:text-sm">
            All
          </span>
        </div>
        
        <div className="flex items-center">
          <span className="text-orange-500 text-3xl md:text-4xl lg:text-5xl font-bold">%</span>
          <span className="text-3xl md:text-4xl lg:text-5xl font-bold ml-1">32</span>
        </div>
        
        <p className="text-xs md:text-sm text-gray-600 mt-0.5 md:mt-1">Better than last month</p>
      </div>
    </div>
  );
};

export default WelcomeSection;
