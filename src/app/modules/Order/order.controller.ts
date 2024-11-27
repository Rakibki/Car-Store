import { Request, Response } from "express";
import { createCar } from "./order.service";
import orderInterface from "./order.interface";

export const OrderCar = async (req: Request, res: Response) => {
  const orderInfo: orderInterface = req.body;
  const result = await createCar(orderInfo);

  res.status(200).json({
    message: "Order created successfully",

    status: true,
    data: result,
  });
};