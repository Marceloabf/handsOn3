const { Router } = require('express')
const routes = Router()

const pacienteController = require('../controllers/paciente')
const psicologoController = require('../controllers/psicologo')
const atendimentoController = require('../controllers/atendimento')
const authController = require('../controllers/auth')

const auth = require('../middlewares/auth')

const criarPacienteValidation = require('../validations/paciente/create')
const atualizarPacienteValidation = require('../validations/paciente/update')

const criarPsicologoValidation = require('../validations/psicologo/create')
const atualizarPsicologoValidation = require('../validations/psicologo/update')

const criarAtendimentoValidation = require('../validations/atendimento/create')
const atualizarAtendimentoValidation = require('../validations/atendimento/update')

const loginValidation = require('../validations/auth/login')

module.exports = routes

//Paciente
routes.get('/paciente', auth, pacienteController.index)
routes.get('/paciente/:id', auth, pacienteController.show)
routes.post(
  '/paciente',
  auth,
  criarPacienteValidation,
  pacienteController.store
)
routes.put(
  '/paciente/:id',
  auth,
  atualizarPacienteValidation,
  pacienteController.update
)
routes.delete('/paciente/:id', auth, pacienteController.destroy)

//Psicologo
routes.get('/psicologo', psicologoController.index)
routes.get('/psicologo/:id', auth, psicologoController.show)
routes.post('/psicologo', criarPsicologoValidation, psicologoController.store)
routes.put(
  '/psicologo/:id',
  auth,
  atualizarPsicologoValidation,
  psicologoController.update
)
routes.delete('/psicologo/:id', auth, psicologoController.destroy)

//Atendimento
routes.get('/atendimento', auth, atendimentoController.index)
routes.get('/atendimento/:id', atendimentoController.show)
routes.post(
  '/atendimento',
  auth,
  criarAtendimentoValidation,
  atendimentoController.store
)
routes.put(
  '/atendimento/:id',
  auth,
  atualizarAtendimentoValidation,
  atendimentoController.update
)
routes.delete('/atendimento/:id', auth, atendimentoController.destroy)

//Login
routes.post('/login', loginValidation, authController.login)
