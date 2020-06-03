"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const process = require('process');

const livereload = (() => {
    var ret = null;
    try { ret = require('livereload'); }
    catch (e) { };
    return ret;
})();

const connectLivereload = (() => {
    var ret = null;
    try { if (livereload) ret = require('connect-livereload'); }
    catch (e) { };
    return ret;
})();

if (livereload !== null) {
    const liveReloadServer = livereload.createServer();
    const watcher = liveReloadServer.watch(__dirname);
    console.log(__dirname);
    watcher.on("change", (arg) => {
        console.log(`Change: ${new Date().toLocaleString()} - ${arg.replace(__dirname, "")}`);
    });
}

// inicializar app express
const app = express();

// set ejs as template engine
app.set('view engine', 'ejs');

// set the default view lookup folder
app.set('views', path.resolve(__dirname, 'views'));

const port = 4519;
app.listen(port, () => {
    console.log(`Servidor em execução port ${port}`);
});

if (connectLivereload !== null) {
    app.use(connectLivereload());
}

// static route
app.use('/static', express.static(path.join(__dirname, 'static')));

app.use('/:page/', (req, res, next) => {
    console.log(`\\${req.params.page}`);
    const page_list = ['home', 'sex', 'age', 'height', 'weight', 'symptom', 'results', 'about', 'terms', 'diseases','meaning'];
    const modal_list = { 'home': 'home_modal', 'diesase': 'diesase_modal' }


    if (!page_list.includes(req.params.page)) next();
    else {
        var options = { page: '', modal: '', title: '', page: '', 'next': '', footnote: '', content: '', percent: 0, diseases: [] };
        switch (req.params.page) {
            case 'sex':
                options['page'] = 'shared/question';
                options['question'] = 'sex';
                options['title'] = 'Sexo biológico*.';
                options['footnote'] = 'sex_footnote';
                options.next = 'age';
                options.percent = 5;
                break;
            case 'age':
                options['page'] = 'shared/question';
                options['question'] = 'age';
                options['title'] = 'Sua idade em anos.';
                options.next = 'height';
                options.percent = 10;
                break;
            case 'height':
                options['page'] = 'shared/question';
                options['question'] = 'height';
                options['title'] = 'Sua altura em m.';
                options.next = 'weight';
                options.percent = 15;
                break;
            case 'weight':
                options['page'] = 'shared/question';
                options['question'] = 'weight';
                options['title'] = 'Seu peso em kg.';
                options.next = 'symptom';
                options.percent = 20;
                break;
            case 'symptom':
                options['page'] = 'shared/question';
                options['question'] = 'symptom';
                options['title'] = 'Você apresentou sintôma X?';
                options.next = 'results';
                options.percent = 25;
                break;
            case 'results':
                options['page'] = 'shared/entitled';
                options['title'] = 'Resultados';
                options['content'] = 'results';
                options.diseases = [
                    { name: "Doença X", value: "90", tag: "X_disease" },
                    { name: "Doença Y", value: "80", tag: "Y_disease" },
                    { name: "Doença Z", value: "70", tag: "Z_disease" },
                    { name: "Doença W", value: "60", tag: "W_disease" }
                ];
                options.modal = 'results_modal';
                break;
            case 'about':
                options['page'] = 'shared/entitled';
                options['title'] = 'Sobre';
                options.content = 'about';
                break;
            case 'terms':
                options['page'] = 'shared/entitled';
                options['title'] = 'Termos de uso';
                options.content = 'terms';
                break;
            case 'meaning':
                options['page'] = 'shared/entitled';
                options['title'] = 'O que significam estes resultados';
                options.content = 'meaning';
                break;
            case 'diseases':
                options['page'] = 'shared/entitled';
                options['title'] = 'Doenças';
                options.content = 'diseases';
                options.diseases = [
                    { name: "Doença X", value: "", tag: "X_disease" },
                    { name: "Doença Y", value: "", tag: "Y_disease" },
                    { name: "Doença Z", value: "", tag: "Z_disease" },
                    { name: "Doença W", value: "", tag: "W_disease" }
                ];
                break;
            default:
                console.log("in default");
                options.page = req.params.page;
                options.modal = (modal_list[req.params.page] !== undefined ? modal_list[req.params.page] : '');
        }
        console.log(options);
        res.render('./shared/default', options);
    }
    res.end();
});




// error handling middleware
app.use((err, req, res, next) => {
    console.log(err);
    console.error(err.stack);
    // res.status(500).sendFile(ERROR_PATH);
});

// default route after everything fails
app.use('/', (req, res) => {
    // res.status(404).sendFile(NOT_FOUND_PATH);
    res.status(404).send('Path not found!');
    res.end()
});

// register exitting log
process.on('exit', (code) => {
    console.log(`\nServer exiting with code ${code}`);
});

process.on('SIGINT', process.exit);
process.on('SIGUSR2', process.exit); //Salvar com nodemon
