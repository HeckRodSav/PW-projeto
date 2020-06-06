"use strict";

const dbConnect = require('../DAO/db-connect');
const model = require('./symptom-model');

function testFindById() {
    const symptomId = 'S127';

    dbConnect.connect(() => {
        console.log("testFindById:");
        model.SymptomsDAO.findById(symptomId, (result) => {
            console.log('Result: ', result);
            dbConnect.disconnect();
        });
    });
}

testFindById();


// process.on('exit', (code) => {
//     console.log(`\nServer exiting with code ${code}`);
//     dbConnect.disconnect(() => {
//         console.log('Database disconnected');
//     });
// });