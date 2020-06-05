/***
 * Mongo shell script to create an empty profiles db
 */

db = connect('127.0.0.1:27017/healthweb');
db.dropDatabase();

db = connect('127.0.0.1:27017/healthweb');

db.createCollection('diseases');
db.diseases.createIndex({'id': 1}, {unique: true});

db.createCollection('symptoms');
db.symptoms.createIndex({'id': 1}, {unique: true});

// db.createCollection('sequences');

// db.sequences.insertOne({
//     name: 'disease_id',
//     value: 1
// });

db.diseases.insertOne({
    id: "D001",
    name: "gripe",
    information: "Gripe é uma doença viral",
    restriction: "Não existem retrições para a gripe",
    symptoms: ["S001","S002","S004","S005"]
});

db.diseases.insertOne({
    id: "D002",
    name: "catapora",
    information: "Catapora é uma doença viral",
    restriction: "Não existem retrições para a catapora",
    symptoms: ["S003", "S006"]
});

db.diseases.insertOne({
    id: "D003",
    name: "Pneumonia",
    information: "Pneumonia é uma doença bacteriana",
    restriction: "Não existem retrições para a pneumonia",
    symptoms: ["S001","S002","S005"]
});

db.symptoms.insertOne({
    id: "S001",
    name: "tosse",
    information: "Quando se está tossindo muito",
    restriction: "Não existem retrições para tossis"
});

db.symptoms.insertOne({
    id: "S002",
    name: "febre",
    information: "Temperatura acima de 37.6°",
    restriction: "Não existem retrições para febres"
});

db.symptoms.insertOne({
    id: "S003",
    name: "coceira",
    information: "Temperatura acima de 37.6°",
    restriction: "Não existem retrições para febres"
});

db.symptoms.insertOne({
    id: "S004",
    name: "coriza",
    information: "Temperatura acima de 37.6°",
    restriction: "Não existem retrições para febres"
});

db.symptoms.insertOne({
    id: "S005",
    name: "dor no corpo",
    information: "Temperatura acima de 37.6°",
    restriction: "Não existem retrições para febres"
});

db.symptoms.insertOne({
    id: "S006",
    name: "manchas vermelhas no corpo",
    information: "Temperatura acima de 37.6°",
    restriction: "Não existem retrições para febres"
});