import { Request, Response } from "express";
import { createCar, getRevenue } from "./order.service";
import orderInterface from "./order.interface";
import orderValidationSchema from "./order.validation";

export const OrderCar = async (req: Request, res: Response) => {
  try {
    const orderInfo: orderInterface = req.body;
    const { carId } = req.params;

    const { error, value } = orderValidationSchema.validate(orderInfo);

    if (error) {
      return res.status(400).json({
        message: error,
      });
    }

    const result = await createCar(value, carId);

    res.status(200).json({
      message: "Order created successfully",
      status: true,
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
};

export const CalculateRevenue = async (req: Request, res: Response) => {
  try {
    const result = getRevenue();

    res.status(200).json({
      message: "Revenue calculated successfully",
      status: true,
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
};
