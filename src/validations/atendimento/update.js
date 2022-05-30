const { validate, Joi } = require('express-validation')

module.exports = validate({
  body: Joi.object({
    paciente_id: Joi.number().integer(),
    data_atendimento: Joi.date().min('now'),
    observacao: Joi.string()
  })
})
