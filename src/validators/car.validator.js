import Joi from "joi";

const carValidator = Joi.object({
    model: Joi.string().required(),
    price: Joi.number().required().min(0).max(1000000),
    year: Joi.number().required().min(1990).max(new Date().getFullYear())
});

export {carValidator};