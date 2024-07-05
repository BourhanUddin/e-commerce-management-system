import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { productRoutes } from './app/modules/product/product.route';
const app: Application = express();

//parcers
app.use(express.json());
app.use(cors());

//application routes
app.use('/api/products', productRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
