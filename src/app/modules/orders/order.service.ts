import { Order } from './order.interface';
import { OrderModel } from './order.model';

const createOrderIntoDB = async (order: Order) => {
  const result = await OrderModel.create(order);
  return result;
};
const getAllOrdersFromDB = async (orderData?: any) => {
  const result = await OrderModel.find();
  return result;
};
export const orderService = {
  createOrderIntoDB,
  getAllOrdersFromDB,
};
