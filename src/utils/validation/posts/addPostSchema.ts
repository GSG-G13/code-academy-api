import Joi from 'joi';

const validateAddPostSchema = Joi.object({
  content: Joi.string().min(2).required().messages({
    'string.empty': 'Post content cannot be empty',
    'string.min': 'Post content should have a minimum length of 2',
    'any.required': 'Post content is required',
  }),
  isPublic: Joi.boolean().required().messages({
    'boolean.base': 'isPublic must be a boolean.',
    'any.required': 'Post visibility is required',
  }),
  cohortId: Joi.number().when('isPublic', {
    is: false,
    then: Joi.number()
      .required()
      .messages({ 'any.required': 'Cohort ID is required' }),
    otherwise: Joi.number()
      .allow(null)
      .messages({ 'number.base': 'Cohort ID must be a number or null.' }),
  }),
});

export default validateAddPostSchema;
