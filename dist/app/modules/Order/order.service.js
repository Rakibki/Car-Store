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
exports.getRevenue = exports.createOrder = void 0;
const car_model_1 = __importDefault(require("../Car/car.model"));
const mongodb_1 = require("mongodb");
const order_model_1 = __importDefault(require("./order.model"));
// place a order
const createOrder = (orderInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const car = yield car_model_1.default.findOne({ _id: new mongodb_1.ObjectId(orderInfo === null || orderInfo === void 0 ? void 0 : orderInfo.car) });
    // if Car is not found
    if (!car) {
        return "Car is not found";
    }
    if (car.quantity < (orderInfo === null || orderInfo === void 0 ? void 0 : orderInfo.quantity)) {
        return `Insufficient stock! Only ${car.quantity} left.`;
    }
    const newQuantity = car.quantity - (orderInfo === null || orderInfo === void 0 ? void 0 : orderInfo.quantity);
    // update quantity and inStock
    yield car_model_1.default.updateOne({ _id: new mongodb_1.ObjectId(orderInfo === null || orderInfo === void 0 ? void 0 : orderInfo.car) }, {
        $set: {
            quantity: newQuantity,
            inStock: newQuantity < 1 ? false : true,
        },
    });
    return yield order_model_1.default.create(orderInfo);
});
exports.createOrder = createOrder;
// calculate our revenue
const getRevenue = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield order_model_1.default.aggregate([
        {
            $group: {
                _id: null,
                totalRevenue: { $sum: "$totalPrice" },
            },
        },
    ]);
});
exports.getRevenue = getRevenue;
