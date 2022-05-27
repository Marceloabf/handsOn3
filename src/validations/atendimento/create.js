const {validate, Joi} = require("express-validation")

module.exports = validate({
    body: Joi.object({
        paciente_id: Joi.number().integer().required(),
        data_atendimento: Joi.string().required(),
        observacao:Joi.string().required()
    })
})  