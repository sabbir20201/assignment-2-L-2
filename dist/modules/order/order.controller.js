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
exports.orderController = void 0;
const order_service_1 = require("./order.service");
const createAOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        const result = yield order_service_1.orderServices.createOrderIntoBD(orderData);
        res.json({
            success: true,
            message: 'order created successfully',
            data: result,
        });
    }
    catch (error) {
        res.json({
            success: false,
            message: 'failed to order create',
            error: error,
        });
    }
});
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const email = (_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.email;
    const result = yield order_service_1.orderServices.getAllOrderFromDB(email);
    const message = email
        ? `email search found`
        : 'all order fatched successfully';
    res.json({
        success: true,
        message,
        data: result,
    });
});
exports.orderController = {
    createAOrder,
    getAllOrders,
};
