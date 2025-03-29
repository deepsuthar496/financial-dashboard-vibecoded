
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import WelcomeSection from "@/components/WelcomeSection";
import BalanceCards from "@/components/BalanceCards";
import ProductAnalytics from "@/components/ProductAnalytics";
import OnlineStatus from "@/components/OnlineStatus";
import Feedback from "@/components/Feedback";
import RecentSales from "@/components/RecentSales";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      
      <div className="flex-1 pl-4">
        <div className="max-w-[1400px] mx-auto py-6 px-6">
          <Header />
          
          <div className="flex flex-col gap-6">
            <div className="w-full">
              <WelcomeSection />
            </div>
            
            <div className="w-full">
              <BalanceCards />
            </div>
            
            <div className="w-full">
              <ProductAnalytics />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <OnlineStatus />
              </div>
              
              <div className="space-y-6">
                <Feedback />
                <RecentSales />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
