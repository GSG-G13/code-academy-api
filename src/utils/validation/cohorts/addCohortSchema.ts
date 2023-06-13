import Joi from 'joi';

const addCohortSchema = Joi.object({
  name: Joi.string().required().min(3).messages({
    'string.empty': 'name cannot be empty',
    'string.min': 'name should have a minimum length of 3',
    'string.max': 'name should have a maximum length of 50',
    'any.required': 'name is required',
  }),
  start_date: Joi.date().min('now').required().messages({
    'date.base': 'Start date must be a date',
    'date.empty': 'Start date cannot be empty',
    'date.min': 'Start date must be greater than or equal to today',
    'any.required': 'Start date is required',
  }),
  end_date: Joi.date().min('now').required().messages({
    'date.base': 'Start date must be a date',
    'date.empty': 'Start date cannot be empty',
    'date.min': 'Start date must be greater than or equal to today',
    'any.required': 'Start date is required',
  }),
});

export default addCohortSchema;
