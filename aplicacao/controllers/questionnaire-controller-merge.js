"use strict";

const symptomModel = require('../models/symptom-model.js');
const diseaseModel = require('../models/disease-model.js');
const storageKey = "healthWebUserSession";


// var options = { page: '', modal: '', title: '', next: '', footnote: '', content: '', percent: 0, diseases: [], raw: '' , symptomId: ''};

exports.GetQuestion = (req, res) => {
    //retorna a view montando a questão com o objeto de sintoma que esse controler recebe no res

};


exports.Answer = (req, res) => {
    var options = { page: '', modal: '', title: '', next: '', footnote: '', content: '', percent: 0, diseases: [], raw: '', symptomId: '' };

    console.log('body:', req.body);

    //primeiro, puxa o que tem guardado na localstorage
    let storageContent = localStorage.getItem(storageKey);
    if (storageContent) {
        storageContent = JSON.parse(storageContent);
        if(!("sex" in storageContent)){
            if( Object.keys(storageContent).length > 0)
            {
                localStorage.removeItem(storageKey);
                res.redirect('/');
            }
            else
            {
                options['page'] = 'layouts/question';
                options['question'] = 'sex';
                options['title'] = 'Sexo biológico*.';
                options['footnote'] = 'sex_footnote';
                options.next = 'age';
                options.percent = 5;
                res.render('./layouts/default', options);
            }
        }
        if(!("weight" in storageContent)){
            if(!("height" in storageContent)){
                if(!("age" in storageContent)){
                }
            }
        }
    }
    else

    //agora, a lógica que verifica a resposta e devolve uma nova pergunta
    const userSymptom = symptomModel.findbyid(res.body.idSymptom);

    if (userSymptom) {
        if (res.body.answer == "s") {

        }
        //     else{
        // //ver a lista de sintomas que estão como positivo na sessão e buscar doenças que ainda não foram perguntadas

        //     }

        exports.GetQuestion('');

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