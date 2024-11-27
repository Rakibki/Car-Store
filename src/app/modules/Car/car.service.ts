import CarInterface from "./car.interface";
import CarModel from "./car.model";
import { ObjectId } from "mongodb";

export const createACar = async (cardData: CarInterface) => {
  return await CarModel.create(cardData);
};

export const AllCars = async () => {
  return await CarModel.find();
};

export const getSingle = async (carId: any) => {
  return await CarModel.findOne({ _id: new ObjectId(carId) });
};

export const updateAcar = async (carId: any, updateData: any) => {
  // return await CarModel.updateOne({ _id: new ObjectId(carId) }, updateData, { new: true, runValidators: true });
  return await CarModel.findByIdAndUpdate(
    { _id: new ObjectId(carId) },
    { $set: updateData },
    { new: true, runValidators: true }
  );
};

export const deleteACar = async (carId: any) => {
  return await CarModel.deleteOne({ _id: new ObjectId(carId) });
};

export default {
  createACar,
  AllCars,
  getSingle,
};
