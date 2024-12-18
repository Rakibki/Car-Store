import CarModel from "../Car/car.model";
import orderInterface from "./order.interface";
import { ObjectId } from "mongodb";
import OrderModel from "./order.model";

// place a order
export const createOrder = async (orderInfo: orderInterface) => {
  const car = await CarModel.findOne({ _id: new ObjectId(orderInfo?.car) });

  // if Car is not found
  if (!car) {
    return "Car is not found";
  }

  if (car.quantity < orderInfo?.quantity) {
    return `Insufficient stock! Only ${car.quantity} left.`;
  }

  const newQuantity = car.quantity - orderInfo?.quantity;

  // update quantity and inStock
  await CarModel.updateOne(
    { _id: new ObjectId(orderInfo?.car) },
    {
      $set: {
        quantity: newQuantity,
        inStock: newQuantity < 1 ? false : true,
      },
    }
  );
  return await OrderModel.create(orderInfo);
};

// calculate our revenue
export const getRevenue = async () => {
  return await OrderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: "$totalPrice" },
      },
    },
  ]);
};