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
exports.deleteACar = exports.updateAcar = exports.getSingle = exports.AllCars = exports.createACar = void 0;
const car_model_1 = __importDefault(require("./car.model"));
const mongodb_1 = require("mongodb");
// create a car in database
const createACar = (cardData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield car_model_1.default.create(cardData);
});
exports.createACar = createACar;
// get all cars from bd
const AllCars = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield car_model_1.default.find();
});
exports.AllCars = AllCars;
// get single car by id
const getSingle = (carId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield car_model_1.default.findOne({ _id: new mongodb_1.ObjectId(carId) });
});
exports.getSingle = getSingle;
// update a spefic car
const updateAcar = (carId, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    // return await CarModel.updateOne({ _id: new ObjectId(carId) }, updateData, { new: true, runValidators: true });
    return yield car_model_1.default.findByIdAndUpdate({ _id: new mongodb_1.ObjectId(carId) }, { $set: updateData }, { new: true, runValidators: true });
});
exports.updateAcar = updateAcar;
// delete a car
const deleteACar = (carId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield car_model_1.default.deleteOne({ _id: new mongodb_1.ObjectId(carId) });
});
exports.deleteACar = deleteACar;
exports.default = {
    createACar: exports.createACar,
    AllCars: exports.AllCars,
    getSingle: exports.getSingle,
};
