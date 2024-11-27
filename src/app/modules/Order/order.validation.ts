import Joi from "joi";

const orderValidationSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.base": "Email must be a text string.",
    "string.email": "Email must be a valid email address.",
    "string.empty": "Email cannot be empty. Please provide a valid email.",
    "any.required": "Email is required. Please specify the email address.",
  }),
  car: Joi.string().required().messages({
    "string.base": "Car must be a text string.",
    "string.empty": "Car cannot be empty. Please provide a valid car model.",
    "any.required": "Car is required. Please specify the car model.",
  }),
  quantity: Joi.number().integer().min(1).required().messages({
    "number.base": "Quantity must be a numeric value.",
    "number.integer": "Quantity must be an integer.",
    "number.min": "Quantity must be at least 1.",
    "any.required": "Quantity is required. Please specify the order quantity.",
  }),
  totalPrice: Joi.number().min(0).required().messages({
    "number.base": "Total price must be a numeric value.",
    "number.min": "Total price must be a non-negative number.",
    "any.required": "Total price is required. Please specify the total price.",
  }),
});

export default orderValidationSchema;
