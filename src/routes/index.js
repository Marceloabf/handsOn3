const { Router } = require('express')
const routes = Router()
const pacienteController = require('../controllers/paciente')

routes.get('/', (req, res) => {
  res.send('Funcionando')
})

module.exports = routes

//Pacientes
routes.get('/pacientes', pacienteController.index)
routes.post('/pacientes/cadastrar', pacienteController.store)
