import React from 'react';
import { HomeIcon, ShopIcon, EmiDuesIcon, LimitIcon, ProfileIcon } from './NavIcons';

export type TabType = 'home' | 'shop' | 'emi-dues' | 'limit' | 'profile';

interface BottomNavbarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const BottomNavbar: React.FC<BottomNavbarProps> = ({ activeTab, onTabChange }) => {
  const tabs: { key: TabType; label: string; Icon: React.FC<{ active: boolean }> }[] = [
    { key: 'home', label: 'Home', Icon: HomeIcon },
    { key: 'shop', label: 'Shop', Icon: ShopIcon },
    { key: 'emi-dues', label: 'EMI Dues', Icon: EmiDuesIcon },
    { key: 'limit', label: 'Limit', Icon: LimitIcon },
    { key: 'profile', label: 'Profile', Icon: ProfileIcon },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] max-w-105 z-50">
      <nav className="bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] border border-gray-100 px-2 py-2">
        <div className="flex items-center justify-between">
          {tabs.map(({ key, label, Icon }) => {
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => onTabChange(key)}
                className="relative flex-1 flex flex-col items-center justify-center py-1 cursor-pointer transition-all duration-150"
              >
                {isActive && (
                  <span className="absolute -top-2 w-6 h-0.75 bg-[#6B21A8] rounded-full" />
                )}
                <div className="h-6 flex items-center justify-center">
                  <Icon active={isActive} />
                </div>
                <span
                  className={`text-[10px] mt-0.5 tracking-tight font-medium ${
                    isActive ? 'text-[#6B21A8] font-semibold' : 'text-gray-400'
                  }`}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};