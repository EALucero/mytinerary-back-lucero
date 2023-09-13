import joi from "joi";

let signinSchema = joi.object({
   mail: joi.string().required().min(8).max(20).messages({
    'string.min': 'Mail must have at least 8 characters long',
    'string.max': 'Mail must have less than or equal to 20 characters',
    'any.required': 'Mail is required',
    'string.empty': "Mail cannot be empty"
  }),
  password: joi.string().required().min(4).max(20).messages({
    'string.min': 'Password must have at least 8 characters long',
    'string.max': 'Password must have less than or equal to 20 characters',
    'any.required': 'Password is required',
    'string.empty': "Password cannot be empty" 
  })
})

export default signinSchema