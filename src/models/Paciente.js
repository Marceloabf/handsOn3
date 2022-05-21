const db = require('../database')
const { DataTypes } = require('sequelize')

const Paciente = db.define(
  'Paciente',
  {
    codigo: {
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
      type: DataTypes.INTEGER
    }
  },
  { tableName: 'pacientes' }
)

module.exports = Paciente
