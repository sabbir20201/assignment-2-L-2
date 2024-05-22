import { Schema, model } from 'mongoose';
import TorderProduct from './order.interface';

const orderProductSchema = new Schema<TorderProduct>({
  email: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});
export const orderProduct = model<TorderProduct>(
  'orderProduct',
  orderProductSchema,
);
