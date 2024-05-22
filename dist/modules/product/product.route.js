"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const route = express_1.default.Router();
// order start
// order end 
route.post("/", product_controller_1.productControllers.createProduct);
route.get("/", product_controller_1.productControllers.getAllProducts);
route.get("/:productId", product_controller_1.productControllers.getProductById);
route.put("/:productId", product_controller_1.productControllers.updateProductById);
route.delete("/:productId", product_controller_1.productControllers.deleteAProduct);
exports.productRoutes = route;
