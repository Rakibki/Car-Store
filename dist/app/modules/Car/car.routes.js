"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const car_controller_1 = require("./car.controller");
const carRouter = express_1.default.Router();
// car related api
carRouter.post("/api/cars", car_controller_1.createCar);
carRouter.get("/api/cars", car_controller_1.getAllCars);
carRouter.get("/api/cars/:carId", car_controller_1.GetSpecificCar);
carRouter.put("/api/cars/:carId", car_controller_1.updateCar);
carRouter.delete("/api/cars/:carId", car_controller_1.deleteCar);
exports.default = carRouter;
