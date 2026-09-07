export interface ProductVariant {
  id: string;
  sku: string;
  attributes: Record<string, string>; // e.g., { color: "Blue", storage: "128GB" }
  price: number;
  originalPrice: number;
  stock: number;
  images: string[];
}

export interface EMIPlan {
  id: string;
  tenureMonths: number;
  interestRateAnnual: number; // percentage
  processingFee: number;
  monthlyEmi: number;
  totalAmountPayable: number;
  isNoCostEmi: boolean;
}

export interface Product {
  id: string;
  title: string;
  brand: string;
  description: string;
  thumbnail: string;
  basePrice: number;
  variants: ProductVariant[];
  emiOptions: EMIPlan[];
  highlights: string[];
}

export interface SelectPlanPayload {
  productId: string;
  variantId: string;
  emiPlanId: string;
}