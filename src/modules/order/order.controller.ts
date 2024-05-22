import { Request, Response } from 'express';
import TorderProduct from './order.interface';
import { orderServices } from './order.service';

const createAOrder = async (req: Request, res: Response) => {
  try {
    const orderData: TorderProduct = req.body;
    const result = await orderServices.createOrderIntoBD(orderData);
    res.json({
      success: true,
      message: 'order created successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: 'failed to order create',
      error: error,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  const email = req?.query?.email as string;
  const result = await orderServices.getAllOrderFromDB(email);
  const message = email
    ? `email search found`
    : 'all order fatched successfully';
  res.json({
    success: true,
    message,
    data: result,
  });
};

export const orderController = {
  createAOrder,
  getAllOrders,
};
