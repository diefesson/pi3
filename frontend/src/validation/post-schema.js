import Joi from "joi"

export default Joi.object({
    title: Joi.string().min(3).max(30),
    description: Joi.string().min(3).max(250),
    image: Joi.string().uri(),
    org: Joi.object({
        id: Joi.number().integer().min(0)
    })
})