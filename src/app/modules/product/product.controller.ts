import { Request, Response } from 'express';
import { productService } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;
    const result = await productService.createProductIntoDB(productData);

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await productService.getAllproductsFronDB();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getSingleProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const result = await productService.getSingleProductFromDB(productId);
  res.status(200).json({
    success: true,
    message: 'Product fetched successfully!',
    data: result,
  });
};
export const productController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
};
