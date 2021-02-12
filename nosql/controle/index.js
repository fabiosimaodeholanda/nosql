const mongoose = require("mongoose");
require("../db/connection");


require("../models/Produtos");
const Produtos = mongoose.model("produtos");


const MostrandoProdutos = async (req, res) => {
    const produtosResponse = await Produtos.find();
    const produtosJson = await produtosResponse;
  
    res.json(produtosJson);
  };


 const EnviandoDados= async(req, res) => {
    const novosFeedback = new Feedback({
      nome: req.body.nome,
      msg: req.body.msg,
      numero: req.body.numero,
    });
    novosFeedback.save();
   
}



module.exports={
    MostrandoProdutos,
    EnviandoDados,
    
};