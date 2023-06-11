import Joi from 'joi';
const addUserSchema = Joi.object({
  email: Joi.string()
    .email({minDomainSegments: 2,tlds: { allow: ['com', 'net'] },})
    .required()
    .messages({
      'string.email': 'Email must be a valid email address',
      'string.empty': 'Email cannot be empty',
      'any.required': 'Email is required',
    }),
  password: Joi.string()
    .min(8)
    .required()
    .pattern(
      new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^\\da-zA-Z]).+$')
    )
    .messages({
      'string.pattern.base':
      'Password must include at least one lowercase letter, one uppercase letter, one number, and one special character',
      'string.min': 'Password must be at least 8 characters long',
      'string.empty': 'Password cannot be empty',
      'any.required': 'Password is required',
    }),
  full_name: Joi.string()
    .min(3)
    .max(30)
    .required()
    .messages({
      'string.empty': 'Full name cannot be empty',
      'any.required': 'Full name is required',
    }),
  username: Joi.string()
    .min(3)
    .max(30)
    .alphanum()
    .lowercase()
    .uppercase()
    .required()
    .messages({
      'string.empty': 'Username cannot be empty',
      'any.required': 'Username is required',
    }),
  cohort_id: Joi.number()
    .integer()
    .min(1)
    .max(100)
    .required()
    .messages({
      'number.base': 'Cohort id must be a number',
      'number.empty': 'Cohort id cannot be empty',
      'any.required': 'Cohort id is required',
    }),
  role_id: Joi.number()
    .integer()
    .min(1)
    .max(100)
    .required()
    .messages({
      'number.base': 'Role id must be a number',
      'number.empty': 'Role id cannot be empty',
      'any.required': 'Role id is required',
    }),
});


export default addUserSchema;
