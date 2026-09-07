import { rateLimit } from 'express-rate-limit';
import { logger } from '../utils/logger.js';

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  limit: 100,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  handler: (req, res) => {
    logger.warn(`Rate limit exceeded for IP: ${req.ip}`);
    res.status(429).json({
      success: false,
      message: 'Too many requests from this IP, please try again after 15 minutes.'
    });
  }
});