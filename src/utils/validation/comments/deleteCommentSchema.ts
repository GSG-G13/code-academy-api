import Joi from 'joi';

const deleteCommentSchema = Joi.object({
  commentId: Joi.number().required().messages({
    'number.base': 'Comment id must be a number',
    'number.empty': 'Comment id cannot be empty',
    'any.required': 'Comment id is required',
  }),
});

export default deleteCommentSchema;
