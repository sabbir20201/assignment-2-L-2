import { Schema, model } from 'mongoose';
import {
  Tproduct,
  TproductInventory,
  TproductVariant,
} from './product.interface';

const productVariantSchema = new Schema<TproductVariant>({
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const ProductInventorySchema = new Schema<TproductInventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

const productSchema = new Schema<Tproduct>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  variants: {
    type: [productVariantSchema],
  },
  inventory: {
    type: ProductInventorySchema,
  },
});

export const product = model<Tproduct>('product', productSchema);
