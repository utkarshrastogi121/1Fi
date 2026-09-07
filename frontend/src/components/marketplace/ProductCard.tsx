import React from 'react';
import { Sparkles, CalendarClock } from 'lucide-react';
import type { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const lowestEmi = product.emiOptions.reduce(
    (min, p) => (p.monthlyEmi < min ? p.monthlyEmi : min),
    product.emiOptions[0]?.monthlyEmi || 0
  );

  return (
    <div
      onClick={() => onSelect(product)}
      className="bg-white rounded-2xl p-4 border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
    >
      <div>
        {/* Brand Badge & Image */}
        <div className="relative w-full h-44 bg-gray-50 rounded-xl flex items-center justify-center p-3 mb-3">
          <span className="absolute top-2 left-2 inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-[#6B21A8] bg-purple-50 px-2 py-0.5 rounded-full border border-purple-100">
            <Sparkles className="w-2.5 h-2.5 text-[#6B21A8]" />
            {product.brand}
          </span>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Title & Specs */}
        <h3 className="text-sm font-bold text-gray-900 line-clamp-1">{product.title}</h3>
        <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">{product.description}</p>
      </div>

      {/* Pricing & EMI Pill */}
      <div className="mt-3 pt-3 border-t border-gray-50 flex items-center justify-between">
        <div>
          <span className="text-[10px] text-gray-400 block font-medium">Price</span>
          <span className="text-sm font-extrabold text-gray-900">
            ₹{product.basePrice.toLocaleString('en-IN')}
          </span>
        </div>
        <div className="text-right">
          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
            <CalendarClock className="w-3 h-3 text-emerald-600" />
            EMI ₹{lowestEmi.toLocaleString('en-IN')}/mo
          </span>
        </div>
      </div>
    </div>
  );
};