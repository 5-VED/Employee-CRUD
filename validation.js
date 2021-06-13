const Joi = require('joi');

const registerValidation = (data)=>{
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().min(6).required().email(),
        mobile: Joi.number().min(10).required(),
        city: Joi.string().min(4).required()
    });
    return schema.validate(data);
}

module.exports.registerValidation=registerValidation;