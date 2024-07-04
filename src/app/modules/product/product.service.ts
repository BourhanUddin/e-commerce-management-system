import { Product } from './product.interface';
import ProductModel from './product.model';

const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllproductsFronDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSingleProductFromDB = async (_id: string) => {
  const result = await ProductModel.findById({ _id});
  if (!result) {
    throw new Error('Product not found');
  }
  return result;
};

export const productService = {
  createProductIntoDB,
  getAllproductsFronDB,
  getSingleProductFromDB,
};
