const db = require('../database')
const { DataTypes } = require('sequelize')
const Paciente = require('./index.js')
const Psicologo = require('./Psicologo')

const Atendimento = db.define(
  'Atendimento',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    paciente_id: {
      type: DataTypes.INTEGER,
      References: {
        model: Paciente,
        key: 'id'
      }
    },
    psicologo_id: {
      type: DataTypes.INTEGER,
      References: {
        model: Psicologo,
        key: 'id'
      }
    },
    observacao:{
      type: DataTypes.STRING
    },
    data_atendimento: {
      type: DataTypes.DATE
    }
  },
  { tableName: 'atendimentos', timestamps:false }
)

module.exports = Atendimento
