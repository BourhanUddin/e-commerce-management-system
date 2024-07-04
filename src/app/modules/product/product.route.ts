import express from 'express';
import { productController } from './product.controller';

const router = express.Router();

//route will call controller function
router.post('/create-new-product', productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:productId', productController.getSingleProduct);

export const productRoutes = router;
