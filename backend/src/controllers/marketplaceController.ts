import { Request, Response } from 'express';
import { MarketplaceService } from '../services/marketplaceService.js';

export const getProducts = (_req: Request, res: Response): void => {
  const products = MarketplaceService.getAllProducts();
  res.status(200).json({ success: true, data: products });
};

export const getProductById = (req: Request<{ id: string }>, res: Response): void => {
  const { id } = req.params;

  if (typeof id !== 'string') {
    res.status(400).json({ success: false, message: 'Invalid product ID' });
    return;
  }

  const product = MarketplaceService.getProductById(id);

  if (!product) {
    res.status(404).json({ success: false, message: 'Product not found' });
    return;
  }

  res.status(200).json({ success: true, data: product });
};

export const getDynamicEmiOptions = (req: Request, res: Response): void => {
  const price = Number(req.query.price);

  if (!price || isNaN(price) || price <= 0) {
    res.status(400).json({ success: false, message: 'Invalid or missing price parameter' });
    return;
  }

  const emiPlans = MarketplaceService.calculateEmiForPrice(price);
  res.status(200).json({ success: true, data: emiPlans });
};

export const selectEmiPlan = (req: Request, res: Response): void => {
  const { productId, variantId, emiPlanId } = req.body;

  if (!productId || !variantId || !emiPlanId) {
    res.status(400).json({
      success: false,
      message: 'productId, variantId, and emiPlanId are required'
    });
    return;
  }

  try {
    const result = MarketplaceService.processPlanSelection(productId, variantId, emiPlanId);
    res.status(200).json(result);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    res.status(400).json({ success: false, message });
  }
};