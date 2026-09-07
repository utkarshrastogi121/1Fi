import { mockProducts } from '../data/mockProducts.js';
import { EMIPlan, Product } from '../types/index.js';

export class MarketplaceService {
  public static getAllProducts(): Product[] {
    return mockProducts;
  }

  public static getProductById(id: string): Product | undefined {
    return mockProducts.find((p) => p.id === id);
  }

  // Dynamic calculation of EMI: E = P * r * (1 + r)^n / ((1 + r)^n - 1)
  public static calculateEmiForPrice(price: number): EMIPlan[] {
    const tenures = [
      { months: 3, annualRate: 0, fee: 199, noCost: true },
      { months: 6, annualRate: 0, fee: 299, noCost: true },
      { months: 9, annualRate: 12.5, fee: 399, noCost: false },
      { months: 12, annualRate: 14.5, fee: 499, noCost: false }
    ];

    return tenures.map((item) => {
      let monthlyEmi = 0;
      if (item.annualRate === 0) {
        monthlyEmi = Math.round(price / item.months);
      } else {
        const monthlyRate = item.annualRate / (12 * 100);
        const factor = Math.pow(1 + monthlyRate, item.months);
        monthlyEmi = Math.round((price * monthlyRate * factor) / (factor - 1));
      }

      const totalAmountPayable = monthlyEmi * item.months + item.fee;

      return {
        id: `emi-calc-${item.months}m`,
        tenureMonths: item.months,
        interestRateAnnual: item.annualRate,
        processingFee: item.fee,
        monthlyEmi,
        totalAmountPayable,
        isNoCostEmi: item.noCost
      };
    });
  }

  public static processPlanSelection(productId: string, variantId: string, emiPlanId: string) {
    const product = this.getProductById(productId);
    if (!product) throw new Error('Product not found');

    const variant = product.variants.find((v) => v.id === variantId);
    if (!variant) throw new Error('Product variant not found');

    if (variant.stock <= 0) {
      throw new Error('Selected variant is out of stock');
    }

    return {
      success: true,
      transactionId: `TXN-${Date.now()}`,
      summary: {
        product: product.title,
        variantSku: variant.sku,
        price: variant.price,
        selectedEmiPlanId: emiPlanId,
        status: 'READY_FOR_KYC_OR_CHECKOUT'
      }
    };
  }
}