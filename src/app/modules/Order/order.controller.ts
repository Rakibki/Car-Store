import { Request, Response, RequestHandler } from "express";
import { createOrder, getRevenue } from "./order.service";
import orderInterface from "./order.interface";
import orderValidationSchema from "./order.validation";

// place a order
export const OrderCar: RequestHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const orderInfo: orderInterface = req.body;
    const { error, value } = orderValidationSchema.validate(orderInfo);

    if (error) {
      res.status(400).json({
        message: error.message,
      });
    }

    const result = await createOrder(value);

    res.status(200).json({
      message: "Order created successfully",
      status: true,
      data: result,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

// Calculate our Revenue
export const CalculateRevenue = async (req: Request, res: Response) => {
  try {
    const result = await getRevenue();

    res.status(200).json({
      message: "Revenue calculated successfully",
      status: true,
      data: {
        totalRevenue: result[0].totalRevenue,
      },
    });
  } catch (e) {
    console.log(e);
  }
};
