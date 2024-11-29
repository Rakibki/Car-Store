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
exports.deleteCar = exports.updateCar = exports.GetSpecificCar = exports.getAllCars = exports.createCar = void 0;
const car_service_1 = require("./car.service");
const car_validation_1 = __importDefault(require("./car.validation"));
// create a car
const createCar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carData = req.body;
        const { error, value } = car_validation_1.default.validate(carData);
        if (error) {
            res.status(400).json({
                message: error,
            });
        }
        const result = yield (0, car_service_1.createACar)(value);
        res.status(200).json({
            message: "Car created successfully!",
            success: true,
            data: result,
        });
    }
    catch (e) {
        next(e);
    }
});
exports.createCar = createCar;
// get all cars
const getAllCars = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, car_service_1.AllCars)();
        res.status(200).json({
            message: "Cars retrieved successfully",
            success: true,
            data: result,
        });
    }
    catch (e) {
        console.log(e);
    }
});
exports.getAllCars = getAllCars;
// Get a Specific Car by car id
const GetSpecificCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { carId } = req.params;
        const result = yield (0, car_service_1.getSingle)(carId);
        res.status(200).json({
            message: "Cars retrieved successfully",
            status: true,
            data: result,
        });
    }
    catch (e) {
        console.log(e);
    }
});
exports.GetSpecificCar = GetSpecificCar;
// update a car
const updateCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateData = req.body;
        const { carId } = req.params;
        const result = yield (0, car_service_1.updateAcar)(carId, updateData);
        res.status(200).json({
            message: "Car updated successfully",
            status: true,
            data: result,
        });
    }
    catch (e) {
        console.log(e);
    }
});
exports.updateCar = updateCar;
// delete a car
const deleteCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { carId } = req.params;
        const result = yield (0, car_service_1.deleteACar)(carId);
        res.status(200).json({
            message: "Car deleted successfully",
            status: true,
            data: result,
        });
    }
    catch (e) {
        console.log(e);
    }
});
exports.deleteCar = deleteCar;
