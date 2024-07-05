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
  const result = await ProductModel.findById({ _id });
  if (!result) {
    throw new Error('Product not found');
  }
  return result;
};

const updateSingleProductInDB = async (id: string, product: Product) => {
  try {
    const result = await ProductModel.findOneAndUpdate({ _id: id }, product, {
      new: true,
    });
    return result;
  } catch (error: any) {
    console.log(error);
    throw new Error('Failed to update product');
  }
};

const deleteSingleProductFromDB = async (id: string) => {
  try {
    const result = await ProductModel.findByIdAndDelete(id);
    if (!result) {
      throw new Error('Product not found');
    }
    return result;
  } catch (error: any) {
    console.log(error);
    throw new Error('Failed to delete product');
  }
};

const searchProductsInDB = async (query: string) => {
  try {
    const result = await ProductModel.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } },
        { category: { $regex: query, $options: 'i' } },
      ],
    });
    return result;
  } catch (error: any) {
    console.log(error);
    throw new Error('Failed to search products');
  }
};

export const productService = {
  createProductIntoDB,
  getAllproductsFronDB,
  getSingleProductFromDB,
  updateSingleProductInDB,
  deleteSingleProductFromDB,
  searchProductsInDB
};
