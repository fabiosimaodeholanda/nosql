const express = require('express');
const routes = express.Router();
const Nosql = require("./src/controle/index");


routes.get("/produtos",Nosql.MostrandoProdutos) 
routes.post("/produtos",Nosql.EnviandoDados) 


module.exports = routes;