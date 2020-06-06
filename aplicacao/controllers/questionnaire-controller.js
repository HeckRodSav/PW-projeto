"use strict";

const symptomModel = require('../models/symptom-model.js');
const diseaseModel = require('../models/disease-model.js');


// var options = { page: '', modal: '', title: '', next: '', footnote: '', content: '', percent: 0, diseases: [], raw: '' , symptomId: ''};
const first_symptoms = ["S127", "S208", "S122", "S124", "S073", "S088", "S308", "S291", "S016", "S286", "S155"];

exports.Answer = (req, res) => {
    var options = { page: '', modal: '', title: '', next: '', footnote: '', content: '', percent: 0, diseases: [], raw: '', symptomId: '' };;
    options['page'] = 'layouts/question';

    console.log('body:', req.body);

    //primeiro, puxa o que tem guardado na localstorage
    let storageContent = req.session;

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
                    if (!storageContent.symptomsList) storageContent.symptomsList = []
                    if (!storageContent.negativeSymptomsList) storageContent.negativeSymptomsList = []
                    //agora, a lógica que verifica a resposta e devolve uma nova pergunta
                    const userSymptom = symptomModel.SymptomsDAO.findById(req.body.idSymptom);

                    if (userSymptom) {
                        if (req.body.answer == "s") storageContent.symptomsList.push(userSymptom.id);
                        else storageContent.negativeSymptomsList.push(userSymptom.id);

                        //make the decision to continue asking or give a disease
                        let parcialResult = diseaseModel.preliminaryResult(storageContent.symptomsList);

                        if (parcialResult[0].value >= 80) res.redirec('/result'); //go to result page

                        //adiciona uma nova questão na lista a perguntar
                        req.session.questionList.push(diseaseModel.nextQuestion(req.symptomsList, req.session.negativeSymptomsList));

                        let nextQuestionToPresent = symptomModel.SymptomsDAO.findById(req.session.questionList.shift());

                        options['question'] = 'symptom';
                        options['title'] = 'Você apresentou ' + nextQuestionToPresent.name + '?';
                        options.next = 'results';
                        options.percent = 25;
                        options.symptomId = nextQuestionToPresent.id;

                    }
                    else {
                        req.session.questionList = first_symptoms;
console.log('questionlist', req.session.questionList);
console.log('first element', req.session.questionList.shift());
console.log('the list without the element', req.session.questionList);


                        let nextQuestionToPresent = symptomModel.SymptomsDAO.findById(req.session.questionList.shift());
console.log('nextquestion', nextQuestionToPresent);

                        options['question'] = 'symptom';
                        options['title'] = 'Você apresentou ' + nextQuestionToPresent.name + '?';
                        options.next = 'results';
                        options.percent = 25;
                        options.symptomId = nextQuestionToPresent.id;


                    } //add the first symptom to ask logic

                }
            }
        }
    }

    res.render('./layouts/default', options);

    res.end();
};

exports.resultsPage = (req, res) => {
    let storageContent = req.session;

    if (!storageContent.symptomsList) res.redirec('/');

    let parcialResult = diseaseModel.preliminaryResult(storageContent.symptomsList).slice(0, 5); // take

    var options = { page: '', modal: '', title: '', next: '', footnote: '', content: '', percent: 0, diseases: [], raw: '', symptomId: '' };
    console.log("questionnaire-controller:\\results");
    options['page'] = 'layouts/entitled';
    options['title'] = 'Resultados';
    options['content'] = 'results';
    options.modal = 'results_modal';
    options.diseases = parcialResult;
    // options.diseases = [
    //     { name: "Doença X", value: "90", id: "X_disease", information: "X é uma doença viral" },
    //     { name: "Doença Y", value: "80", id: "Y_disease", information: "Y é uma doença viral" },
    //     { name: "Doença Z", value: "70", id: "Z_disease", information: "Z é uma doença viral" },
    //     { name: "Doença W", value: "60", id: "W_disease", information: "W é uma doença viral" }
    // ];
    // options.diseases = LISTA DE DOENÇAS AQUI
    res.render('./layouts/default', options);
};