"use strict";

const symptomModel = require('../models/symptom-model.js');
const diseaseModel=require('../models/disease-model.js');
const storageKey="healthWebUserSession";


// var options = { page: '', modal: '', title: '', next: '', footnote: '', content: '', percent: 0, diseases: [], raw: '' , symptomId: ''};

exports.GetQuestion = (req, res) => {
//retorna a view montando a questão com o objeto de sintoma que esse controler recebe no res

};


exports.Answer = (req, res) =>{
    console.log('body:',req.body);

    //primeiro, puxa o que tem guardado na localstorage
    let storageContent=localStorage.getItem(storageKey);
if(storageContent){
storageContent=JSON.parse(storageContent);    
}
else res.redirect('/');

//agora, a lógica que verifica a resposta e devolve uma nova pergunta
    const userSymptom=symptomModel.findbyid(res.body.idSymptom);

 if(userSymptom){
 if(res.body.answer=="s"){

}
//     else{
// //ver a lista de sintomas que estão como positivo na sessão e buscar doenças que ainda não foram perguntadas

//     }

exports.GetQuestion('', /*objeto encontrado na lógica*/);

 }

    res.end();
};

exports.resultsPage = (req, res) => {
    var options = { page: '', modal: '', title: '', next: '', footnote: '', content: '', percent: 0, diseases: [], raw: '', symptomId: '' };
    console.log("questionnaire-controller:\\results");
    options['page'] = 'layouts/entitled';
    options['title'] = 'Resultados';
    options['content'] = 'results';
    options.modal = 'results_modal';
    options.diseases = [
        { name: "Doença X", value: "90", id: "X_disease", information: "X é uma doença viral" },
        { name: "Doença Y", value: "80", id: "Y_disease", information: "Y é uma doença viral" },
        { name: "Doença Z", value: "70", id: "Z_disease", information: "Z é uma doença viral" },
        { name: "Doença W", value: "60", id: "W_disease", information: "W é uma doença viral" }
    ];
    // options.diseases = LISTA DE DOENÇAS AQUI
    res.render('./layouts/default', options);
};