import Joi from 'joi';

const deletePostSchema = Joi.object({
  id: Joi.number().required().messages({
    'number.base': 'Post id must be a number',
    'number.empty': 'Post id cannot be empty',
    'any.required': 'Post id is required',
  }),
});

export default deletePostSchema;
