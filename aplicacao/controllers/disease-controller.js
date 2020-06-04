"use strict";

const model = require('../models/disease-model.js');

exports.index = (req, res) => {
    exports.list(req, res);
};

exports.list = (req, res) => {
    model.DiseasesDAO.listAll(diseases =>
        res.render('list', {diseases: diseases}));
};

exports.diseaseList = (req, res) => {
    var options = { page: '', modal: '', title: '', page: '', 'next': '', footnote: '', content: '', percent: 0, diseases: [] };
    options['page'] = 'layouts/entitled';
    options['title'] = 'Doenças';
    options.content = 'diseases';
    model.DiseasesDAO.listAll( (diseases) => {
        options.diseases = diseases;
        res.render('./layouts/default', options);
    });
};

exports.addForm = (req, res) => {
    res.render('add', {disease: new model.UserProfile()});
};

const getField = (req, field) =>
     (req.fields[field]) ? req.fields[field].pop() : null;

const hasPicture = function(req) {
    return req.files['picture'] !== undefined
};

exports.addFormProcessing = (req, res) => {
    const saveProfile = function (disease) {
        model.DiseasesDAO.insert(disease, (status) => {
            if (status)
                res.render('status', {type: 'user_add_success'});
            else
            res.render('status', {type: 'user_add_error'});
        });
    };

    const disease = new model.UserProfile();

    disease.name = getField(req, 'name');
    disease.information = getField(req,'information');
    disease.restriction = getField(req,'restriction');

    if (disease.isValid()) {
        if (hasPicture(req)) {
            saveProfilePicture(req, picture => {
                if (picture !== null) {
                    disease.picture = picture;
                    saveProfile(disease);
                } else {
                    res.render('status', {type: 'user_add_error'});
                }
            });
        } else {
            saveProfile(disease);
        }
    } else {
        res.render('status', {type: 'user_add_error'});
    }
};

exports.details = (req, res) => {
    const id = parseInt(req.params.id);

    model.DiseasesDAO.findById(id, disease => {
        if (disease !== null) {
            res.render('disease', disease);
        } else {
            res.render('status', {
                type: 'unknown_user',
                params: {
                    id: req.params.id
                }
            });
        }
    });
};

exports.editForm = (req, res) => {
    const id = parseInt(req.params.id);

    model.DiseasesDAO.findById(id, disease => {
        if (disease !== null) {
            res.render('edit', {disease: disease});
        } else {
            res.render('status', {type: 'unknown_user'});
        }
    });
}

exports.editFormProcessing = (req, res) => {
    const saveProfile = function(disease) {
        model.DiseasesDAO.update(disease, status => {
            if (status) {
                req.session.flash = {
                    type: 'edit-success'
                };
            } else {
                req.session.flash = {
                    type: 'edit-error'
                }
            }
            res.redirect(`disease/${disease.id}`);
        });
    };

    const disease = new model.UserProfile();

    disease.id = parseInt(getField(req, 'id'));
    disease.name = getField(req, 'name');
    disease.information = getField(req,'information');
    disease.restriction = getField(req,'restriction');


    if (disease.isValid()) {
        if (hasPicture(req)) {
            saveProfilePicture(req, picture => {
                if (picture !== null) {
                    disease.picture = picture;
                    saveProfile(disease);
                } else {
                    res.render('status', {type: 'user_add_error'});
                }
            });
        } else {
            saveProfile(disease);
        }
    } else {
        res.render('stats', {type: 'invalid_form'});
    }
};