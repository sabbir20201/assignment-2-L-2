import { z } from "zod";

const orderProducValidationtSchema = z.object({
    email: z.string().email({ message: 'Please use a valid email address.' }),
    productId: z.string().nonempty({ message: 'ProductId is required.' }),
    price: z.number().min(0, { message: 'Price must be greater than or equal to 0.' }),
    quantity: z.number().min(1, { message: 'Quantity must be at least 1.' }),
  });

  export default orderProducValidationtSchema