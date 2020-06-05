"use strict";

const model = require('../models/disease-model.js');

exports.diseaseListPage = (req, res) => {
    var options = { page: '', modal: '', title: '', page: '', 'next': '', footnote: '', content: '', percent: 0, diseases: [], raw: '' };
    options['page'] = 'layouts/entitled';
    options['title'] = 'Doenças';
    options.content = 'layouts/disease_list';
    model.DiseasesDAO.listAll( (diseases) => {
        options.diseases = diseases;
        res.render('./layouts/default', options);
    });
};

exports.diseasePage = (req, res, next) => {
    var options = { page: '', modal: '', title: '', page: '', 'next': '', footnote: '', content: '', percent: 0, diseases: [], raw: '' };
    console.log(req.params.code);
    model.DiseasesDAO.findById(req.params.code, diseases =>{
        if (diseases !== null) {
            console.log(diseases);
            options['page'] = 'layouts/entitled';
            options.diseases = [diseases];
            options['title'] = options.diseases[0].name;
            options.raw = options.diseases[0].information;
            res.render('./layouts/default', options);
        }
        else next()
    });
};

