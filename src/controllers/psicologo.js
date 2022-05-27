const bcrypt = require('bcryptjs')
const {Psicologo} = require('../models')


const psicologoController = {
  index: async (req, res) => {
    try{
      const allPsicologos= await Psicologo.findAll()
      res.json(allPsicologos)
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ error: "Oops, tivemos um erro, tente novamente." });
    }
  },
  show: async (req,res) => {
      const {id} = req.params;
      const psicologo = await Psicologo.findOne({where:{id:id},attributes:['id','nome','email','descricao']});
      if(psicologo){
        res.json(psicologo);
      }
        res.status(404).json('ID não encontrado')
  },
  store: async (req, res) => {
    try {
      const { nome, email, senha, descricao } = req.body
      const newPass = bcrypt.hashSync(senha, 10) 
      const newPsicologo = await Psicologo.create({ nome, email, senha: newPass, descricao })
      res.status(201).json(newPsicologo)
    } catch (error) {
      console.log(error.message)
      res.status(500).json({ error: 'Oops, tivemos um erro, tente novamente.' })
    }
  },
  update: async(req,res) => {
    const {nome, email, senha, descricao} = req.body
    const {id} = req.params

    const psicologo = await Psicologo.findByPk(id)

    if(!psicologo){
      res.status(400).json('Psicologo não encontrado')
    }
    const newPass = bcrypt.hashSync(senha, 10)

    await Psicologo.update({nome, email, senha:newPass, descricao},{
      where:{
        id : id
      }
    });
    const psicologoAtualizado = await Psicologo.findByPk(id)
    res.status(200).json(psicologoAtualizado)
  },
  destroy: async(req,res) => {
    const {id} = req.params
    const psicologo = await Psicologo.findByPk(id)
    if(!psicologo){
      res.status(400).json('ID não encontrado')
    }
    await Psicologo.destroy({
      where:{id:id}
    })
    res.status(204).json("");
  }
}

module.exports = psicologoController