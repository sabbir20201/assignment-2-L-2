import express from 'express';
import { productControllers } from './product.controller';

const route = express.Router();

// order start
// order end

route.post('/', productControllers.createProduct);
route.get('/', productControllers.getAllProducts);
route.get('/:productId', productControllers.getProductById);
route.put('/:productId', productControllers.updateProductById);
route.delete('/:productId', productControllers.deleteAProduct);

export const productRoutes = route;
