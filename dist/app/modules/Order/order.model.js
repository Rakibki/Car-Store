"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// orderSchema
const orderSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: true,
    },
    car: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
});
const OrderModel = mongoose_1.default.model("Orders", orderSchema);
exports.default = OrderModel;
