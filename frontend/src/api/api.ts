import type { Product, EMIPlan } from '../types/index';

const API_BASE =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/v1/marketplace';

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${API_BASE}/products`);
  if (!res.ok) throw new Error('Failed to fetch products');
  const json = await res.json();
  return json.data;
};

export const fetchDynamicEmi = async (price: number): Promise<EMIPlan[]> => {
  const res = await fetch(`${API_BASE}/emi-plans?price=${price}`);
  if (!res.ok) throw new Error('Failed to fetch EMI plans');
  const json = await res.json();
  return json.data;
};

export const selectPlan = async (payload: {
  productId: string;
  variantId: string;
  emiPlanId: string;
}) => {
  const res = await fetch(`${API_BASE}/select-plan`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Failed to select plan');
  }
  return res.json();
};