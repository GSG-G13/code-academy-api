import Joi from 'joi';

const loginSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    })
    .required()
    .messages({
      'string.email': 'Email must be a valid email address',
      'string.empty': 'Email cannot be empty',
      'any.required': 'Email is required',
    }),
  password: Joi.string()
    .required()
    .min(8)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).+$/)
    .messages({
      'string.pattern.base':
        'Password must include at least one lowercase letter, one uppercase letter, one number, and one special character',
      'string.min': 'Password must be at least 8 characters long',
      'string.empty': 'Password cannot be empty',
      'any.required': 'Password is required',
    }),
});

export default loginSchema;
