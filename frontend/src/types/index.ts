export interface ProductVariant {
  id: string;
  sku: string;
  attributes: Record<string, string>;
  price: number;
  originalPrice: number;
  stock: number;
  images: string[];
}

export interface EMIPlan {
  id: string;
  tenureMonths: number;
  interestRateAnnual: number;
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