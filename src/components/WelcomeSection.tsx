
import { TargetIcon } from "lucide-react";

const WelcomeSection = () => {
  return (
    <div className="flex justify-between items-start mb-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Hi Richard Sugiono</h1>
        <p className="text-gray-600">
          Hi Richard, How Is Your Day? Below We Show Your Sales Report For This Month
        </p>
      </div>
      
      <div className="flex flex-col items-end">
        <div className="flex items-center mb-3">
          <TargetIcon className="mr-2 text-gray-700" size={18} />
          <span className="text-gray-700 font-medium">Sales target</span>
          <span className="ml-6 bg-purple-500 text-white px-4 py-1 rounded-full text-sm">
            All
          </span>
        </div>
        
        <div className="flex items-baseline">
          <span className="text-orange-500 text-4xl font-bold">%</span>
          <span className="text-5xl font-bold ml-2">32</span>
        </div>
        
        <p className="text-gray-600 text-sm mt-2">Better than last month</p>
      </div>
    </div>
  );
};

export default WelcomeSection;
