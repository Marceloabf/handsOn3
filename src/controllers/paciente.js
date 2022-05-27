const {Paciente} = require('../models')

const pacienteController = {
  index: async (req, res) => {
    try{
      const allPacients = await Paciente.findAll()
      res.status(200).json(allPacients)
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ error: "Oops, tivemos um erro, tente novamente." });
    }
  },
  show: async (req,res) => {
      const {id} = req.params;
      const paciente = await Paciente.findByPk(id);
      if(paciente){
        res.status(200).json(paciente);
      } 
      res.status(404).json('ID não encontrado')
  },
  store: async (req, res) => {
    try {
      const { nome, email, idade } = req.body
      const newPacient = await Paciente.create({ nome, email, idade })
      res.status(201).json(newPacient)
    } catch (error) {
      console.log(error.message)
      res.status(500).json({ error: 'Oops, tivemos um erro, tente novamente.' })
    }
  },
  update: async(req,res) => {
    const {nome, email, idade} = req.body
    const {id} = req.params

    const paciente = await Paciente.findByPk(id)
    if(!paciente){
      res.status(400).json('Paciente não encontrado')
    }
    await Paciente.update({nome, email, idade},{
      where:{
        id : id
      }
    });
    const pacienteAtualizado = await Psicologo.findByPk(id)

    res.json(pacienteAtualizado)
  },
  destroy: async(req,res) => {
      const {id} = req.params
      const paciente = await Paciente.findByPk(id)
      if(!paciente){
        res.status(400).json('ID não encontrado')
      }
      await Paciente.destroy({
        where:{id:id}
      })
      res.status(204).json("");
  }
}

module.exports = pacienteController
