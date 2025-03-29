
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
    <div className="flex min-h-screen">
      <Sidebar />
      
      <div className="flex-1 pl-[90px] pr-6">
        <div className="max-w-7xl mx-auto py-6">
          <Header />
          
          <div className="flex gap-8">
            <div className="flex-1">
              <WelcomeSection />
              <BalanceCards />
              <ProductAnalytics />
              <OnlineStatus />
            </div>
            
            <div className="w-96">
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
