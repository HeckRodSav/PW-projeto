"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const process = require('process');

const livereload = (() => {
    var ret = null;
    try { ret = require('livereload');}
    catch (e) {};
    return ret;
    })();

const connectLivereload = (() => {
    var ret = null;
    try { if (livereload) ret = require('connect-livereload');}
    catch (e) {};
    return ret;
    })();

// inicializar app express
const app = express();

if(livereload !== null){
    const liveReloadServer = livereload.createServer();
    const watcher = liveReloadServer.watch(__dirname);
    watcher.on("change", (arg) => {
        console.log(`Change: ${new Date().toLocaleString()} - ${arg.replace(__dirname, "")}`);
    });
}

const port = 4519;
app.listen(port, () => {
    console.log(`ervidor em execução port ${port}`);
});

if(connectLivereload !== null){
    app.use(connectLivereload());
}






// error handling middleware
app.use((err, req, res, next) => {
	console.log(err);
	console.error(err.stack);
	// res.status(500).sendFile(ERROR_PATH);
});

// default route after everything fails
app.use('/', (req, res) => {
	// res.status(404).sendFile(NOT_FOUND_PATH);
});

// register exitting log
process.on('exit', (code) => {
	console.log(`\nServer exiting with code ${code}`);
});

process.on('SIGINT', process.exit);
process.on('SIGUSR2', process.exit); //Salvar com nodemon
