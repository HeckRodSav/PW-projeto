/***
 * Mongo shell script to create an empty profiles db
 */

db = connect('127.0.0.1:27017/heathweb');
db.dropDatabase();
db = connect('127.0.0.1:27017/heathweb');
db.createCollection('diseases');
db.diseases.createIndex({'id': 1}, {unique: true});
db.createCollection('sequences');
db.sequences.insertOne({
    name: 'disease_id',
    value: 1
});

db.diseases.insertOne({
    id: 1,
    name: "gripe",
    tag: "gripe",
    value: "",
    information: "Gripe é uma doença viral",
    restriction: "Não existem retrições para a gripe"
});

db.diseases.insertOne({
    id: 2,
    name: "catapora",
    tag: "catapora",
    value: "",
    information: "Catapora é uma doença viral",
    restriction: "Não existem retrições para a catapora"
});


db.diseases.insertOne({
    id: 3,
    name: "sars",
    tag: "sars",
    value: "",
    information: "Sars é uma doença viral",
    restriction: "Não existem retrições para a sars"
});
