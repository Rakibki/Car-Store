import express from "express";
import { createCar, deleteCar, getAllCars, GetSpecificCar, updateCar } from "./car.controller";

const carRouter = express.Router();


// car related api
carRouter.post("/api/cars", createCar);
carRouter.get("/api/cars", getAllCars);
carRouter.get("/api/cars/:carId", GetSpecificCar);
carRouter.put("/api/cars/:carId", updateCar);
carRouter.delete("/api/cars/:carId", deleteCar);

export default carRouter;
