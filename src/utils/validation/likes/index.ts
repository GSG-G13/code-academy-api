import Joi from 'joi';

const validateLikes = Joi.object({
  userId: Joi.number().required().messages({
    'number.base': 'User ID must be a number',
    'any.required': 'User ID is required',
  }),
  postId: Joi.number().required().messages({
    'number.base': 'Post ID must be a number',
    'any.required': 'Post ID is required',
  }),
});
export default validateLikes;
