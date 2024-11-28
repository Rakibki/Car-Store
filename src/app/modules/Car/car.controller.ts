import { Request, Response } from "express";
import {
  AllCars,
  createACar,
  deleteACar,
  getSingle,
  updateAcar,
} from "./car.service";
import carValidationSchema from "./car.validation";



// create a car
export const createCar = async (req: Request, res: Response) => {
  try {
    const carData = req.body;
    const { error, value } = carValidationSchema.validate(carData);
    if (error) {
      return res.status(400).json({
        message: error,
      });
    }
    const result = await createACar(value);
    res.status(200).json({
      message: "Car created successfully!",
      success: true,
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
};


// get all cars
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

// Get a Specific Car by car id
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


// update a car
export const updateCar = async (req: Request, res: Response) => {
  try {
    const updateData = req.body;
    const { carId } = req.params;

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



// delete a car
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