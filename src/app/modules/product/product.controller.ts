import { Request, Response } from 'express';
import { productService } from './product.service';
import ProductValidation from './product.validation';

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;
    const zodParseData = ProductValidation.parse(productData);
    const result = await productService.createProductIntoDB(zodParseData);

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as Error).message,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string;
    if (searchTerm) {
      const result = await productService.searchProductsInDB(searchTerm);
      res.status(200).json({
        success: true,
        message: 'Products found successfully!',
        data: result,
      });
    } else {
      const result = await productService.getAllproductsFronDB();
      res.status(200).json({
        success: true,
        message: 'Products fetched successfully!',
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as Error).message,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productService.getSingleProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: (error as Error).message,
    });
  }
};

const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const product = req.body;
    const value = ProductValidation.parse(product);
    const result = await productService.updateSingleProductInDB(id, value);
    res.status(200).json({
      success: true,
      message: 'Product is updated successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as Error).message,
    });
  }
};

const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productService.deleteSingleProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as Error).message,
    });
  }
};

const searchProducts = async (req: Request, res: Response) => {
  try {
    const query = req.query.q as string;
    const result = await productService.searchProductsInDB(query);
    res.status(200).json({
      success: true,
      message: "Products matching search term 'iphone' fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as Error).message,
    });
  }
};

export const productController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
  searchProducts,
};
