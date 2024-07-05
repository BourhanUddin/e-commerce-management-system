import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { orderRouters } from './app/modules/orders/order.route';
import { productRoutes } from './app/modules/product/product.route';
const app: Application = express();

//parcers
app.use(express.json());
app.use(cors());

//application routes
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRouters);

app.get('/', (req: Request, res: Response) => {
  res.send('E-Commmerce Management System ');
});
//not found route
app.all('*', (req: Request, res: Response) => {
  return res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

export default app;
