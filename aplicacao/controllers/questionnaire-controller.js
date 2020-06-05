"use strict";

const model = require('../models/symptom-model.js');

exports.GetQuestion = (req, res) => {
//retorna a view montando a questão com o objeto de sintoma que esse controler recebe no res

};



exports.Answer = (req, res) =>{
    console.log('body:',req.body);
//tentar criar o m´metodo find by id e find by tag nas models
// const userSymptom=model.findbyid(res.body.idSymptom);

// if(res.body.Answer.val=="Sim"){
// //fazer a lógica de buscar doenças com o mesmo sintoma no banco e montar uma lista
// }
//     else{
// //ver a lista de sintomas que estão como positivo na sessão e buscar doenças que ainda não foram perguntadas

//     }

    exports.GetQuestion('', /*objeto encontrado na lógica*/);
    res.end();
};
