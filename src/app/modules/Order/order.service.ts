import CarModel from "../Car/car.model";
import orderInterface from "./order.interface";
import { ObjectId } from "mongodb";

export const createCar = async (orderInfo: orderInterface, carId: any) => {
  const car = await CarModel.findOne({ _id: new ObjectId(carId) });

  if (!car) {
    return "Car model not found";
  }

  if (car.quantity < orderInfo?.quantity) {
    return `Insufficient stock! Only ${car.quantity} left.`;
  }

  const newQuantity = car.quantity - orderInfo?.quantity;
  const inStock = newQuantity <= 0;

  return await CarModel.updateOne(
    { _id: new ObjectId(carId) },
    {
      $set: {
        quantity: newQuantity,
        inStock: inStock,
      },
    }
  );
};

export const getRevenue = async () => {
  return await CarModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $count: "$price" },
      },
    },
  ]);
};
