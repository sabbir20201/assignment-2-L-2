import { z } from 'zod';

const productValidationVariantSchema = z.object({
  type: z.string().nonempty({ message: 'Type is required.' }),
  value: z.string().nonempty({ message: 'Value is required.' }),
});

const productValidationInventorySchema = z.object({
  quantity: z
    .number()
    .min(0, { message: 'Quantity must be greater than or equal to 0.' }),
  inStock: z.boolean(),
});

const productValidationSchema = z.object({
  name: z.string().nonempty({ message: 'Name is required.' }),
  description: z.string().nonempty({ message: 'Description is required.' }),
  price: z
    .number()
    .min(0, { message: 'Price must be greater than or equal to 0.' }),
  category: z.string().nonempty({ message: 'Category is required.' }),
  tags: z.array(z.string().nonempty({ message: 'Tag cannot be empty.' })),
  variants: z.array(productValidationVariantSchema),
  inventory: productValidationInventorySchema,
});

export default productValidationSchema;
