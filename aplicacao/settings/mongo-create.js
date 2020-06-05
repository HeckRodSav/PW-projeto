/***
 * Mongo shell script to create an empty profiles db
 */

db = connect('127.0.0.1:27017/heathweb');
db.dropDatabase();

db = connect('127.0.0.1:27017/heathweb');

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
    id: 1,
    name: "gripe",
    value: "",
    information: "Gripe é uma doença viral",
    restriction: "Não existem retrições para a gripe"
});

db.diseases.insertOne({
    id: 2,
    name: "catapora",
    value: "",
    information: "Catapora é uma doença viral",
    restriction: "Não existem retrições para a catapora"
});

db.diseases.insertOne({
    id: 3,
    name: "sars",
    value: "",
    information: "Sars é uma doença viral",
    restriction: "Não existem retrições para a sars"
});



db.symptoms.insertOne({
    id: 1,
    name: "tosse",
    value: "",
    information: "Quando se está tossindo muito",
    restriction: "Não existem retrições para tossis"
});

db.symptoms.insertOne({
    id: 2,
    name: "febre",
    value: "",
    information: "Temperatura acima de 37.6°",
    restriction: "Não existem retrições para febres"
});
