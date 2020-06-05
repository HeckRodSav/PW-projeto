"use strict";

const colls = require('../DAO/db-connect.js').colls;

/**
 * Data object or transfer object
 *
 */
function Symptom(name, description, restriction) {
    this.id = null;
    this.name = name;
    this.description = description;
    this.restriction = restriction;
}

/**
 * Validate the object by checking if all static values
 * are defined, non-null and non-empty
 */
Symptom.prototype.isValid = function() {
    const reducer = (acc, cur) =>
        acc && cur !== undefined && cur !== null && cur.trim() != '';

    return [this.name, this.description, this.restriction]
        .reduce(reducer, true);
};

const SymptomsDAO = {};

/**
 * Converts a disease object to an object literal
 * It is necessary currently, but it will help
 * in the evolution of the db, if we decide
 * to change names later (decoupling between the layers)
 */
SymptomsDAO.toDoc = function (disease) {
    return {
        id: disease.id,
        name: disease.name,
        value: disease.value,
        description: disease.description,
        restriction: disease.restriction
    }
}

/**
 * Convert a doc to a transfer object
 */
SymptomsDAO.toObj = function(doc) {
    const disease = new Symptom();

    disease.id = doc.id;
    disease.name = doc.name;
    disease.value = doc.value;
    disease.description = doc.description;
    disease.restriction = doc.restriction;

    return disease;
}

SymptomsDAO.insert = (Symptom, sendStatus) => {
    nextId((id) => {
        if (id === null) {
            console.log('Failed to generate a disease id');
            sendStatus(false);
        } else {
            Symptom.id = id;
            colls.diseases.insertOne(SymptomsDAO.toDoc(Symptom),
                (err, res) => {
                    if (err === null) {
                        sendStatus(res.insertedCount > 0);
                    } else {
                        console.log(err.stack);
                        sendStatus(false);
                    }
                }
            );
        }
    });
};

SymptomsDAO.listAll = (sendResult) => {
    colls.diseases.find({}, {projection: {_id: 0}}).toArray((err, docs) => {
        if (err === null) {
            const diseases = [];

            docs.forEach(doc => {
                const disease = SymptomsDAO.toObj(doc);

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

SymptomsDAO.findById = (id, sendResult) => {
    colls.diseases.findOne({id: id}, (err, res) => {
        if (err !== null) {
            console.log(err.stack);
            sendResult(null);
        } else {
            const disease = SymptomsDAO.toObj(res);
            disease.id = res.id;
            sendResult(disease);
        }
    });
};

SymptomsDAO.update = (disease, sendStatus) => {
    colls.diseases.replaceOne(
        {id: disease.id},
        SymptomsDAO.toDoc(disease),
        (err, res) => {
            if (err === null) {
                sendStatus(res.matchedCount > 0);
            } else {
                console.log(err.stack);
                sendStatus(false);
            }
        }
    );
};

module.exports = {
    Symptom: Symptom,
    SymptomsDAO: SymptomsDAO
}
