import express, { Request, Response } from "express"
import { productRoutes } from "./modules/product/product.route"
import { orderRoutes } from "./modules/order/order.route"
const app = express()

app.use(express.json())

app.use("/api/orders", orderRoutes)
app.use("/api/products", productRoutes)


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app