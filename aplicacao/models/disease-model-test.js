"use strict";

const dbConnect = require('../DAO/db-connect');
const model = require('./disease-model');

function testFindBySymptom() {
    const symptomId = 'S006';

    dbConnect.connect(() => {
        model.DiseasesDAO.relatedSymptoms(symptomId, (result) => {
            console.log('Result: ', result);
            dbConnect.disconnect();
        });
    });
}

testFindBySymptom();