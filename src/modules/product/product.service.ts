import {   Tproduct } from "./product.interface";
import {  product } from "./product.model";

const createProductIntoDB = async (payload: Tproduct) => {
  const result = await product.create(payload);
  return result;
};

const getAllProductsFromDB = async (searchTerm?: string) => {
  let result;
  if (searchTerm) {
    result = await product.find({
      name: { $regex: searchTerm, $options: "i" },
    });
  } else {
    result = await product.find();
  }
  return result;
};
const getProductById = async (id: string) => {
  const result = await product.findById(id);
  return result;
};
const deleteAProduct = async (id: string) => {
  const result = await product.findByIdAndDelete(id);
  return result;
};
const updateProductByIdIntoBD = async (
  id: string,
  updateData: Partial<Tproduct>
) => {
  const result = await product.findByIdAndUpdate(id, updateData, { new: true });
  return result;
};


export const productServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getProductById,
  deleteAProduct,
  updateProductByIdIntoBD,


};
