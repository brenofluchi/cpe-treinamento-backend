const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      nome: Joi.string().required(),
      email: Joi.string().email().required(),
      telefone: Joi.string().required(),
      estado: Joi.string().required(),
      cidade: Joi.string().required(),
      cep: Joi.string().required(),
      logradouro: Joi.string().required(),
      sonho: Joi.string().required(),
      password: Joi.string().min(6).required(),      
    }),
  }),

  getById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      user_id: Joi.string().required(),
    }),
  }),

  update: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      user_id: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      nome: Joi.string().optional(),
      email: Joi.string().email().optional(),
      telefone: Joi.string().optional(),
      estado: Joi.string().optional(),
      cidade: Joi.string().optional(),
      cep: Joi.string().optional(),
      logradouro: Joi.string().optional(),
      sonho: Joi.string().optional(),
    }) .min(1),
  }),

  delete: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      user_id: Joi.string().required(),
    }),
  }),
};