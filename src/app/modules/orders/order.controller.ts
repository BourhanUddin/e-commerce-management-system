import { Request, Response } from 'express';
import { orderService } from './order.service';
import { OrderValidation } from './order.validation';

const createOrder = async (req: Request, res: Response) => {
  try {
    const { order: orderData } = req.body;
    const zodParseData = OrderValidation.parse(orderData);
    const result = await orderService.createOrderIntoDB(zodParseData);

    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
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

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const { order: orderData } = req.body;
    const result = await orderService.getAllOrdersFromDB(orderData);
    res.status(200).send({
      success: true,
      message: 'Orders fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something is missing or invalid, check and try again',
      error: err,
    });
  }
};
export const orderController = {
  createOrder,
  getAllOrders,
};
