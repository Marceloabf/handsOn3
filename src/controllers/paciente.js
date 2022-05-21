const Paciente = require('../models/Paciente')

const pacienteController = {
  index: async (req, res) => {
    const allPacients = await Paciente.findAll()
    res.json(allPacients)
  },
  store: async (req, res) => {
    try {
      const { nome, email, idade } = req.body
      const newPacient = await Paciente.create({ nome, email, idade })
      res.json(`Paciente ${nome} criado com sucesso`)
    } catch (error) {
      console.log(error.message)
      res.status(500).json({ error: 'Oops, tivemos um erro, tente novamente.' })
    }
  }
}

module.exports = pacienteController
