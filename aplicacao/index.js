"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const process = require('process');

const dbConnect = require('./DAO/db-connect');
const Conf = require('./settings/config.json');

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

const port = 4519;

dbConnect.connect(() => {
    console.log('Database connected');
    app.listen(port, () => {
        console.log(`Servidor em execução port ${port}`);
    });
});

if (connectLivereload !== null) {
    app.use(connectLivereload());
}

// 3rd-party middlwares
app.use(bodyParser.urlencoded({extended: true}));


// static route
app.use('/static', express.static(path.join(__dirname, 'static')));

// errors throwers
app.get('/shouldnotwork', (req, res) => {
    throw Error('I just failed');
});

app.get('/home/', homeController.homePage);
app.get('/meaning/', homeController.meaningPage);
app.get('/terms/', homeController.termsPage);
app.get('/about/', homeController.aboutPage);

app.get('/disease', diseaseController.diseaseListPage);
app.get('/disease/:code/', diseaseController.diseasePage);

app.post('/questionnaire/answer', questionnaireController.Answer)


app.get('/:page/', (req, res, next) => {
    const current_page = req.params.page;
    console.log(`\\${current_page}`);
    const page_list = ['home', 'sex', 'age', 'height', 'weight', 'symptom', 'results', 'about', 'terms', 'diseases', 'meaning', 'X_disease'];
    const modal_list = { 'home': 'home_modal', 'diesase': 'diesase_modal' }


    if (!page_list.includes(current_page)) next();
    else {
        var options = { page: '', modal: '', title: '', page: '', 'next': '', footnote: '', content: '', percent: 0, diseases: [], raw: '' };
        switch (current_page) {
            case 'sex':
                options['page'] = 'layouts/question';
                options['question'] = 'sex';
                options['title'] = 'Sexo biológico*.';
                options['footnote'] = 'sex_footnote';
                options.next = 'age';
                options.percent = 5;
                break;
            case 'age':
                options['page'] = 'layouts/question';
                options['question'] = 'age';
                options['title'] = 'Sua idade em anos.';
                options.next = 'height';
                options.percent = 10;
                break;
            case 'height':
                options['page'] = 'layouts/question';
                options['question'] = 'height';
                options['title'] = 'Sua altura em m.';
                options.next = 'weight';
                options.percent = 15;
                break;
            case 'weight':
                options['page'] = 'layouts/question';
                options['question'] = 'weight';
                options['title'] = 'Seu peso em kg.';
                options.next = 'symptom';
                options.percent = 20;
                break;
            case 'symptom':
                options['page'] = 'layouts/question';
                options['question'] = 'symptom';
                options['title'] = 'Você apresentou sintôma X?';
                options.next = 'results';
                options.percent = 25;
                break;
            case 'results':
                options['page'] = 'layouts/entitled';
                options['title'] = 'Resultados';
                options['content'] = 'results';
                options.diseases = [
                    { name: "Doença X", value: "90", id: "X_disease", information: "X é uma doença viral"  },
                    { name: "Doença Y", value: "80", id: "Y_disease", information: "Y é uma doença viral"  },
                    { name: "Doença Z", value: "70", id: "Z_disease", information: "Z é uma doença viral"  },
                    { name: "Doença W", value: "60", id: "W_disease", information: "W é uma doença viral"  }
                ];
                options.modal = 'results_modal';
                break;
            case 'about':
                options['page'] = 'layouts/entitled';
                options['title'] = 'Sobre';
                options.content = 'about';
                break;
            case 'terms':
                options['page'] = 'layouts/entitled';
                options['title'] = 'Termos de uso';
                options.content = 'terms';
                break;
            case 'meaning':
                options['page'] = 'layouts/entitled';
                options['title'] = 'O que significam estes resultados';
                options.content = 'meaning';
                break;
            case 'diseases':
                options['page'] = 'layouts/entitled';
                options['title'] = 'Doenças';
                options.content = 'layouts/disease_list';
                options.diseases = [
                    { name: "Doença Q", value: "", id: "Q_disease", information: "Q é uma doença viral" },
                    { name: "Doença R", value: "", id: "R_disease", information: "R é uma doença viral" },
                    { name: "Doença S", value: "", id: "S_disease", information: "S é uma doença viral" },
                    { name: "Doença T", value: "", id: "T_disease", information: "T é uma doença viral" },
                    { name: "Doença U", value: "", id: "U_disease", information: "U é uma doença viral" },
                    { name: "Doença V", value: "", id: "V_disease", information: "V é uma doença viral" },
                    { name: "Doença W", value: "", id: "W_disease", information: "W é uma doença viral" },
                    { name: "Doença X", value: "", id: "X_disease", information: "X é uma doença viral" },
                    { name: "Doença Y", value: "", id: "Y_disease", information: "Y é uma doença viral" },
                    { name: "Doença Z", value: "", id: "Z_disease", information: "Z é uma doença viral" },
                ];
                break;
            case 'X_disease':
                options.diseases = [
                    { name: "Doença X", value: "", id: "X_disease", information: "X é uma doença viral" }
                ];
                options['page'] = 'layouts/entitled';
                options['title'] = options.diseases[0].name;
                options.raw = options.diseases[0].information;
                break;
            default:
                options.page = current_page;
                options.modal = (modal_list[current_page] !== undefined ? modal_list[current_page] : '');
        }
        // console.log(options);
        res.render('./layouts/default', options);
    }
    res.end();
});




// error handling middleware
app.use((err, req, res, next) => {
    var options = { page: '', modal: '', title: '', page: '', 'next': '', footnote: '', content: '', percent: 0, diseases: [], raw: '' };
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
    var options = { page: '', modal: '', title: '', page: '', 'next': '', footnote: '', content: '', percent: 0, diseases: [], raw: '' };
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
