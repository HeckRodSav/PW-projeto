"use strict";

const colls = require('../DAO/db-connect.js').colls;

/**
 * Data object or transfer object
 *
 */
function Symptoms(name, information, restriction) {
    this.id = null;
    this.name = name;
    this.information = information;
    this.restriction = restriction;
}

/**
 * Validate the object by checking if all static values
 * are defined, non-null and non-empty
 */
Symptoms.prototype.isValid = function() {
    const reducer = (acc, cur) =>
        acc && cur !== undefined && cur !== null && cur.trim() != '';

    return [this.name, this.information, this.restriction]
        .reduce(reducer, true);
};

const SymptomsDAO = {};

/**
 * Converts a symptoms object to an object literal
 * It is necessary currently, but it will help
 * in the evolution of the db, if we decide
 * to change names later (decoupling between the layers)
 */
SymptomsDAO.toDoc = function (symptoms) {
    return {
        id: symptoms.id,
        name: symptoms.name,
        information: symptoms.information,
        restriction: symptoms.restriction
    }
}

/**
 * Convert a doc to a transfer object
 */
SymptomsDAO.toObj = function(doc) {
    const symptoms = new Symptoms();

    symptoms.id = doc.id;
    symptoms.name = doc.name;
    symptoms.information = doc.information;
    symptoms.restriction = doc.restriction;

    return symptoms;
}

SymptomsDAO.listAll = (sendResult) => {
    colls.symptoms.find({}, {projection: {_id: 0}}).toArray((err, docs) => {
        if (err === null) {
            const symptoms = [];

            docs.forEach(doc => {
                const symptoms = SymptomsDAO.toObj(doc);

                symptoms.id = doc.id;
                symptoms.push(symptoms);
            });
            sendResult(symptoms);
        } else {
            console.log(err.stack);
            sendResult([]);
        }
    });
};

SymptomsDAO.findById = (id, sendResult) => {
    colls.symptoms.findOne({id: id}, (err, res) => {
        if (err !== null) {
            console.log(err.stack);
            sendResult(null);
        } else {
            const symptoms = SymptomsDAO.toObj(res);
            symptoms.id = res.id;
            sendResult(symptoms);
        }
    });
};

module.exports = {
    Symptoms: Symptoms,
    SymptomsDAO: SymptomsDAO
}
