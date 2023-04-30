const Joi = require('joi');

const createUserSchema = Joi.object({
    firstName: Joi.string().min(3).max(100).required(),
    lastName: Joi.string().min(3).max(100).required()
})

module.exports = {
    createUserSchema
}
