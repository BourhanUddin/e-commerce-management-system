import express from 'express';
import { productController } from './product.controller';

const router = express.Router();

//route will call controller function
router.post('/create-a-new-product', productController.createProduct);
