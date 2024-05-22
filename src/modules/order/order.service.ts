import TorderProduct from './order.interface';
import { orderProduct } from './order.model';

const createOrderIntoBD = (payload: TorderProduct) => {
  const result = orderProduct.create(payload);
  return result;
};

const getAllOrderFromDB = async (email?: string) => {
  let result;
  if (email) {
    result = await orderProduct.find({ email: email });
  } else {
    result = await orderProduct.find();
  }
  return result;
};

export const orderServices = {
  createOrderIntoBD,
  getAllOrderFromDB,
};
