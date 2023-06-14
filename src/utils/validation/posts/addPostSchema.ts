import Joi from 'joi';

const addPostSchema = Joi.object({
  content: Joi.string().min(2).required().messages({
    'string.empty': 'Post content cannot be empty',
    'string.min': 'Post content should have a minimum length of 2',
    'any.required': 'Post content is required',
  }),
  isPublic: Joi.boolean().required().messages({
    'string.empty': 'Post visibility cannot be empty',
    'any.required': 'Post visibility is required',
  }),
  cohortId: Joi.number().required().messages({
    'string.empty': 'Post visibility cannot be empty',
    'any.required': 'Post visibility is required',
  }),

});

export default addPostSchema;
