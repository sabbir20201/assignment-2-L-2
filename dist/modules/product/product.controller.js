"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productControllers = void 0;
const product_service_1 = require("./product.service");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productData = req.body;
    const result = yield product_service_1.productServices.createProductIntoDB(productData);
    res.json({
        success: true,
        message: "Product created successfully!",
        data: result,
    });
});
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        const result = yield product_service_1.productServices.getAllProductsFromDB(searchTerm);
        res.status(200).json({
            success: true,
            message: searchTerm
                ? `product matched search term ${searchTerm} fatched successfully`
                : `Products fetched successfully!`,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "product not found",
            error: error,
        });
    }
});
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.productServices.getProductById(productId);
        res.json({
            success: true,
            message: "single product fatching",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: true,
            message: "product not found",
            error: error,
        });
    }
});
const deleteAProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    yield product_service_1.productServices.deleteAProduct(productId);
    res.json({
        success: true,
        message: "Product deleted successfully!",
        data: null,
    });
});
const updateProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const updateData = req.body;
        const result = yield product_service_1.productServices.updateProductByIdIntoBD(productId, updateData);
        res.json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "product not found",
            error: error,
        });
    }
});
exports.productControllers = {
    createProduct,
    getAllProducts,
    getProductById,
    deleteAProduct,
    updateProductById,
};
