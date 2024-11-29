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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateRevenue = exports.OrderCar = void 0;
const order_service_1 = require("./order.service");
const order_validation_1 = __importDefault(require("./order.validation"));
// place a order
const OrderCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderInfo = req.body;
        const { error, value } = order_validation_1.default.validate(orderInfo);
        if (error) {
            res.status(400).json({
                message: error.message,
            });
        }
        const result = yield (0, order_service_1.createOrder)(value);
        res.status(200).json({
            message: "Order created successfully",
            status: true,
            data: result,
        });
    }
    catch (e) {
        console.error(e);
        res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
});
exports.OrderCar = OrderCar;
// Calculate our Revenue
const CalculateRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, order_service_1.getRevenue)();
        res.status(200).json({
            message: "Revenue calculated successfully",
            status: true,
            data: {
                totalRevenue: result[0].totalRevenue,
            },
        });
    }
    catch (e) {
        console.log(e);
    }
});
exports.CalculateRevenue = CalculateRevenue;
