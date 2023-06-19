import Joi from 'joi';

const validateLikes = Joi.object({
  id: Joi.number().required().messages({
    'number.base': 'Post ID must be a number',
    'any.required': 'Post ID is required',
  }),
});
export default validateLikes;
