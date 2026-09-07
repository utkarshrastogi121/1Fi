import React, { useState, useEffect } from 'react';
import { ArrowLeft, Check, Flame, CreditCard } from 'lucide-react';
import type { Product, ProductVariant, EMIPlan } from '../../types';
import { fetchDynamicEmi, selectPlan } from '../../api/api';

interface ProductDetailPageProps {
  product: Product;
  onBack: () => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, onBack }) => {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(product.variants[0]!);
  const [emiPlans, setEmiPlans] = useState<EMIPlan[]>(product.emiOptions);
  const [selectedPlanId, setSelectedPlanId] = useState<string>(product.emiOptions[0]?.id || '');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [loadingEmi, setLoadingEmi] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successTxn, setSuccessTxn] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function updateEmi() {
      try {
        setLoadingEmi(true);
        const plans = await fetchDynamicEmi(selectedVariant.price);
        if (isMounted) {
          setEmiPlans(plans);
          if (plans[0]) setSelectedPlanId(plans[0].id);
        }
      } catch (err) {
        console.error('Error updating EMI plans:', err);
      } finally {
        if (isMounted) setLoadingEmi(false);
      }
    }
    updateEmi();
    return () => {
      isMounted = false;
    };
  }, [selectedVariant]);

  const selectedPlan = emiPlans.find((p) => p.id === selectedPlanId) || emiPlans[0];
  const downPayment = Math.round(selectedVariant.price * 0.15);
  const images = selectedVariant.images.length > 0 ? selectedVariant.images : [product.thumbnail];

  const handleProceed = async () => {
    if (!selectedPlan) return;
    try {
      setIsSubmitting(true);
      const res = await selectPlan({
        productId: product.id,
        variantId: selectedVariant.id,
        emiPlanId: selectedPlan.id,
      });
      setSuccessTxn(res.transactionId);
    } catch (err: any) {
      alert(err.message || 'Failed to complete transaction.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F8F9FD] flex flex-col relative pb-16">
      {/* 1. Top Header */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 px-4 py-3 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 hover:text-gray-900 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-gray-700" />
          <span>Shop</span>
        </button>
        <span className="text-[11px] font-bold tracking-wider text-[#6B21A8] bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-100">
          {product.brand}
        </span>
      </header>

      {/* 2. Main Scrollable Content */}
      <main className="flex-1 px-4 py-4 space-y-4">
        {successTxn ? (
          <div className="py-20 text-center flex flex-col items-center bg-white rounded-2xl p-6 border border-gray-100 shadow-xs">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
              <Check className="w-8 h-8 stroke-[2.5]" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">EMI Application Initiated!</h2>
            <p className="text-xs text-gray-500 mt-2">
              Reference ID: <span className="font-mono text-gray-800">{successTxn}</span>
            </p>
            <button
              onClick={onBack}
              className="mt-8 w-full py-3.5 bg-[#6B21A8] hover:bg-[#581C87] text-white rounded-xl text-xs font-semibold cursor-pointer transition shadow-md"
            >
              Back to Marketplace
            </button>
          </div>
        ) : (
          <>
            {/* Gallery Section */}
            <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs flex flex-col gap-3">
              <div className="w-full h-56 bg-gray-50 rounded-xl flex items-center justify-center p-3">
                <img
                  src={images[activeImageIndex] || product.thumbnail}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="flex gap-2 justify-center">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`w-12 h-12 rounded-lg p-1 border cursor-pointer transition ${
                      activeImageIndex === i ? 'border-[#6B21A8] ring-2 ring-purple-100' : 'border-gray-200'
                    }`}
                  >
                    <img src={img} alt="thumb" className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            </div>

            {/* Title & Price */}
            <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs space-y-3">
              <div>
                <h1 className="text-lg font-extrabold text-gray-900">{product.title}</h1>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-gray-500">
                    ({Object.entries(selectedVariant.attributes).map(([k, v]) => `${k}: ${v}`).join(', ')})
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                    <Flame className="w-3 h-3 text-amber-500" />
                    70+ sold
                  </span>
                </div>
              </div>

              <div className="flex items-baseline gap-2 pt-1">
                <span className="text-2xl font-black text-gray-900">
                  ₹{selectedVariant.price.toLocaleString('en-IN')}
                </span>
                {selectedVariant.originalPrice > selectedVariant.price && (
                  <span className="text-xs line-through text-gray-400 font-medium">
                    ₹{selectedVariant.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
              </div>

              {/* Benefit Badge */}
              <div className="bg-[#FAF5FF] border border-purple-100 rounded-xl p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-[#6B21A8]" />
                  <span className="text-xs font-semibold text-[#6B21A8]">
                    Pay only ₹{downPayment.toLocaleString('en-IN')} now
                  </span>
                </div>
                <span className="text-[10px] font-bold text-purple-700 bg-purple-200/50 px-2 py-0.5 rounded">
                  Backed by 1Fi Funds
                </span>
              </div>
            </div>

            {/* Variants */}
            <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs space-y-3">
              <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block">
                SELECT VARIANT
              </label>
              <div className="space-y-2">
                {product.variants.map((v) => {
                  const isSelected = v.id === selectedVariant.id;
                  return (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVariant(v)}
                      className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-xs cursor-pointer transition ${
                        isSelected
                          ? 'border-[#6B21A8] bg-purple-50/40 text-[#6B21A8] font-bold shadow-xs'
                          : 'border-gray-200 text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <span>{Object.values(v.attributes).join(' • ')}</span>
                      <span>₹{v.price.toLocaleString('en-IN')}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* EMI Options */}
            <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700">
                  CHOOSE EMI TENURE
                </label>
                <span className="text-[10px] text-gray-400 font-medium">EMIs starting next month</span>
              </div>

              {loadingEmi ? (
                <div className="py-4 text-center text-xs text-gray-400">Recalculating EMI options...</div>
              ) : (
                <div className="space-y-2.5">
                  {emiPlans.map((plan) => {
                    const isSelected = plan.id === selectedPlanId;
                    return (
                      <div
                        key={plan.id}
                        onClick={() => setSelectedPlanId(plan.id)}
                        className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition ${
                          isSelected
                            ? 'border-[#6B21A8] bg-purple-50/50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              isSelected ? 'border-[#6B21A8]' : 'border-gray-300'
                            }`}
                          >
                            {isSelected && <div className="w-2 h-2 rounded-full bg-[#6B21A8]" />}
                          </div>
                          <div>
                            <span className="text-xs font-bold text-gray-900">
                              ₹{plan.monthlyEmi.toLocaleString('en-IN')} × {plan.tenureMonths} months
                            </span>
                            <span className="block text-[10px] text-gray-400 mt-0.5">
                              Processing fee: ₹{plan.processingFee} • Rate: {plan.interestRateAnnual}%
                            </span>
                          </div>
                        </div>

                        {plan.isNoCostEmi && (
                          <span className="text-[10px] font-extrabold text-[#D97706] bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded">
                            0% EMI
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="pt-2 pb-4">
              <button
                type="button"
                onClick={handleProceed}
                disabled={isSubmitting || selectedVariant.stock <= 0}
                className="w-full py-4 bg-[#FF6B00] hover:bg-[#E05300] active:scale-[0.99] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition disabled:opacity-50 cursor-pointer flex items-center justify-center"
              >
                {isSubmitting
                  ? 'Initiating Application...'
                  : selectedPlan
                  ? `Buy on ${selectedPlan.tenureMonths} months EMI`
                  : 'Select an EMI Plan'}
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
};