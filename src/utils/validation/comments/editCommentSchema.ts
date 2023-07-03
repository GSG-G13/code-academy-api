import Joi from 'joi';

const editCommentSchema = Joi.object({
  commentId: Joi.number().required().messages({
    'number.base': 'Comment id must be a number',
    'number.empty': 'Comment id cannot be empty',
    'any.required': 'Comment id is required',
  }),
  content: Joi.string().min(2).required().messages({
    'string.empty': 'Comment content cannot be empty',
    'string.min': 'Comment content should have a minimum length of 2',
    'any.required': 'Comment content is required',
  }),
});

export default editCommentSchema;
