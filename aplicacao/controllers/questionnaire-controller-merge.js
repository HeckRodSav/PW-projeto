"use strict";

const symptomModel = require('../models/symptom-model.js');
const diseaseModel = require('../models/disease-model.js');
const storageKey = "healthWebUserSession";


// var options = { page: '', modal: '', title: '', next: '', footnote: '', content: '', percent: 0, diseases: [], raw: '' , symptomId: ''};

exports.GetQuestion = (req, res) => {
    //retorna a view montando a questão com o objeto de sintoma que esse controler recebe no res

};

const options_void = { page: '', modal: '', title: '', next: '', footnote: '', content: '', percent: 0, diseases: [], raw: '', symptomId: '_' };
let storageContent = {}

exports.Answer = (req, res) => {
    var options = { page: '', modal: '', title: '', next: '', footnote: '', content: '', percent: 0, diseases: [], raw: '', symptomId: '' };;
    options['page'] = 'layouts/question';

    console.log('body:', req.body);
    console.log('storageContent:', storageContent);


    if (!("sex" in storageContent) && !req.body.sex) {
        options['question'] = 'sex';
        options['title'] = 'Sexo biológico*.';
        options['footnote'] = 'sex_footnote';
        options.next = 'age';
        options.percent = 5;
    } else {
        if (req.body.sex) storageContent.sex = req.body.sex;
        if (!("age" in storageContent) && !req.body.age) {
            options['question'] = 'age';
            options['title'] = 'Sua idade em anos.';
            options.next = 'height';
            options.percent = 10;
        } else {
            if (req.body.age) storageContent.age = req.body.age;
            if (!("height" in storageContent) && !req.body.height) {
                options['question'] = 'height';
                options['title'] = 'Sua altura em m.';
                options.next = 'weight';
                options.percent = 15;
            } else {
                if (req.body.height) storageContent.height = req.body.height;
                if (!("weight" in storageContent) && !req.body.weight) {
                    options['question'] = 'weight';
                    options['title'] = 'Seu peso em kg.';
                    options.next = 'symptom';
                    options.percent = 20;
                } else {
                    if (req.body.weight) storageContent.weight = req.body.weight;
                    options['question'] = 'symptom';
                    options['title'] = 'Você apresentou sintôma X?';
                    options.next = 'results';
                    options.percent = 25;
                    options.symptomId = 'test';
                }
            }
        }
    }


    // }

    res.render('./layouts/default', options);
    //agora, a lógica que verifica a resposta e devolve uma nova pergunta
    // const userSymptom = symptomModel.findbyid(res.body.idSymptom);

    // if (userSymptom) {
    //     if (res.body.answer == "s") {

    //     }
    //     //     else{
    //     // //ver a lista de sintomas que estão como positivo na sessão e buscar doenças que ainda não foram perguntadas

    //     //     }

    //     exports.GetQuestion('');

    // }

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