const db = require('../database')
const { DataTypes } = require('sequelize')

const Paciente = db.define(
  'Paciente',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    idade: {
      type: DataTypes.DATE
    }
  },
  { tableName: 'pacientes', timestamps:false }
)

module.exports = Paciente
