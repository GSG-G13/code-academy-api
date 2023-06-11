import Joi from 'joi';

const addUserSchema = Joi.object({
  full_name: Joi.string()
    .min(3)
    .max(50)
    .required()
    .messages({
      'string.empty': 'Full name cannot be empty',
      'string.min': 'Full name should have a minimum length of 3',
      'string.max': 'Full name should have a maximum length of 50',
      'any.required': 'Full name is required',
    }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required()
    .messages({
      'string.email': 'Email must be a valid email address',
      'string.empty': 'Email cannot be empty',
      'any.required': 'Email is required',
    }),

  cohort_id: Joi.number()
    .integer()
    .required()
    .messages({
      'number.base': 'Cohort id must be a number',
      'number.empty': 'Cohort id cannot be empty',
      'any.required': 'Cohort id is required',
    }),
  role_id: Joi.number()
    .integer()
    .required()
    .messages({
      'number.base': 'Role id must be a number',
      'number.empty': 'Role id cannot be empty',
      'any.required': 'Role id is required',
    }),
});

export default addUserSchema;
