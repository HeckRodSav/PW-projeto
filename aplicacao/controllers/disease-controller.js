"use strict";

const model = require('../models/disease-model.js');
const symptomModel = require('../models/symptom-model.js');

exports.diseaseListPage = (req, res) => {
    var options = { page: '', modal: '', title: '', next: '', footnote: '', content: '', percent: 0, diseases: [], raw: '', symptomId: '' };
    options['page'] = 'layouts/entitled';
    options['title'] = 'Doenças';
    options.content = 'layouts/disease_list';
    model.DiseasesDAO.listAll((diseases) => {
        options.diseases = diseases;
        res.render('./layouts/default', options);
    });
};

exports.diseasePage = (req, res, next) => {
    var options = { page: '', modal: '', title: '', next: '', footnote: '', content: '', percent: 0, diseases: [], raw: '', symptomId: '' };
    console.log(req.params.code);
    var symptomNames = [];
    model.DiseasesDAO.findById(req.params.code, disease => {
        if (disease !== null) {
            disease.symptoms.forEach(symtom => {

            });
            console.log(disease);
            options['page'] = 'layouts/entitled';
            options.diseases = [disease];
            options['title'] = options.diseases[0].name;
            options.raw = options.diseases[0].information;
            res.render('./layouts/default', options);
        }
        else next()
    });
};

