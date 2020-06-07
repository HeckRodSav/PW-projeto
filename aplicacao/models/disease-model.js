"use strict";

const colls = require('../DAO/db-connect.js').colls;

/**
 * Data object or transfer object
 *
 */
function Disease(id, name, information, restriction) {
    this.id = id;
    this.name = name;
    this.information = information;
    this.restriction = restriction;
}

/**
 * Validate the object by checking if all static values
 * are defined, non-null and non-empty
 */
Disease.prototype.isValid = function () {
    const reducer = (acc, cur) =>
        acc && cur !== undefined && cur !== null && cur.trim() != '';

    return [this.name, this.information, this.restriction]
        .reduce(reducer, true);
};

const DiseasesDAO = {};

/**
 * Converts a disease object to an object literal
 * It is necessary currently, but it will help
 * in the evolution of the db, if we decide
 * to change names later (decoupling between the layers)
 */
DiseasesDAO.toDoc = function (disease) {
    return {
        id: disease.id,
        name: disease.name,
        value: disease.value,
        information: disease.information,
        restriction: disease.restriction,
        symptoms: disease.symptoms
    }
}

/**
 * Convert a doc to a transfer object
 */
DiseasesDAO.toObj = function (doc) {
    const disease = new Disease();

    disease.id = doc.id;
    disease.name = doc.name;
    disease.value = doc.value;
    disease.information = doc.information;
    disease.restriction = doc.restriction;
    disease.symptoms = doc.symptoms;

    return disease;
}

DiseasesDAO.listAll = (sendResult) => {
    colls.diseases.find({},{projection: { _id: 0 } }).toArray((err, docs) => {
        // console.log("docs:",docs);
        var diseases = [];
        if (err === null) {
            docs.forEach(doc => {
                const disease = DiseasesDAO.toObj(doc);
                diseases.push(disease);
            });
        } else {
            console.log(err.stack);
        }
        sendResult(diseases);
    });
};

DiseasesDAO.findById = (id, sendResult) => {
    colls.diseases.findOne({ id: id }, (err, res) => {
        if (err !== null) {
            console.log(err.stack);
            sendResult(null);
        } else if (res === null) {
            sendResult(null);
        }
        else {
            const disease = DiseasesDAO.toObj(res);
            disease.id = res.id;
            sendResult(disease);
        }
    });
};

DiseasesDAO.findBySymptom = (symptomId, sendResult) => {
    colls.diseases.find({ "symptoms": symptomId }, { projection: { _id: 0 } }).toArray((err, docs) => {
        var diseases = [];
        if (err === null) {

            docs.forEach(doc => {
                const disease = DiseasesDAO.toObj(doc);
                diseases.push(disease);
            });
        } else {
            console.log(err.stack);
        }
        sendResult(diseases);
    });
};

DiseasesDAO.relatedSymptoms = (symptomId, sendResult) => {
    colls.diseases.find({ "symptoms": symptomId }, { projection: { _id: 0, symptoms: 1 } }).toArray((err, docs) => {
        var symptoms = [];
        if (err === null) {
            docs.forEach(doc => {
                symptoms = symptoms.concat(DiseasesDAO.toObj(doc).symptoms);
            });
            symptoms = Array.from(new Set(symptoms));
        } else {
            console.log(err.stack);
            // sendResult([]);
        }
        sendResult(symptoms);
    });
};

DiseasesDAO.preliminaryResult = (symptomIds, sendResult) => {
    var diseases = {};
    // console.log(symptomIds);
    colls.diseases.find({ "symptoms": { $in: symptomIds } }, { projection: { _id: 0 } }).toArray((err, docs) => {
        if (err === null) {
            ;
            docs.forEach(doc => {
                doc = DiseasesDAO.toObj(doc);
                if (!(doc.id in diseases)) {
                    diseases[doc.id] = doc;
                    diseases[doc.id].value = 0;
                }
            });
            symptomIds.forEach(symptomId => {
                for (var i in diseases) {
                    if (diseases[i].symptoms.includes(symptomId)) diseases[i].value++;
                }
            });
            for (var i in diseases) {
                diseases[i].value = Math.round(diseases[i].value / diseases[i].symptoms.length * 100);
            }
        } else {
            console.log(err.stack);
        }
        diseases = Object.values(diseases).sort((a, b) => (a.value == b.value ? a.name.toUpperCase() < a.name.toUpperCase() : a.value - b.value)).reverse();
        sendResult(diseases);
    });
};



module.exports = {
    Disease: Disease,
    DiseasesDAO: DiseasesDAO
}
