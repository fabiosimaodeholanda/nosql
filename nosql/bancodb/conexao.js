const mongoose = require("mongoose");

function conexao(){
    mongoose.connect("mongodb://localhost/fseletro",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }).then(()=>{
          console.log("Conexao feita com sucesso ")
      }).catch((erro)=>{
          console.log(`Erro ao se conectar: ${erro}`);
      })
}

module.exports=conexao()