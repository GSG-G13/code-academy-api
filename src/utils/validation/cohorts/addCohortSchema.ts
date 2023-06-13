import Joi from 'joi';

const addCohortSchema = Joi.object({
  name: Joi.string().required().min(3).messages({
    'string.empty': 'Name cannot be empty',
    'string.min': 'Name should have a minimum length of 3',
    'any.required': 'Name is required',
  }),
  startDate: Joi.date().min('now').required().messages({
    'date.base': 'Start date must be a date',
    'date.empty': 'Start date cannot be empty',
    'date.min': 'Start date must be greater than or equal to today',
    'any.required': 'Start date is required',
  }),
  endDate: Joi.date().min('now').required().messages({
    'date.base': 'End date must be a date',
    'date.empty': 'End date cannot be empty',
    'date.min': 'End date must be greater than or equal to today',
    'any.required': 'End date is required',
  }),
});

export default addCohortSchema;
