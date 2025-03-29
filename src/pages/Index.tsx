import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import WelcomeSection from "@/components/WelcomeSection";
import BalanceCards from "@/components/BalanceCards";
import ProductAnalytics from "@/components/ProductAnalytics";
import MarketPerformance from "@/components/OnlineStatus";
import StockPerformance from "@/components/Feedback";
import RecentTransactions from "@/components/RecentSales";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      
      <div className="flex-1 ml-12">
        <div className="max-w-[1400px] mx-0 py-4 px-0">
          <Header />
          
          <div className="flex flex-col gap-3">
            <div className="w-full">
              <WelcomeSection />
            </div>
            
            <div className="w-full">
              <BalanceCards />
            </div>
            
            <div className="w-full">
              <ProductAnalytics />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="md:col-span-2">
                <MarketPerformance />
              </div>
              
              <div className="space-y-3">
                <StockPerformance />
                <RecentTransactions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
