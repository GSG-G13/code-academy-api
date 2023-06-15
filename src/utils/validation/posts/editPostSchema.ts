import Joi from 'joi';

const editPostSchema = Joi.object({
  postId: Joi.number().required().messages({
    'number.base': 'Post id must be a number',
    'number.empty': 'Post id cannot be empty',
    'any.required': 'Post id is required',
  }),
  content: Joi.string().min(2).required().messages({
    'string.empty': 'Post content cannot be empty',
    'string.min': 'Post content should have a minimum length of 2',
    'any.required': 'Post content is required',
  }),
});

export default editPostSchema;
