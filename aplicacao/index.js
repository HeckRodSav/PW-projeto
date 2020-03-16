const express = require('express');
const bodyParser = require('body-parser');
// inicializar app express
const app = express();

let port = 4519;
app.listen(port, () => {
    console.log('Servidor em execução port' + port);
});
