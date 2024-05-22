import { Request, Response } from "express";
import { productServices } from "./product.service";
import productValidationSchema from "./product.validation";



const createProduct = async (req: Request, res: Response) => {
try {
  const productData = req.body;
  const zodValidationData = productValidationSchema.parse(productData)
  const result = await productServices.createProductIntoDB(zodValidationData);
  res.json({
    success: true,
    message: "Product created successfully!",
    data: result,
  });
} catch (error: any) {
  res.json({
    success: false,
    message: "failed to create product",
    error: error.message
  })
}
};
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const result = await productServices.getAllProductsFromDB(
      searchTerm as string
    );
    res.status(200).json({
      success: true,
      message: searchTerm
        ? `product matched search term: ${searchTerm} fatched successfully`
        : `Products fatched successfully!`,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "failed to match",
      error: error.message,
    });
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.getProductById(productId);
    res.json({
      success: true,
      message: "single product fatched successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "failed to match single product",
      error: error.message,
    });
  }
};
const deleteAProduct = async (req: Request, res: Response) => {
try {
  const { productId } = req.params;
  await productServices.deleteAProduct(productId);
  res.json({
    success: true,
    message: "Product deleted successfully!",
    data: null,
  });
} catch (error: any) {
  res.json({
    success: false,
    message: "failed to delet",
    error: error.message,
  });
}
};
const updateProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateData = req.body;
    const result = await productServices.updateProductByIdIntoBD(
      productId,
      updateData
    );
    res.json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "failed to product update",
      error: error,
    });
  }
};

export const productControllers = {
  createProduct,
  getAllProducts,
  getProductById,
  deleteAProduct,
  updateProductById,
 
};
