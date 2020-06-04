"use strict";

const dbConf = require('../settings/config.json').db;
const MongoClient = require('mongodb').MongoClient;
// const session = require('express-session');
// const MongoDBStore = require('connect-mongodb-session')(session);

const client = new MongoClient(dbConf.url, {useUnifiedTopology: true});

// exports.sessionStore = new MongoDBStore({
//     uri: dbConf.url,
//     databaseName: dbConf.db,
//     collection: dbConf.colls.sessions
// });

// exports.sessionStore.on('error', err => console.log(err));

exports.colls = {};

/**
 * Connect to the database and warns any listeners
 * that the connection is ready
 */
exports.connect = (connectionReady) => {
    client.connect((err) => {
        if (err === null) {
            let db = client.db(dbConf.db);
            exports.colls.profiles = db.collection(dbConf.colls.profiles);
            exports.colls.sequences = db.collection(dbConf.colls.sequences);
            exports.colls.admins = db.collection(dbConf.colls.admins);
            exports.colls.diseases = db.collection(dbConf.colls.diseases);
            connectionReady();
        } else {
            console.log('Failed to connect to the db');
            console.log(err.stack);
        }
    });
}

exports.disconnect = (disconnected) => {
    if (client !== null && client.isConnected()) {
        client.close(() => {
            if (disconnected !== undefined)
                disconnected();
        });
    }
}