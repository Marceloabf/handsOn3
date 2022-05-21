const db = require('../database')
const { DataTypes } = require('sequelize')

const Psicologo = db.define(
  'Psicologo',
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
    senha: {
      type: DataTypes.STRING
    },
    descricao: {
      type: DataTypes.STRING
    }
  },
  { tableName: 'psicologo' }
)

module.exports = Psicologo
