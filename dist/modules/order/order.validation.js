"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const orderProducValidationtSchema = zod_1.z.object({
    email: zod_1.z.string().email({ message: 'Please use a valid email address.' }),
    productId: zod_1.z.string().nonempty({ message: 'ProductId is required.' }),
    price: zod_1.z.number().min(0, { message: 'Price must be greater than or equal to 0.' }),
    quantity: zod_1.z.number().min(1, { message: 'Quantity must be at least 1.' }),
});
exports.default = orderProducValidationtSchema;
