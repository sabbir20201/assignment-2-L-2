export type TproductVariant = {
  type: string;
  value: string;
};
export type TproductInventory = {
  quantity: number;
  inStock: boolean;
};
export type Tproduct = {
  name: string;
  description : string;
  price: number;
  category : string;
  tags: string[];
  variants: [TproductVariant];
  inventory: TproductInventory;
};


