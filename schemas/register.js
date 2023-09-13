import joi from "joi";

let registerSchema = joi.object({
    name: joi.string().required().min(3).max(25).messages({
        'string.min': 'Name must have at least 3 characters long',
        'string.max': 'Name must have less than or equal to 25 characters',
        'any.required': 'Name is required',  //para cuando no se envia el dato
        'string.empty': "Name cannot be empty" //para cuando el dato está vacio
    }),
    mail: joi.string().required().email(),
    password: joi.string().required(),
    country: joi.string().required(),
    lastname: joi.string().min(3).max(20).empty("").messages({
        'string.min': 'Lastname must have at least 3 characters long',
        'string.max': 'Lastname must have less than or equal to 25 characters'
    }),
    photo: joi.string().min(5).max(300).messages({
        'string.min': 'name must have at least 100 characters please!',
        'string.max': 'name must be less than 151 characters please! ',
    })
})

export default registerSchema