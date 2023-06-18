import Joi from 'joi';

const getSingleCohortSchema = Joi.object({
  id: Joi.string().required().messages({
    'string.empty': 'Id cannot be empty',
    'any.required': 'Id is required',
  }),

});
export default getSingleCohortSchema;
