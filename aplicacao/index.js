"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const process = require('process');
const session = require('express-session');

const dbConnect = require('./DAO/db-connect');
const config = require('./settings/config.json');

const diseaseController = require('./controllers/disease-controller');
// const symptomsController = require('./controllers/symptoms-controller');
const homeController = require('./controllers/home-controller');
const questionnaireController = require('./controllers/questionnaire-controller');

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
    watcher.on("change", (arg) => {
        console.log(`Change: ${new Date().toLocaleString()} - ${arg.replace(__dirname, ".")}`);
    });
}

// inicializar app express
const app = express();

// set ejs as template engine
app.set('view engine', 'ejs');

// set the default view lookup folder
app.set('views', path.resolve(__dirname, 'views'));

const port = process.argv[2] || 4519;

dbConnect.connect(() => {
    console.log('Database connected');
    // console.log(process.env);
    app.listen(port, () => {
        console.log(`Servidor em execução port ${port}`);
    });
});

if (connectLivereload !== null) {
    app.use(connectLivereload());
}

// configure the session middlware
app.use(session({
    secret: config.secret,
    resave: false,
    saveUninitialized: false,
    store: dbConnect.sessionStore
}));

// custom middlewares
app.use((req, res, next) => {
    res.locals.session = req.session;
    res.locals.flash = req.session.flash;
    delete req.session.flash;
    next();
});

// 3rd-party middlwares
app.use(bodyParser.urlencoded({ extended: true }));


// static route
app.use('/static', express.static(path.join(__dirname, 'static')));

// errors throwers
app.get('/shouldnotwork', (req, res) => {
    throw Error('I just failed');
});

app.get('/', homeController.homePage);
app.get('/home/', homeController.homePage);
app.get('/meaning/', homeController.meaningPage);
app.get('/terms/', homeController.termsPage);
app.get('/about/', homeController.aboutPage);

app.get('/disease', diseaseController.diseaseListPage);
app.get('/disease/:code/', diseaseController.diseasePage);

app.get('/result', questionnaireController.resultsPage);

app.post('/questionnaire/answer', questionnaireController.Answer);
app.get('/questionnaire/answer', questionnaireController.Answer);


// error handling middleware
app.use((err, req, res, next) => {
    var options = { page: '', modal: '', title: '', page: '', 'next': '', footnote: '', content: '', percent: 0, diseases: [], raw: '', symptomNames: '' };
    options['page'] = 'layouts/entitled';
    options['title'] = 'Erro interno!';
    options.content = 'error';
    console.log(err);
    console.error(err.stack);
    res.status(500).render('./layouts/default', options);
    // res.status(500).sendFile(ERROR_PATH);
});

// default route after everything fails
app.use('/', (req, res) => {
    var options = { page: '', modal: '', title: '', page: '', 'next': '', footnote: '', content: '', percent: 0, diseases: [], raw: '', symptomNames: '' };
    options['page'] = 'layouts/entitled';
    options['title'] = 'Página não encontrada!';
    options.content = 'not_found';
    res.status(404).render('./layouts/default', options);
    res.end()
});

// register exitting log
process.on('exit', (code) => {
    console.log(`\nServer exiting with code ${code}`);
    dbConnect.disconnect(() => {
        console.log('Database disconnected');
    });
});

process.on('SIGINT', process.exit);
process.on('SIGUSR2', process.exit); //Salvar com nodemon
