import { Schema, model } from "mongoose";
import CarInterface from "./car.interface";


const carSchema = new Schema<CarInterface>({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: ["Sedan", "SUV", "Truck", "Coupe", "Convertible"],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

const CarModel = model("Cars", carSchema);

export default CarModel;