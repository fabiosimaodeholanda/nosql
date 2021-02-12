const express = require("express");
const app=express();
const cors=require('cors'); 
const routes = require('./rotas');


app.use(express.json());
app.use(cors())

app.use(routes);

app.listen(4000);