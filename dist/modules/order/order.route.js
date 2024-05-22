"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const route = express_1.default.Router();
route.post("/", order_controller_1.orderController.createAOrder);
route.get("/", order_controller_1.orderController.getAllOrders);
exports.orderRoutes = route;
