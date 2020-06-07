"use strict";

const symptomModel = require('../models/symptom-model.js');
const diseaseModel = require('../models/disease-model.js');

// var options = { page: '', modal: '', title: '', next: '', footnote: '', content: '', percent: 0, diseases: [], raw: '' , symptomId: '', symptomNames: '' };
const first_symptoms = ["S127", "S208", "S122", "S124", "S073", "S088", "S308", "S291", "S286", "S154"];

exports.nextQuestion = (sessionSymptoms, deniedSymptoms, queueSymptoms, sendResult) => {
    console.log("sessionSymptoms:", sessionSymptoms);
    console.log("deniedSymptoms:", deniedSymptoms);
    diseaseModel.DiseasesDAO.preliminaryResult(sessionSymptoms, ret => {
        var choosen = null;
        for (var i in ret) {
            for (var j in ret[i].symptoms) {
                if (!sessionSymptoms.includes(ret[i].symptoms[j]) && !queueSymptoms.includes(ret[i].symptoms[j]) && !deniedSymptoms.includes(ret[i].symptoms[j])) choosen = ret[i].symptoms[j];
                if (choosen) break;
            }
            if (choosen) break;
        }
        if (choosen) sendResult(choosen);
        else {
            symptomModel.SymptomsDAO.listAll(symptomsist => {
                for (var k in symptomsist) {
                    var temp = symptomsist[k].id;
                    if (!sessionSymptoms.includes(temp) && !queueSymptoms.includes(temp) && !deniedSymptoms.includes(temp)) choosen = temp;
                    if (choosen) break;
                }
                sendResult(choosen);
            })
        }
    });
};

exports.Answer = (req, res) => {
    var options = { page: '', modal: '', title: '', next: '', footnote: '', content: '', percent: 0, diseases: [], raw: '', symptomId: '', symptomNames: '' };
    options['page'] = 'layouts/question';
    options['question'] = 'symptom';

    // console.log('body:', req.body);

    //primeiro, puxa o que tem guardado na localstorage
    let storageContent = req.session.healthweb;
    if (!storageContent.max){
        storageContent.max = 309;
        symptomModel.SymptomsDAO.listAll(list => {
            storageContent.max = list.length + 5;
        });
    }
    if (!storageContent.count) storageContent.count = 1;

    options.percent = Math.round(100 * storageContent.count / storageContent.max);

    // console.log('storageContent before:', storageContent);

    let aux = false;

    if (!("sex" in storageContent) && !req.body.sex) {
        options['question'] = 'sex';
        options['title'] = 'Sexo biológico*.';
        options['footnote'] = 'sex_footnote';
        aux = true;
    } else {
        if (req.body.sex) storageContent.sex = req.body.sex;
        if (!("age" in storageContent) && !req.body.age) {
            options['question'] = 'age';
            options['title'] = 'Sua idade em anos.';
            aux = true;
        } else {
            if (req.body.age) storageContent.age = req.body.age;
            if (!("height" in storageContent) && !req.body.height) {
                options['question'] = 'height';
                options['title'] = 'Sua altura em m.';
                aux = true;
            } else {
                if (req.body.height) storageContent.height = req.body.height;
                if (!("weight" in storageContent) && !req.body.weight) {
                    options['question'] = 'weight';
                    options['title'] = 'Seu peso em kg.';
                    aux = true;
                } else {
                    if (req.body.weight) storageContent.weight = req.body.weight;
                    if (!storageContent.symptomsList) storageContent.symptomsList = []
                    if (!storageContent.negativeSymptomsList) storageContent.negativeSymptomsList = []
                    //agora, a lógica que verifica a resposta e devolve uma nova pergunta

                    if (req.body.idSymptom) {

                        if (req.body.answer == "s") storageContent.symptomsList.push(req.body.idSymptom);
                        else storageContent.negativeSymptomsList.push(req.body.idSymptom);

                        diseaseModel.DiseasesDAO.preliminaryResult(storageContent.symptomsList, parcialResult => {

                            let preliminary_aux = true;

                            if(parcialResult) if(parcialResult.length > 0) {
                                if (parcialResult[0].value >= 80) { //make the decision to continue asking or give a disease
                                preliminary_aux = false;
                                res.redirect('/result'); //go to result page
                                res.end();
                                }
                                // else console.log("[0].v:", parcialResult[0].value);
                            }
                            if (preliminary_aux) {
                                // console.log("entrou no else")
                                console.log('storageContent before:', storageContent);
                                // adiciona uma nova questão na lista a perguntar
                                exports.nextQuestion(storageContent.symptomsList, storageContent.negativeSymptomsList, storageContent.questionList, nextSymptom => {

                                    storageContent.questionList.push(nextSymptom);

                                    symptomModel.SymptomsDAO.findById(storageContent.questionList.shift(), nextQuestionToPresent => {
                                        // options['question'] = 'symptom';
                                        options['title'] = 'Você apresentou ' + nextQuestionToPresent.name + '?';
                                        options.symptomId = nextQuestionToPresent.id;
                                        storageContent.count++;
                                        res.render('./layouts/default', options);
                                        res.end();
                                    });
                                });
                            }
                        });
                    } else {
                        storageContent.questionList = first_symptoms;
                        // console.log('questionlist', storageContent.questionList);
                        let temp = storageContent.questionList.shift()
                        // console.log('temp:', temp, typeof (temp));
                        // console.log('the list without the element', storageContent.questionList);
                        symptomModel.SymptomsDAO.findById(temp, nextQuestionToPresent => {
                            // console.log('nextquestion', nextQuestionToPresent);
                            options['title'] = 'Você apresentou ' + nextQuestionToPresent.name + '?';
                            options.symptomId = nextQuestionToPresent.id;
                            storageContent.count++;
                            res.render('./layouts/default', options);
                            res.end();
                        });
                    }

                }
            }
        }
    }
    if (aux) {
        storageContent.count++;
        res.render('./layouts/default', options);
        res.end();
    }
};

exports.resultsPage = (req, res) => {
    let storageContent = req.session.healthweb;

    if (!storageContent.symptomsList) res.redirect('/');

    diseaseModel.DiseasesDAO.preliminaryResult(storageContent.symptomsList, parcialResult => {
        parcialResult = parcialResult.slice(0, 5); // take
        var options = { page: '', modal: '', title: '', next: '', footnote: '', content: '', percent: 0, diseases: [], raw: '', symptomId: '', symptomNames: '' };
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
    });
};