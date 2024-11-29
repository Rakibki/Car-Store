import CarInterface from "./car.interface";
import CarModel from "./car.model";
import { ObjectId } from "mongodb";


// create a car in database
export const createACar = async (cardData: CarInterface) => {
  return await CarModel.create(cardData);
};

// get all cars from bd
export const AllCars = async () => {
  return await CarModel.find();
};


// get single car by id
export const getSingle = async (carId: any) => {
  return await CarModel.findOne({ _id: new ObjectId(carId) });
};

// update a spefic car
export const updateAcar = async (carId: any, updateData: any) => {
  // return await CarModel.updateOne({ _id: new ObjectId(carId) }, updateData, { new: true, runValidators: true });
  return await CarModel.findByIdAndUpdate(
    { _id: new ObjectId(carId) },
    { $set: updateData },
    { new: true, runValidators: true }
  );
};

// delete a car
export const deleteACar = async (carId: any) => {
  return await CarModel.deleteOne({ _id: new ObjectId(carId) });
};

export default {
  createACar,
  AllCars,
  getSingle,
};
