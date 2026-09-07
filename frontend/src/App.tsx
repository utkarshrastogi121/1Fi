import { useState } from 'react';
import { BottomNavbar, type TabType } from './components/navigation/BottomNavbar';
import { ShopPage } from './pages/ShopPage';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('shop');

  return (
    <div className="min-h-screen bg-[#F0F2F5] flex justify-center text-gray-900">
      {/* Mobile Device Frame */}
      <div className="w-full max-w-110 min-h-screen bg-white relative flex flex-col shadow-2xl overflow-x-hidden">
        
        {/* Main Screen Body */}
        <main className="flex-1 flex flex-col">
          {currentTab === 'home' && (
            <div className="flex-1 flex items-center justify-center text-xs text-gray-400">
              Home Page (Not implemented)
            </div>
          )}

          {currentTab === 'shop' && <ShopPage />}

          {currentTab === 'emi-dues' && (
            <div className="flex-1 flex items-center justify-center text-xs text-gray-400">
              EMI Dues (Not implemented)
            </div>
          )}

          {currentTab === 'limit' && (
            <div className="flex-1 flex items-center justify-center text-xs text-gray-400">
              Credit Limit (Not implemented)
            </div>
          )}

          {currentTab === 'profile' && (
            <div className="flex-1 flex items-center justify-center text-xs text-gray-400">
              User Profile (Not implemented)
            </div>
          )}
        </main>

        {/* Floating Bottom Navigation */}
        <BottomNavbar activeTab={currentTab} onTabChange={setCurrentTab} />
      </div>
    </div>
  );
}