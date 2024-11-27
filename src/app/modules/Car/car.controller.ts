import { Request, Response } from "express";
import {
  AllCars,
  createACar,
  deleteACar,
  getSingle,
  updateAcar,
} from "./car.service";

export const createCar = async (req: Request, res: Response) => {
  try {
    const carData = req.body;

    const result = await createACar(carData);

    res.status(200).json({
      message: "Car created successfully!",
      success: true,
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
};

export const getAllCars = async (req: Request, res: Response) => {
  try {
    const result = await AllCars();
    res.status(200).json({
      message: "Cars retrieved successfully",
      success: true,
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
};

export const GetSpecificCar = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params;
    const result = await getSingle(carId);

    res.status(200).json({
      message: "Cars retrieved successfully",
      status: true,
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
};

// issue
export const updateCar = async (req: Request, res: Response) => {
  try {
    const updateData = req.body;
    const {carId} = req.params;

    const result = await updateAcar(carId, updateData);
    res.status(200).json({
      message: "Car updated successfully",
      status: true,
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
};

export const deleteCar = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params;
    const result = await deleteACar(carId);
    res.status(200).json({
      message: "Car deleted successfully",
      status: true,
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
};
