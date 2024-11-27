import express, { Application, Request, Response } from "express";
import cors from "cors";
import carOrderRouter from "./app/modules/Order/order.routers";
import carRouter from "./app/modules/Car/car.routes";
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use(carOrderRouter);
app.use(carRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("server is running!");
});

export default app;
