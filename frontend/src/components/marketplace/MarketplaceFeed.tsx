import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import type { Product } from '../../types';
import { fetchProducts } from '../../api/api';
import { ProductCard } from './ProductCard';

interface MarketplaceFeedProps {
  onSelectProduct: (product: Product) => void;
}

export const MarketplaceFeed: React.FC<MarketplaceFeedProps> = ({ onSelectProduct }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
      } catch (err: any) {
        setError(err.message || 'Could not connect to backend server');
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const filteredProducts = products.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
          <Search className="w-3.5 h-3.5" />
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search products or brands on EMI..."
          className="w-full bg-white border border-gray-200 text-xs text-gray-800 placeholder-gray-400 pl-8 pr-3 py-2.5 rounded-xl shadow-xs outline-none focus:border-[#6B21A8]"
        />
      </div>

      {loading && (
        <div className="grid grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="h-56 bg-white rounded-2xl p-3 border border-gray-100 animate-pulse" />
          ))}
        </div>
      )}

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
          {error}. Ensure the Node.js backend is running on port 3000.
        </div>
      )}

      {!loading && !error && (
        <>
          <div className="flex justify-between items-center px-1">
            <h2 className="text-xs font-bold text-gray-700 uppercase tracking-wider">
              Featured Gadgets ({filteredProducts.length})
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};