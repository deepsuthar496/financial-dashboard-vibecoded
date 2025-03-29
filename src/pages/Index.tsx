
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
      
      <div className="flex-1 pl-24">
        <div className="max-w-[1400px] mx-auto py-6 px-6">
          <Header />
          
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <WelcomeSection />
              <BalanceCards />
              <ProductAnalytics />
              <OnlineStatus />
            </div>
            
            <div className="w-full lg:w-80 xl:w-96 space-y-6 mt-6 lg:mt-0">
              <Feedback />
              <RecentSales />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
