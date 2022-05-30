const { validate, Joi } = require('express-validation')

module.exports = validate({
  body: Joi.object({
    paciente_id: Joi.number().integer().required(),
    data_atendimento: Joi.date().min('now').required(),
    observacao: Joi.string().required()
  })
})
