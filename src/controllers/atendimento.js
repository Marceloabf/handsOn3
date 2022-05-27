const {Atendimento, Paciente} = require('../models')

const atendimentoController = {
  index: async (req, res) => {
    try{
      const allAtendimentos = await Atendimento.findAll({include: Paciente})
      res.status(200).json(allAtendimentos)
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ error: "Oops, tivemos um erro, tente novamente." });
    }
  },
  show: async (req,res) => {

      const {id} = req.params;
      const atendimento = await Atendimento.findByPk(id);
      if(atendimento){
        res.status(200).json(atendimento);
      }
      res.status(404).json('ID não encontrado')
  },
  store: async (req, res) => {
    try {
      const user = req.user
      const { paciente_id, psicologo_id, observacao, data_atendimento } = req.body
      const newAtendimento = await Atendimento.create({ paciente_id, psicologo_id, observacao, data_atendimento})
      res.status(201).json(newAtendimento)
    } catch (error) {
      console.log(error.message)
      res.status(500).json({ error: 'Oops, tivemos um erro, tente novamente.' })
    }
  },
  update: async(req,res) => {
    const {paciente_id, psicologo_id, observacao,data_atendimento} = req.body
    const {id} = req.params

    const atendimento = await Atendimento.findByPk(id)

    if(!atendimento){
      res.status(400).json('Atendimento não encontrado')
    }

    await Atendimento.update({paciente_id, psicologo_id, observacao, data_atendimento},{
      where:{
        id : id
      }
    });
    res.json()
  },
  destroy: async(req,res) => {
    const {id} = req.params
    const atendimento = await Atendimento.findByPk(id)
    if(!atendimento){
      res.status(400).json('Atendimento não encontrado')
    }
    await Atendimento.destroy({
      where:{id:id}
    })
    res.status(204).json("");
}
}
module.exports = atendimentoController