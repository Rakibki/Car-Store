import express from "express";
import { CalculateRevenue, OrderCar } from "./order.controller";

const carOrderRouter = express.Router();

// order related api
carOrderRouter.post("/api/orders", OrderCar);
carOrderRouter.get("/api/orders/revenue", CalculateRevenue);

export default carOrderRouter;
