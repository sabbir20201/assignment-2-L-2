
import  express  from 'express';
import { orderController } from './order.controller';

const route = express.Router()

route.post("/", orderController.createAOrder)
route.get("/", orderController.getAllOrders)

export const orderRoutes = route;