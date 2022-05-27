const { Router } = require('express')
const routes = Router()
const pacientController = require('../controllers/paciente')
const psicologoController = require('../controllers/psicologo')
const appointmentController = require('../controllers/atendimento')
const authController = require('../controllers/auth')
const auth = require('../middlewares/auth')

const psicologoValidation = require('../validations/psicologo/createUpdate')
const pacienteValidation = require('../validations/paciente/createUpdate')
const atendimentoValidation = require('../validations/atendimento/create')
const authValidation = require('../validations/auth/login')

module.exports = routes

//Pacientes
routes.get('/paciente', auth, pacientController.index);
routes.get('/paciente/:id', auth, pacientController.show);
routes.post('/paciente', auth, pacienteValidation, pacientController.store);
routes.put('/paciente/:id', auth, pacienteValidation, pacientController.update);
routes.delete('/paciente/:id', auth, pacientController.destroy);

//Psicologos
routes.get('/psicologo',auth, psicologoController.index); 
routes.get('/psicologo/:id',auth, psicologoController.show);
routes.post('/psicologo', auth, psicologoValidation,psicologoController.store);
routes.put('/psicologo/:id', auth, psicologoValidation, psicologoController.update);
routes.delete('/psicologo/:id', auth, psicologoController.destroy);

//Atendimento
routes.get('/atendimento', appointmentController.index);
routes.get('/atendimento/:id', appointmentController.show);
routes.post('/atendimento', auth, atendimentoValidation, appointmentController.store);
routes.put('/atendimento/:id', auth, atendimentoValidation, appointmentController.update);
routes.delete('/atendimento/:id', auth, appointmentController.destroy);

//Login
routes.post('/login',authValidation, authController.login)