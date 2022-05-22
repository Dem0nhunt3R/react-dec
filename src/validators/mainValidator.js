import Joi from "joi";

const nameValidator = Joi.object({
    name: Joi.string().required()
});

export {nameValidator}