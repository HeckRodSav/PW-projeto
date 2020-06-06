"use strict";

const dbConnect = require('../DAO/db-connect');
const model = require('./disease-model');

// function testFindBySymptom() {
//     const symptomId = 'S001';

//     dbConnect.connect(() => {
//         console.log("testFindBySymptom:");
//         model.DiseasesDAO.findBySymptom(symptomId, (result) => {
//             console.log('Result: ', result);
//             dbConnect.disconnect();
//         });
//     });
// }

function testPreliminaryResults() {
    const symptomIds = ['S006','S005','S004'];

    dbConnect.connect(() => {
        console.log("testPreliminaryResults:");
        model.DiseasesDAO.preliminaryResult(symptomIds, (result) => {
            console.log('Result: ', result);
            dbConnect.disconnect();
        });
    });
}

function testFindById() {
    const id = 'D001';

    dbConnect.connect(() => {
        console.log("testFindById:");
        model.DiseasesDAO.findById(id, (result) => {
            console.log('Result: ', result);
            dbConnect.disconnect();
        });
    });
}

// testFindBySymptom();

testFindById();

// process.on('exit', (code) => {
//     console.log(`\nServer exiting with code ${code}`);
//     dbConnect.disconnect(() => {
//         console.log('Database disconnected');
//     });
// });