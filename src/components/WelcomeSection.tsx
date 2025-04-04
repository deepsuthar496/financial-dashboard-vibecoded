import { TargetIcon } from "lucide-react";
import Lottie from "lottie-react";
import animationData from "../../animation.json";

const WelcomeSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 bg-white p-6 rounded-xl shadow-sm">
      <div className="max-w-xl">
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Hi Deep suthar</h1>
          <div className="ml-2 w-12 h-12 -mt-1">
            <Lottie animationData={animationData} loop={true} />
          </div>
        </div>
        <p className="text-gray-600 text-left">
          Welcome to your portfolio dashboard. Below we show your investment performance for this month.
        </p>
      </div>
      
      <div className="flex flex-col items-start md:items-end mt-4 md:mt-0">
        <div className="flex items-center mb-2">
          <TargetIcon className="mr-2 text-gray-700" size={18} />
          <span className="text-gray-700 font-medium">Portfolio target</span>
          <span className="ml-6 bg-purple-500 text-white px-4 py-1 rounded-full text-sm">
            All
          </span>
        </div>
        
        <div className="flex items-center">
          <span className="text-orange-500 text-4xl md:text-5xl font-bold">%</span>
          <span className="text-4xl md:text-5xl font-bold ml-1">32</span>
        </div>
        
        <p className="text-gray-600 text-sm mt-1">Better than previous quarter</p>
      </div>
    </div>
  );
};

export default WelcomeSection;
