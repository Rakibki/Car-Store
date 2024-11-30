"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const order_routers_1 = __importDefault(require("./app/modules/Order/order.routers"));
const car_routes_1 = __importDefault(require("./app/modules/Car/car.routes"));
const app = (0, express_1.default)();
// middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// routes
app.use(order_routers_1.default);
app.use(car_routes_1.default);
// home router
app.get("/", (req, res) => {
    res.send("server is running!");
});
// global erroe handler
app.use((err, req, res, next) => {
    const statusCode = err.status || 500;
    const message = err.message || "Something went wrong!";
    res.status(statusCode).json({
        success: false,
        error: {
            message,
            statusCode,
        },
    });
});
exports.default = app;
