const db = require('../database')
const { DataTypes } = require('sequelize')
const Paciente = require('./Paciente')
const Psicologo = require('./Psicologo')

const Atendimento = db.define(
  'Atendimento',
  {
    codigo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    paciente_id: {
      type: DataTypes.INTEGER,
      References: {
        model: Paciente,
        key: 'codigo'
      }
    },
    medico_id: {
      type: DataTypes.INTEGER,
      References: {
        model: Psicologo,
        key: 'codigo'
      }
    }
  },
  { tableName: 'atendimento' }
)

module.exports = Atendimento
