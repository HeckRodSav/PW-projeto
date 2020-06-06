"use strict";

const model = require('../models/disease-model.js');
const symptomModel = require('../models/symptom-model.js');

exports.diseaseListPage = (req, res) => {
    var options = { page: '', modal: '', title: '', next: '', footnote: '', content: '', percent: 0, diseases: [], raw: '', symptomId: '', symptomNames: '' };
    options['page'] = 'layouts/entitled';
    options['title'] = 'Doenças';
    options.content = 'layouts/disease_list';
    model.DiseasesDAO.listAll((diseases) => {
        options.diseases = diseases;
        res.render('./layouts/default', options);
    });
};

exports.diseasePage = (req, res, next) => {
    var options = { page: '', modal: '', title: '', next: '', footnote: '', content: '', percent: 0, diseases: [], raw: '', symptomId: '', symptomNames: '' };
    // console.log(req.params.code);
    model.DiseasesDAO.findById(req.params.code, disease => {
        if (disease !== null) {
            symptomModel.SymptomsDAO.listNames(disease.symptoms, symptomNames => {
                // console.log(symptomNames);
                // console.log(disease);
                options.symptomNames = symptomNames;
                options['page'] = 'layouts/entitled';
                options.diseases = [disease];
                options['title'] = options.diseases[0].name;
                options.raw = options.diseases[0].information;
                res.render('./layouts/default', options);
            });
        }
        else next()
    });
};

