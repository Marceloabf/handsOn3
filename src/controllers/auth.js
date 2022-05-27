const {Psicologo} = require('../models')
const {key} = require("../config/secret")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const authController = {
    login: async(req,res) => {
        const{email, senha} = req.body
        const usuario = await Psicologo.findOne({
            where:{email,}
        })
        if(!usuario){
            return res.status(401).json('E-mail ou senha inválido, verifique e tente novamente')
        }
        if(!bcrypt.compareSync(senha, usuario.senha)){
            return res.status(401).json('E-mail ou senha inválido, verifique e tente novamente')
        }
        const token = jwt.sign(
            {id: usuario.id, email: usuario.email, nome: usuario.nome}, key)
            
        return res.status(200).json(token)
    }
}
module.exports = authController