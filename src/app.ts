import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import carOrderRouter from "./app/modules/Order/order.routers";
import carRouter from "./app/modules/Car/car.routes";

const app: Application = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use(carOrderRouter);
app.use(carRouter);

// home router
app.get("/", (req: Request, res: Response) => {
  res.send("server is running!");
});

// global erroe handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.status || 500;
  const message = err.message || "Something went wrong!";
  res.status(statusCode).json({
    success: false,
    error: {
      message,
      statusCode,
    },
  });
});

export default app;
