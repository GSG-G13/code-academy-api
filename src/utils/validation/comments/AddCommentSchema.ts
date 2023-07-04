import Joi from 'joi';

const validateAddCommentSchema = Joi.object({
  content: Joi.string().min(2).required().messages({
    'string.empty': 'Post content cannot be empty',
    'string.min': 'Post content should have a minimum length of 2',
    'any.required': 'Post content is required',
  }),
  postId: Joi.number().required().messages({
    'string.empty': 'postId cannot be empty',
    'any.required': 'postId is required',
  }),
});

export default validateAddCommentSchema;
