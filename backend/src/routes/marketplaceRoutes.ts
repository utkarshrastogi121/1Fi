import { Router } from 'express';
import {
  getProducts,
  getProductById,
  getDynamicEmiOptions,
  selectEmiPlan
} from '../controllers/marketplaceController.js';

const router = Router();

router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.get('/emi-plans', getDynamicEmiOptions);
router.post('/select-plan', selectEmiPlan);

export default router;