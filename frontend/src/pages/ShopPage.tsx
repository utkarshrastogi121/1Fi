import React, { useState } from 'react';
import type { Product } from '../types';
import { MarketplaceFeed } from '../components/marketplace/MarketplaceFeed';
import { ProductDetailPage } from '../components/marketplace/ProductDetailSheet';

export type ShopTab = 'top-brands' | 'nearby-stores' | 'marketplace';

export const ShopPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ShopTab>('marketplace');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  if (selectedProduct) {
    return (
      <ProductDetailPage
        product={selectedProduct}
        onBack={() => setSelectedProduct(null)}
      />
    );
  }

  return (
    <div className="w-full flex-1 flex flex-col bg-[#F8F9FD] min-h-screen">
      {/* Purple Hero Banner Section */}
      <div className="relative overflow-hidden bg-linear-to-br from-[#1E1145] via-[#2D1B69] to-[#3B1F8C] px-5 pt-7 pb-14 text-white rounded-b-[28px] shadow-sm">
        <div className="absolute -top-10 -right-10 w-44 h-44 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-32 h-32 bg-indigo-500/20 rounded-full blur-xl pointer-events-none" />

        <div className="relative z-10 flex justify-between items-center gap-2">
          <div className="flex-1 max-w-52.5">
            <div className="inline-flex items-center gap-1 bg-white/15 backdrop-blur-md border border-white/20 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide text-purple-200 mb-2.5">
              <span>✦</span> NO-COST EMIs
            </div>

            <h1 className="text-[21px] leading-[1.2] font-extrabold tracking-tight text-white mb-2">
              Shop today, <br />
              <span className="text-purple-100">Pay later using</span> <br />
              Mutual funds.
            </h1>

            <p className="text-[11px] leading-relaxed text-purple-200/80 font-normal">
              No credit score required. No interest. Backed by your investments.
            </p>
          </div>

          <div className="relative w-36 h-32 flex items-center justify-center shrink-0">
            <img
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80"
              alt="Shop Gadgets"
              className="w-28 h-24 object-cover rounded-xl shadow-lg -rotate-6 border border-white/20"
            />
          </div>
        </div>
      </div>

      {/* Tab Selector */}
      <div className="px-4 -mt-6 z-20">
        <div className="bg-white rounded-2xl p-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-between gap-1">
          <button
            type="button"
            onClick={() => setActiveTab('top-brands')}
            className={`flex-1 py-2 text-[11px] font-semibold rounded-xl transition-all cursor-pointer text-center relative ${
              activeTab === 'top-brands' ? 'bg-purple-50/80 text-[#6B21A8]' : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            Top Brands
            {activeTab === 'top-brands' && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#6B21A8] rounded-full" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('nearby-stores')}
            className={`flex-1 py-2 text-[11px] font-semibold rounded-xl transition-all cursor-pointer text-center relative ${
              activeTab === 'nearby-stores' ? 'bg-purple-50/80 text-[#6B21A8]' : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            Nearby Stores
            {activeTab === 'nearby-stores' && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#6B21A8] rounded-full" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('marketplace')}
            className={`flex-1 py-2 text-[11px] font-semibold rounded-xl transition-all cursor-pointer text-center relative ${
              activeTab === 'marketplace' ? 'bg-purple-50/80 text-[#6B21A8]' : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            1Fi Marketplace
            {activeTab === 'marketplace' && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#6B21A8] rounded-full" />
            )}
          </button>
        </div>
      </div>

      {/* Tab Body */}
      <div className="flex-1 px-4 pt-5 pb-24">
        {activeTab === 'top-brands' && (
          <div className="py-20 text-center text-xs font-medium text-gray-400">
            Not Implemented
          </div>
        )}

        {activeTab === 'nearby-stores' && (
          <div className="py-20 text-center text-xs font-medium text-gray-400">
            Not Implemented
          </div>
        )}

        {activeTab === 'marketplace' && (
          <MarketplaceFeed onSelectProduct={(p) => setSelectedProduct(p)} />
        )}
      </div>
    </div>
  );
};