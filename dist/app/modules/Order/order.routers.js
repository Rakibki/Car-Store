"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const carOrderRouter = express_1.default.Router();
// order related api
carOrderRouter.post("/api/orders", order_controller_1.OrderCar);
carOrderRouter.get("/api/orders/revenue", order_controller_1.CalculateRevenue);
exports.default = carOrderRouter;
