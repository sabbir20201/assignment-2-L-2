"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const productValidationVariantSchema = zod_1.z.object({
    type: zod_1.z.string().nonempty({ message: 'Type is required.' }),
    value: zod_1.z.string().nonempty({ message: 'Value is required.' }),
});
const productValidationInventorySchema = zod_1.z.object({
    quantity: zod_1.z
        .number()
        .min(0, { message: 'Quantity must be greater than or equal to 0.' }),
    inStock: zod_1.z.boolean(),
});
const productValidationSchema = zod_1.z.object({
    name: zod_1.z.string().nonempty({ message: 'Name is required.' }),
    description: zod_1.z.string().nonempty({ message: 'Description is required.' }),
    price: zod_1.z
        .number()
        .min(0, { message: 'Price must be greater than or equal to 0.' }),
    category: zod_1.z.string().nonempty({ message: 'Category is required.' }),
    tags: zod_1.z.array(zod_1.z.string().nonempty({ message: 'Tag cannot be empty.' })),
    variants: zod_1.z.array(productValidationVariantSchema),
    inventory: productValidationInventorySchema,
});
exports.default = productValidationSchema;
