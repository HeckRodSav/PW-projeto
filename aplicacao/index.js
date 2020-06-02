"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');

// inicializar app express
const app = express();
const liveReloadServer = livereload.createServer();




var watcher = liveReloadServer.watch(__dirname);

watcher.on("change", (arg) => {
    console.log(`Change: ${new Date().toLocaleString()} - ${arg.replace(__dirname, "")}`);
});



let port = 4519;
app.listen(port, () => {
    console.log('Servidor em execução port' + port);
});

app.use(connectLivereload()); //