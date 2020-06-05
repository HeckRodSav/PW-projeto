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
Disease.prototype.isValid = function() {
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
        restriction: disease.restriction
    }
}

/**
 * Convert a doc to a transfer object
 */
DiseasesDAO.toObj = function(doc) {
    const disease = new Disease();

    disease.id = doc.id;
    disease.name = doc.name;
    disease.value = doc.value;
    disease.information = doc.information;
    disease.restriction = doc.restriction;

    return disease;
}

DiseasesDAO.listAll = (sendResult) => {
    colls.diseases.find({}, {projection: {_id: 0}}).toArray((err, docs) => {
        if (err === null) {
            const diseases = [];

            docs.forEach(doc => {
                const disease = DiseasesDAO.toObj(doc);

                disease.id = doc.id;
                diseases.push(disease);
            });
            sendResult(diseases);
        } else {
            console.log(err.stack);
            sendResult([]);
        }
    });
};

DiseasesDAO.findById = (id, sendResult) => {
    colls.diseases.findOne({id: id}, (err, res) => {
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

module.exports = {
    Disease: Disease,
    DiseasesDAO: DiseasesDAO
}
