import mongoose from "mongoose";
import orderInterface from "./order.interface";

const orderSchema = new mongoose.Schema<orderInterface>({
  email: {
    type: String,
    required: true,
  },
  car: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
});

const OrderModel = mongoose.model("Orders", orderSchema);

export default OrderModel;