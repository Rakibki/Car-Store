import CarModel from "../Car/car.model";
import orderInterface from "./order.interface";

export const createCar = (orderInfo: orderInterface) => {
  return CarModel.create(createCar);
};
