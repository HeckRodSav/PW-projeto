"use strict";

const symptomModel = require('../models/symptom-model.js');
const diseaseModel = require('../models/disease-model.js');


// var options = { page: '', modal: '', title: '', next: '', footnote: '', content: '', percent: 0, diseases: [], raw: '' , symptomId: ''};

exports.GetQuestion = (req, res) => {
//fazer a página de questão renderizar a questão com este objeto abaixo
    const nextQuestionToPresent = diseaseModel.nextQuestion(req.flash.symptomsList);
};


exports.Answer = (req, res) => {
    console.log('body:', req.body);

    //primeiro, puxa o que tem guardado na localstorage
    let storageContent = req.session.flash;

    if (!storageContent) res.redirect('/');

    //agora, a lógica que verifica a resposta e devolve uma nova pergunta
    const userSymptom = symptomModel.findbyid(req.body.idSymptom);

    if (userSymptom) {
        if (req.body.answer == "s") {
            storageContent.symptomsList.push(userSymptom.id);
        }

        //make the decision to continue asking or give a disease
        let parcialResult = diseaseModel.preliminaryREsult(storageContent.symptomsList);

        if (parcialResult[0].value >= 80) res.redirect('/resultsPage');
        else res.redirect('/GetQuestion');
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