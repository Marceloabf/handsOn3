const Atendimento = require('../models/Atendimento')
const Psicologo = require('../models/Psicologo')
const Paciente = require('../models/Paciente')

Atendimento.belongsTo(Paciente, { foreignKey: 'paciente_id' })
Paciente.hasMany(Atendimento, { foreignKey: 'paciente_id' })

Atendimento.belongsTo(Psicologo, { foreignKey: 'psicologo_id' })
Psicologo.hasMany(Atendimento, { foreignKey: 'psicologo_id' })

module.exports = { Atendimento, Paciente, Psicologo }
