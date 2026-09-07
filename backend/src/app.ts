import express, {Request, Response} from 'express';
import cors from 'cors';
import marketplaceRouter from './routes/marketplaceRoutes.js';

const app=express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/marketplace', marketplaceRouter);

app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use((_req: Request, res: Response) => {
  res.status(404).json({ success: false, message: 'Resource not found' });
});

export default app;