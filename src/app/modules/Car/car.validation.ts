import Joi from "joi";

const carValidationSchema = Joi.object({
  brand: Joi.string().required().messages({
    "string.base": "Brand must be a text string.",
    "string.empty": "Brand cannot be empty. Please provide a valid car brand.",
    "any.required": "Brand is required. Please specify the car brand.",
  }),
  model: Joi.string().required().messages({
    "string.base": "Model must be a text string.",
    "string.empty": "Model cannot be empty. Please provide a valid car model.",
    "any.required": "Model is required. Please specify the car model.",
  }),
  year: Joi.number().integer().required().messages({
    "number.base": "Year must be a number.",
    "number.integer": "Year must be an integer. Please provide a valid year.",
    "any.required": "Year is required. Please specify the manufacturing year.",
  }),
  price: Joi.number().required().messages({
    "number.base": "Price must be a numeric value.",
    "any.required": "Price is required. Please specify the car price.",
  }),
  category: Joi.string()
    .valid("Sedan", "SUV", "Truck", "Coupe", "Convertible")
    .required()
    .messages({
      "string.base": "Category must be a text string.",
      "any.only":
        "Category must be one of the following: Sedan, SUV, Truck, Coupe, Convertible.",
      "any.required": "Category is required. Please select a car category.",
    }),
  description: Joi.string().required().messages({
    "string.base": "Description must be a text string.",
    "string.empty":
      "Description cannot be empty. Please provide a valid description.",
    "any.required":
      "Description is required. Please specify the car description.",
  }),
  quantity: Joi.number().integer().required().messages({
    "number.base": "Quantity must be a numeric value.",
    "number.integer": "Quantity must be an integer.",
    "any.required": "Quantity is required. Please provide the stock quantity.",
  }),
  inStock: Joi.boolean().required().messages({
    "boolean.base": "InStock must be a boolean value (true or false).",
    "any.required":
      "InStock is required. Please indicate if the car is in stock.",
  }),
});

export default carValidationSchema;
