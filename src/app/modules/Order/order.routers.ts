import express from "express";
import { OrderCar } from "./order.controller";

const carOrderRouter = express.Router();

carOrderRouter.post("/api/orders", OrderCar);

export default carOrderRouter;
