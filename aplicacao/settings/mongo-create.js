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


// db.diseases.insertOne({
//     id: "D001",
//     name: "gripe",
//     information: "Gripe é uma doença viral",
//     restriction: "Não existem retrições para a gripe",
//     symptoms: ["S001","S002","S004","S005"]
// });


// db.diseases.insertOne({
//     id: "D002",
//     name: "catapora",
//     information: "Catapora é uma doença viral",
//     restriction: "Não existem retrições para a catapora",
//     symptoms: ["S003", "S006"]
// });


// db.diseases.insertOne({
//     id: "D003",
//     name: "Pneumonia",
//     information: "Pneumonia é uma doença bacteriana",
//     restriction: "Não existem retrições para a pneumonia",
//     symptoms: ["S001","S002","S005"]
// });


// db.symptoms.insertOne({
//     id: "S001",
//     name: "tosse",
//     information: "Quando se está tossindo muito",
//     restriction: "Não existem retrições para tossis"
// });


// db.symptoms.insertOne({
//     id: "S002",
//     name: "febre",
//     information: "Temperatura acima de 37.6°",
//     restriction: "Não existem retrições para febres"
// });


// db.symptoms.insertOne({
//     id: "S003",
//     name: "coceira",
//     information: "Temperatura acima de 37.6°",
//     restriction: "Não existem retrições para febres"
// });


// db.symptoms.insertOne({
//     id: "S004",
//     name: "coriza",
//     information: "Temperatura acima de 37.6°",
//     restriction: "Não existem retrições para febres"
// });


// db.symptoms.insertOne({
//     id: "S005",
//     name: "dor no corpo",
//     information: "Temperatura acima de 37.6°",
//     restriction: "Não existem retrições para febres"
// });


// db.symptoms.insertOne({
//     id: "S006",
//     name: "manchas vermelhas no corpo",
//     information: "Temperatura acima de 37.6°",
//     restriction: "Não existem retrições para febres"
// });












db.diseases.insertOne({
    id:"D001",
    name:"acromegalia",
    information:" ",
    restriction:" ",
    symptoms:["S193", "S298", "S154", "S150", "S155", "S028", "S160", "S307"]
});

db.diseases.insertOne({
    id:"D002",
    name:"sarcoidose aguda e crônica",
    information:" ",
    restriction:" ",
    symptoms:["S126", "S122", "S021", "S232", "S081", "S290", "S241", "S286", "S120", "S181", "S109", "S187", "S307", "S225", "S176", "S070", "S130"]
});

db.diseases.insertOne({
    id:"D003",
    name:"aguda glomerulonefrite proliferativa",
    information:" ",
    restriction:" ",
    symptoms:["S201", "S098", "S154", "S142", "S298", "S126", "S033", "S271", "S081", "S099", "S142", "S247"]
});

db.diseases.insertOne({
    id:"D004",
    name:"alergia alimentar",
    information:" ",
    restriction:" ",
    symptoms:["S302", "S248", "S118", "S032", "S258", "S136", "S278", "S163"]
});

db.diseases.insertOne({
    id:"D005",
    name:"alergia, trigo",
    information:" ",
    restriction:" ",
    symptoms:["S248", "S302", "S081", "S073", "S207", "S308", "S055", "S197"]
});

db.diseases.insertOne({
    id:"D006",
    name:"alveolite, exogenamente - alérgica",
    information:" ",
    restriction:" ",
    symptoms:["S126", "S286", "S081", "S185", "S122", "S122", "S290", "S081", "S052", "S232", "S130", "S185", "S298", "S025", "S122", "S232", "S126", "S290", "S081", "S280"]
});

db.diseases.insertOne({
    id:"D007",
    name:"amiloidose",
    information:" ",
    restriction:" ",
    symptoms:["S247", "S098", "S211", "S146", "S193", "S028", "S010"]
});

db.diseases.insertOne({
    id:"D008",
    name:"anemia",
    information:" ",
    restriction:" ",
    symptoms:["S122", "S298", "S120", "S278", "S285"]
});

db.diseases.insertOne({
    id:"D009",
    name:"anemia aplástica",
    information:" ",
    restriction:" ",
    symptoms:["S224", "S223", "S081", "S107", "S295", "S016", "S296", "S138", "S239", "S266", "S141", "S140", "S236", "S016", "S138", "S014", "S239","S053", "S130", "S016", "S140", "S295", "S223", "S081", "S122", "S040", "S126", "S200", "S236", "S137", "S107"]
});

db.diseases.insertOne({
    id:"D010",
    name:"Anemia falciforme",
    information:" ",
    restriction:" ",
    symptoms:["S164", "S072", "S143", "S017", "S103", "S069", "S145", "S040", "S266", "S218", "S142", "S180"]
});

db.diseases.insertOne({
    id:"D011",
    name:"anemia por deficiência de ferro",
    information:" ",
    restriction:" ",
    symptoms:["S248", "S006", "S081", "S264", "S298", "S278", "S120", "S122", "S309", "S122", "S285", "S277", "S085", "S298"]
});

db.diseases.insertOne({
    id:"D012",
    name:"antifosfolípide - Síndrome",
    information:" ",
    restriction:" ",
    symptoms:["S233", "S219", "S062","S247", "S154", "S295", "S143", "S016", "S262", "S190", "S100", "S069"]
});

db.diseases.insertOne({
    id:"D013",
    name:"artrite, artrite",
    information:" ",
    restriction:" ",
    symptoms:["S110", "S241", "S037", "S122", "S276", "S276"]
});

db.diseases.insertOne({
    id:"D014",
    name:"Ataque cardíaco",
    information:" ",
    restriction:" ",
    symptoms:["S019", "S264", "S022", "S275", "S207", "S308", "S279", "S163", "S019"]
});

db.diseases.insertOne({
    id:"D015",
    name:"bronquiolite",
    information:" ",
    restriction:" ",
    symptoms:["S126", "S280", "S052", "S125", "S290"]
});

db.diseases.insertOne({
    id:"D016",
    name:"bronquite aguda",
    information:" ",
    restriction:" ",
    symptoms:["S258", "S183", "S124", "S290", "S126", "S122", "S298", "S290", "S126", "S298", "S095"]
});

db.diseases.insertOne({
    id:"D017",
    name:"câncer colorretal",
    information:" ",
    restriction:" ",
    symptoms:["S232", "S126", "S122", "S122","S232", "S122", "S223", "S016"]
});

db.diseases.insertOne({
    id:"D018",
    name:"Câncer de estômago",
    information:" ",
    restriction:" ",
    symptoms:["S207", "S021", "S080", "S146", "S167", "S031", "S232", "S207", "S265", "S122", "S076", "S080", "S308", "S169", "S232"]
});

db.diseases.insertOne({
    id:"D019",
    name:"câncer de pâncreas",
    information:" ",
    restriction:" ",
    symptoms:["S232", "S090", "S167", "S207", "S301", "S248", "S073", "S273", "S021", "S170", "S197", "S232", "S090", "S167", "S073", "S273", "S232", "S167", "S088", "S169", "S248", "S021", "S232", "S207", "S167", "S073", "S090", "S248"]
});

db.diseases.insertOne({
    id:"D020",
    name:"câncer de pulmão",
    information:" ",
    restriction:" ",
    symptoms:["S290", "S081", "S094","S105", "S068","S064", "S299", "S028", "S081", "S290", "S115", "S076", "S232", "S290", "S094", "S232", "S287", "S081", "S047", "S299", "S064", "S076", "S259", "S094", "S232", "S290", "S081", "S232", "S094"]
});

db.diseases.insertOne({
    id:"D021",
    name:"cancro do ovário",
    information:" ",
    restriction:" ",
    symptoms:["S222", "S197", "S170", "S031", "S079", "S232", "S122", "S221", "S222", "S170", "S031", "S079", "S232", "S122", "S047"]
});

db.diseases.insertOne({
    id:"D022",
    name:"carcinoma da próstata",
    information:" ",
    restriction:" ",
    symptoms:["S222", "S240", "S086", "S213", "S172", "S240", "S213", "S086", "S142", "S122", "S122", "S016"]
});

db.diseases.insertOne({
    id:"D023",
    name:"carcinoma de células renais",
    information:" ",
    restriction:" ",
    symptoms:["S142", "S147", "S154", "S242", "S232", "S122", "S126", "S016"]
});

db.diseases.insertOne({
    id:"D024",
    name:"carcinoma de esôfago",
    information:" ",
    restriction:" ",
    symptoms:["S076", "S232", "S091", "S195", "S256", "S308", "S077", "S090", "S021", "S259", "S256", "S076", "S019", "S153", "S153", "S259", "S076"]
});

db.diseases.insertOne({
    id:"D025",
    name:"carcinoma, neuroendócrino",
    information:" ",
    restriction:" ",
    symptoms:["S260", "S260", "S052", "S278", "S275", "S274", "S073", "S232","S032", "S206", "S220"]
});

db.diseases.insertOne({
    id:"D026",
    name:"cardiomiopatia dilatada",
    information:" ",
    restriction:" ",
    symptoms:["S277", "S120", "S058", "S099", "S081", "S179", "S178", "S120"]
});

db.diseases.insertOne({
    id:"D027",
    name:"cardiomiopatia hipertrófica",
    information:" ",
    restriction:" ",
    symptoms:["S122", "S277", "S285", "S081", "S019", "S279", "S285", "S267", "S081", "S019"]
});

db.diseases.insertOne({
    id:"D028",
    name:"célula bola anemia",
    information:" ",
    restriction:" ",
    symptoms:["S016", "S223", "S081", "S278", "S167", "S113", "S044", "S046"]
});

db.diseases.insertOne({
    id:"D029",
    name:"cerebral venosa trombose",
    information:" ",
    restriction:" ",
    symptoms:["S282", "S307", "S091", "S098", "S033", "S298", "S207", "S307", "S126", "S185", "S226", "S225"]
});

db.diseases.insertOne({
    id:"D030",
    name:"Chagas - doença",
    information:" ",
    restriction:" ",
    symptoms:["S126", "S122", "S113", "S146", "S145", "S187", "S202","S050"]
});

db.diseases.insertOne({
    id:"D031",
    name:"cirrose",
    information:" ",
    restriction:" ",
    symptoms:["S122", "S122", "S122", "S265", "S197", "S207", "S232", "S078", "S039", "S139", "S013", "S113", "S031", "S128"]
});

db.diseases.insertOne({
    id:"D032",
    name:"coarctação",
    information:" ",
    restriction:" ",
    symptoms:["S298", "S107", "S285", "S309", "S052", "S145"]
});

db.diseases.insertOne({
    id:"D033",
    name:"colangite",
    information:" ",
    restriction:" ",
    symptoms:["S091", "S167", "S126", "S126", "S167"]
});

db.diseases.insertOne({
    id:"D034",
    name:"Colangite esclerosante primária",
    information:" ",
    restriction:" ",
    symptoms:["S167", "S122", "S122", "S146", "S113", "S248"]
});

db.diseases.insertOne({
    id:"D035",
    name:"colelitíase",
    information:" ",
    restriction:" ",
    symptoms:["S207", "S265", "S207", "S170", "S308", "S197", "S207", "S308", "S170", "S197"]
});

db.diseases.insertOne({
    id:"D036",
    name:"colite microscópica",
    information:" ",
    restriction:" ",
    symptoms:["S073", "S232", "S088", "S207", "S197"]
});

db.diseases.insertOne({
    id:"D037",
    name:"comunicação interatrial",
    information:" ",
    restriction:" ",
    symptoms:["S122", "S122", "S120", "S277", "S019", "S069", "S177"]
});

db.diseases.insertOne({
    id:"D038",
    name:"crise thyrotoxic",
    information:" ",
    restriction:" ",
    symptoms:["S278", "S126", "S260", "S207", "S308", "S073", "S293", "S072"]
});

db.diseases.insertOne({
    id:"D039",
    name:"crónica asma",
    information:" ",
    restriction:" ",
    symptoms:["S237", "S125", "S289", "S287", "S081", "S290", "S125", "S278", "S252", "S237", "S278"]
});

db.diseases.insertOne({
    id:"D040",
    name:"curvas",
    information:" ",
    restriction:" ",
    symptoms:["S091", "S098", "S083", "S219", "S233", "S171"]
});

db.diseases.insertOne({
    id:"D041",
    name:"Cushing - doença",
    information:" ",
    restriction:" ",
    symptoms:["S141", "S148", "S218", "S203", "S004", "S159", "S048", "S119", "S154", "S162", "S199", "S165", "S067"]
});

db.diseases.insertOne({
    id:"D042",
    name:"defeito do Septo ventricular",
    information:" ",
    restriction:" ",
    symptoms:["S036", "S120", "S277", "S176", "S052", "S081", "S122", "S177", "S267", "S299", "S064", "S163"]
});

db.diseases.insertOne({
    id:"D043",
    name:"delirar",
    information:" ",
    restriction:" ",
    symptoms:["S084","S007", "S011", "S293", "S154", "S278", "S126"]
});

db.diseases.insertOne({
    id:"D044",
    name:"dermatomiosite",
    information:" ",
    restriction:" ",
    symptoms:["S204", "S126", "S068", "S076", "S202", "S012", "S130", "S029", "S185", "S108", "S190", "S037"]
});

db.diseases.insertOne({
    id:"D045",
    name:"difteria",
    information:" ",
    restriction:" ",
    symptoms:["S126", "S308", "S290", "S202", "S239"]
});

db.diseases.insertOne({
    id:"D046",
    name:"dissecção aórtica",
    information:" ",
    restriction:" ",
    symptoms:["S069", "S023", "S094", "S019", "S090", "S008", "S051"]
});

db.diseases.insertOne({
    id:"D047",
    name:"diverticulite",
    information:" ",
    restriction:" ",
    symptoms:["S061", "S073", "S133", "S088", "S126", "S185", "S061", "S126", "S061", "S073", "S133", "S207", "S126", "S061", "S073", "S133", "S207", "S126", "S061", "S073", "S133", "S207", "S126", "S061", "S073", "S133", "S207", "S126", "S061", "S073", "S133", "S207", "S091", "S126", "S061", "S073", "S133", "S207", "S091", "S126", "S061", "S073", "S133", "S207", "S091", "S126", "S061", "S073", "S133", "S207", "S091", "S126", "S061", "S073", "S133", "S207", "S091", "S126", "S061", "S073", "S133", "S207", "S091", "S126", "S126", "S061", "S073", "S133", "S207", "S308", "S061", "S073", "S133", "S207", "S091", "S126", "S061", "S073", "S133", "S207", "S091", "S126"]
});

db.diseases.insertOne({
    id:"D048",
    name:"doença de Behçet",
    information:" ",
    restriction:" ",
    symptoms:["S109", "S304","S029", "S304", "S297", "S303"]
});

db.diseases.insertOne({
    id:"D049",
    name:"doença de crohn",
    information:" ",
    restriction:" ",
    symptoms:["S261", "S106", "S208", "S021", "S126", "S207", "S308", "S232", "S122", "S133", "S073", "S109", "S029", "S303", "S304", "S131", "S015", "S096","S002", "S016", "S030", "S261", "S028", "S028", "S303", "S182", "S106", "S109", "S114"]
});

db.diseases.insertOne({
    id:"D050",
    name:"doença de Hodgkin",
    information:" ",
    restriction:" ",
    symptoms:["S248", "S113", "S146", "S126", "S276", "S232", "S122", "S187"]
});

db.diseases.insertOne({
    id:"D051",
    name:"doença de Ménière",
    information:" ",
    restriction:" ",
    symptoms:["S305", "S285", "S219", "S309", "S305", "S207", "S308", "S309"]
});

db.diseases.insertOne({
    id:"D052",
    name:"doença de Whipple",
    information:" ",
    restriction:" ",
    symptoms:["S192", "S088", "S073", "S273", "S030", "S029", "S261", "S126", "S245", "S187", "S034", "S245", "S029", "S088", "S197", "S273", "S191", "S073", "S126", "S232", "S120", "S287", "S019", "S081", "S028", "S018", "S298", "S024","S309", "S209"]
});

db.diseases.insertOne({
    id:"D053",
    name:"doença do refluxo gastroesofágico",
    information:" ",
    restriction:" ",
    symptoms:["S265", "S197", "S133", "S076", "S256", "S207", "S308", "S042", "S076", "S019", "S091", "S042", "S265", "S256"]
});

db.diseases.insertOne({
    id:"D054",
    name:"doença hepática alcoólica",
    information:" ",
    restriction:" ",
    symptoms:["S146", "S113", "S021", "S207", "S232", "S167", "S126"]
});

db.diseases.insertOne({
    id:"D055",
    name:"Doença pulmonar obstrutiva crônica",
    information:" ",
    restriction:" ",
    symptoms:["S287", "S237", "S125", "S290", "S120"]
});

db.diseases.insertOne({
    id:"D056",
    name:"Druesenfieber de Pfeiffer",
    information:" ",
    restriction:" ",
    symptoms:["S126", "S127", "S124", "S187", "S020"]
});

db.diseases.insertOne({
    id:"D057",
    name:"Ebstein - anomalia",
    information:" ",
    restriction:" ",
    symptoms:["S081", "S122", "S019", "S277", "S052", "S146"]
});

db.diseases.insertOne({
    id:"D058",
    name:"edema pulmonar",
    information:" ",
    restriction:" ",
    symptoms:["S063", "S081", "S290", "S063", "S278", "S052", "S006"]
});

db.diseases.insertOne({
    id:"D059",
    name:"embolia pulmonar",
    information:" ",
    restriction:" ",
    symptoms:["S082", "S278", "S081", "S094", "S022", "S051", "S267", "S280", "S278", "S052", "S290", "S285", "S280", "S081", "S094", "S290", "S126", "S278", "S163"]
});

db.diseases.insertOne({
    id:"D060",
    name:"encefalite",
    information:" ",
    restriction:" ",
    symptoms:["S126", "S134", "S216", "S084", "S298"]
});

db.diseases.insertOne({
    id:"D061",
    name:"encefalopatia, hepática",
    information:" ",
    restriction:" ",
    symptoms:["S057", "S271", "S249", "S085", "S024", "S128", "S293", "S271"]
});

db.diseases.insertOne({
    id:"D062",
    name:"endocardite infecciosa",
    information:" ",
    restriction:" ",
    symptoms:["S126", "S278", "S025", "S264", "S021", "S232", "S275", "S028", "S272", "S176", "S099","S070", "S236", "S304", "S064", "S299", "S142", "S103", "S113", "S016", "S185", "S295"]
});

db.diseases.insertOne({
    id:"D063",
    name:"enxaqueca",
    information:" ",
    restriction:" ",
    symptoms:["S134", "S207", "S021", "S298", "S134", "S308", "S207", "S285", "S005"]
});

db.diseases.insertOne({
    id:"D064",
    name:"escarlatina",
    information:" ",
    restriction:" ",
    symptoms:["S076", "S290", "S308", "S298", "S124", "S020", "S101", "S189", "S118", "S223", "S126", "S207", "S014"]
});

db.diseases.insertOne({
    id:"D065",
    name:"esclerose múltipla",
    information:" ",
    restriction:" ",
    symptoms:["S210", "S083", "S034", "S093", "S038", "S074", "S226", "S066", "S212", "S067", "S034", "S294", "S212", "S078", "S117", "S210", "S083", "S074", "S228", "S160", "S228", "S034", "S294", "S212", "S172"]
});

db.diseases.insertOne({
    id:"D066",
    name:"esclerose, sistêmica progressiva",
    information:" ",
    restriction:" ",
    symptoms:["S098", "S037", "S223","S206", "S095", "S204", "S012", "S130", "S202", "S234", "S154", "S103", "S220", "S029"]
});

db.diseases.insertOne({
    id:"D067",
    name:"esofágico divertículo",
    information:" ",
    restriction:" ",
    symptoms:["S282", "S076", "S256", "S127", "S077", "S256", "S127"]
});

db.diseases.insertOne({
    id:"D068",
    name:"espondilite ainda, forma juvenil",
    information:" ",
    restriction:" ",
    symptoms:["S095", "S028", "S076", "S113", "S245", "S187", "S118", "S126", "S187", "S118","S234"]
});

db.diseases.insertOne({
    id:"D069",
    name:"espondiloartrite",
    information:" ",
    restriction:" ",
    symptoms:["S261", "S182", "S090", "S182", "S181"]
});

db.diseases.insertOne({
    id:"D070",
    name:"estenose aortica",
    information:" ",
    restriction:" ",
    symptoms:["S081", "S019", "S285", "S267", "S122", "S019"]
});

db.diseases.insertOne({
    id:"D071",
    name:"estenose pulmonar",
    information:" ",
    restriction:" ",
    symptoms:["S122", "S081", "S176", "S019", "S285", "S267"]
});

db.diseases.insertOne({
    id:"D072",
    name:"fabry - Síndrome",
    information:" ",
    restriction:" ",
    symptoms:["S073", "S061", "S309", "S219", "S069"]
});

db.diseases.insertOne({
    id:"D073",
    name:"Febre Q",
    information:" ",
    restriction:" ",
    symptoms:["S126", "S298", "S239", "S025", "S095", "S028", "S289", "S118", "S019"]
});

db.diseases.insertOne({
    id:"D074",
    name:"febre reumática",
    information:" ",
    restriction:" ",
    symptoms:["S126", "S298", "S275", "S241", "S108", "S109", "S202", "S234"]
});

db.diseases.insertOne({
    id:"D075",
    name:"feocromocitoma",
    information:" ",
    restriction:" ",
    symptoms:["S154", "S298", "S275", "S277", "S293", "S006", "S088", "S223", "S185", "S232","S278"]
});

db.diseases.insertOne({
    id:"D076",
    name:"fibrilação atrial",
    information:" ",
    restriction:" ",
    symptoms:["S277","S285", "S022", "S081", "S022", "S246", "S277", "S285", "S267"]
});

db.diseases.insertOne({
    id:"D077",
    name:"fibrose cística",
    information:" ",
    restriction:" ",
    symptoms:["S290", "S104", "S073", "S047", "S046", "S174", "S214"]
});

db.diseases.insertOne({
    id:"D078",
    name:"fibrose pulmonar",
    information:" ",
    restriction:" ",
    symptoms:["S081", "S064", "S120", "S280", "S126", "S286"]
});

db.diseases.insertOne({
    id:"D079",
    name:"gastrinoma",
    information:" ",
    restriction:" ",
    symptoms:["S073", "S088", "S273","S073", "S273"]
});

db.diseases.insertOne({
    id:"D080",
    name:"gastrite",
    information:" ",
    restriction:" ",
    symptoms:["S088", "S170", "S207", "S308", "S169"]
});

db.diseases.insertOne({
    id:"D081",
    name:"Gastrite aguda",
    information:" ",
    restriction:" ",
    symptoms:["S091", "S308", "S195", "S207", "S170", "S027", "S197"]
});

db.diseases.insertOne({
    id:"D082",
    name:"Gaucher - doença",
    information:" ",
    restriction:" ",
    symptoms:["S092", "S281", "S151", "S107", "S198", "S137", "S040", "S081"]
});

db.diseases.insertOne({
    id:"D083",
    name:"glaucoma",
    information:" ",
    restriction:" ",
    symptoms:["S093", "S308", "S233", "S298", "S308", "S207"]
});

db.diseases.insertOne({
    id:"D084",
    name:"glúten - enteropatia sensível",
    information:" ",
    restriction:" ",
    symptoms:["S073", "S273", "S133", "S061", "S021", "S232", "S040", "S098", "S297", "S037", "S123","S018", "S254", "S223", "S132", "S158", "S283", "S092", "S218", "S207", "S241","S073", "S232", "S192", "S108", "S018", "S254", "S218", "S144", "S029", "S221", "S073", "S273", "S133", "S061", "S021", "S191", "S232", "S040", "S297", "S037", "S123", "S018", "S254", "S223", "S132", "S158", "S283", "S092", "S218", "S207"]
});

db.diseases.insertOne({
    id:"D085",
    name:"granulomatosa com poliangeíte",
    information:" ",
    restriction:" ",
    symptoms:["S270","S106", "S028", "S211", "S126", "S232", "S276", "S258", "S296", "S304"]
});

db.diseases.insertOne({
    id:"D086",
    name:"gripe",
    information:" ",
    restriction:" ",
    symptoms:["S290", "S126", "S076", "S298", "S025"]
});

db.diseases.insertOne({
    id:"D087",
    name:"hemorragia subaracnóide",
    information:" ",
    restriction:" ",
    symptoms:["S298", "S196", "S084", "S308", "S163"]
});

db.diseases.insertOne({
    id:"D088",
    name:"hepatite",
    information:" ",
    restriction:" ",
    symptoms:["S282", "S073", "S028", "S118", "S122", "S021", "S207"]
});

db.diseases.insertOne({
    id:"D089",
    name:"Hepatite Crônica",
    information:" ",
    restriction:" ",
    symptoms:["S122", "S021", "S282", "S028", "S167", "S146", "S149", "S145","S248", "S206", "S013", "S039", "S139"]
});

db.diseases.insertOne({
    id:"D090",
    name:"hiperaldosteronismo primário",
    information:" ",
    restriction:" ",
    symptoms:["S154", "S159", "S009", "S154", "S159", "S009"]
});

db.diseases.insertOne({
    id:"D091",
    name:"hipercalcemia",
    information:" ",
    restriction:" ",
    symptoms:["S207", "S308", "S061", "S208", "S246", "S243", "S271", "S056"]
});

db.diseases.insertOne({
    id:"D092",
    name:"hiperesplenismo",
    information:" ",
    restriction:" ",
    symptoms:["S224", "S017", "S223", "S122", "S186", "S295", "S236", "S113", "S054"]
});

db.diseases.insertOne({
    id:"D093",
    name:"hipertensão pulmonar",
    information:" ",
    restriction:" ",
    symptoms:["S278", "S285", "S059", "S081", "S290", "S019", "S122", "S098", "S052"]
});

db.diseases.insertOne({
    id:"D094",
    name:"hipertiroidismo",
    information:" ",
    restriction:" ",
    symptoms:["S269", "S278", "S255", "S275", "S203", "S218", "S131", "S209", "S278", "S006", "S085", "S026", "S154", "S293", "S232", "S199", "S073", "S010", "S006", "S232", "S154", "S073"]
});

db.diseases.insertOne({
    id:"D095",
    name:"hipoglicemia",
    information:" ",
    restriction:" ",
    symptoms:["S292", "S275", "S277", "S278", "S255", "S223", "S255", "S207", "S308", "S264", "S006", "S275", "S278", "S293", "S154", "S280", "S298", "S269","S074", "S271"]
});

db.diseases.insertOne({
    id:"D096",
    name:"hipotensão",
    information:" ",
    restriction:" ",
    symptoms:["S285", "S278", "S298", "S223", "S293"]
});

db.diseases.insertOne({
    id:"D097",
    name:"hipotiroidismo",
    information:" ",
    restriction:" ",
    symptoms:["S122", "S249", "S223", "S041", "S050", "S148", "S203", "S174", "S067","S163", "S122", "S230", "S010", "S045", "S061"]
});

db.diseases.insertOne({
    id:"D098",
    name:"inclassificável síndrome mielodisplásica",
    information:" ",
    restriction:" ",
    symptoms:["S016", "S264", "S223", "S186", "S295", "S236", "S145", "S054", "S016", "S040", "S126", "S281", "S113", "S146","S224", "S185", "S295", "S186"]
});

db.diseases.insertOne({
    id:"D099",
    name:"insuficiência aórtica",
    information:" ",
    restriction:" ",
    symptoms:["S019", "S277", "S081", "S006", "S277", "S032", "S178", "S122", "S267"]
});

db.diseases.insertOne({
    id:"D100",
    name:"Insuficiência cardíaca",
    information:" ",
    restriction:" ",
    symptoms:["S122", "S213", "S278", "S058", "S081", "S081", "S280", "S217", "S049", "S288", "S099", "S052", "S122", "S264", "S098", "S016", "S021", "S197", "S047", "S247", "S213", "S278", "S050", "S071"]
});

db.diseases.insertOne({
    id:"D101",
    name:"insuficiência cardíaca direita",
    information:" ",
    restriction:" ",
    symptoms:["S059", "S146", "S167", "S031", "S207", "S021", "S052", "S098", "S031", "S146", "S113", "S071", "S213"]
});

db.diseases.insertOne({
    id:"D102",
    name:"insuficiência cardíaca esquerda",
    information:" ",
    restriction:" ",
    symptoms:["S081", "S120", "S217", "S280", "S288", "S049", "S052", "S099", "S071", "S099", "S306", "S057", "S264", "S122", "S217", "S049", "S099", "S052", "S081", "S290", "S063", "S122", "S006", "S098"]
});

db.diseases.insertOne({
    id:"D103",
    name:"insuficiência hepática",
    information:" ",
    restriction:" ",
    symptoms:["S128", "S293", "S056", "S163", "S157", "S248"]
});

db.diseases.insertOne({
    id:"D104",
    name:"insuficiência hepática aguda",
    information:" ",
    restriction:" ",
    symptoms:["S084", "S271", "S056", "S167", "S128", "S281", "S163", "S157"]
});

db.diseases.insertOne({
    id:"D105",
    name:"insuficiência renal crônica",
    information:" ",
    restriction:" ",
    symptoms:["S298", "S057", "S055", "S166", "S099", "S127", "S248", "S016", "S171", "S098"]
});

db.diseases.insertOne({
    id:"D106",
    name:"insuficiência respiratória",
    information:" ",
    restriction:" ",
    symptoms:["S008", "S084", "S242", "S064", "S085", "S298", "S081", "S052", "S006", "S057", "S278"]
});

db.diseases.insertOne({
    id:"D107",
    name:"insuficiência venosa crônica",
    information:" ",
    restriction:" ",
    symptoms:["S098", "S228", "S098", "S253", "S248", "S223", "S052"]
});

db.diseases.insertOne({
    id:"D108",
    name:"insulinoma",
    information:" ",
    restriction:" ",
    symptoms:["S275", "S260", "S277", "S278", "S292", "S022", "S255", "S207", "S307", "S285", "S298", "S057", "S228", "S005", "S041"]
});

db.diseases.insertOne({
    id:"D109",
    name:"intestino irritável",
    information:" ",
    restriction:" ",
    symptoms:["S091", "S265", "S170", "S197", "S133", "S061", "S073"]
});

db.diseases.insertOne({
    id:"D110",
    name:"jirovecii Pneumocystis - pneumonia",
    information:" ",
    restriction:" ",
    symptoms:["S289", "S120", "S081", "S280", "S290", "S126"]
});

db.diseases.insertOne({
    id:"D111",
    name:"leucemia aguda",
    information:" ",
    restriction:" ",
    symptoms:["S122", "S126", "S276", "S140", "S200", "S016", "S223", "S081", "S122", "S295", "S187", "S113", "S138", "S003"]
});

db.diseases.insertOne({
    id:"D112",
    name:"Leucemia linfocítica aguda",
    information:" ",
    restriction:" ",
    symptoms:["S126", "S276", "S200", "S295", "S187", "S113", "S016", "S040", "S122", "S145"]
});

db.diseases.insertOne({
    id:"D113",
    name:"Leucemia linfocítica crônica",
    information:" ",
    restriction:" ",
    symptoms:["S126", "S232", "S040", "S295", "S016", "S140", "S185", "S146", "S302", "S253", "S187", "S122", "S276", "S113", "S248","S200"]
});

db.diseases.insertOne({
    id:"D114",
    name:"Leucemia mielóide aguda",
    information:" ",
    restriction:" ",
    symptoms:["S122", "S126", "S276", "S040", "S236", "S016"]
});

db.diseases.insertOne({
    id:"D115",
    name:"Leucemia mielóide crônica",
    information:" ",
    restriction:" ",
    symptoms:["S185", "S113", "S257", "S185", "S113", "S122", "S122", "S276", "S003"]
});

db.diseases.insertOne({
    id:"D116",
    name:"leucopenia",
    information:" ",
    restriction:" ",
    symptoms:["S114", "S270", "S175", "S124", "S239", "S187", "S126"]
});

db.diseases.insertOne({
    id:"D117",
    name:"Lofgren - Síndrome",
    information:" ",
    restriction:" ",
    symptoms:["S126", "S241", "S109", "S109", "S029"]
});

db.diseases.insertOne({
    id:"D118",
    name:"lúpus eritematoso sistémico",
    information:" ",
    restriction:" ",
    symptoms:["S126", "S232", "S187", "S204", "S241", "S010", "S134", "S202", "S234", "S238", "S087", "S067", "S295", "S186", "S126", "S122", "S232", "S028", "S029", "S134", "S206", "S010", "S298", "S238", "S234", "S247", "S087", "S207", "S073","S144", "S060"]
});

db.diseases.insertOne({
    id:"D119",
    name:"malária",
    information:" ",
    restriction:" ",
    symptoms:["S298", "S113", "S146", "S167", "S207", "S308", "S073", "S017", "S295", "S186", "S161", "S099", "S051", "S126", "S025"]
});

db.diseases.insertOne({
    id:"D120",
    name:"meningite",
    information:" ",
    restriction:" ",
    symptoms:["S185", "S308", "S057", "S126", "S298", "S207", "S216", "S084", "S024", "S055", "S225", "S134", "S236", "S298", "S126", "S196", "S084", "S090", "S207"]
});

db.diseases.insertOne({
    id:"D121",
    name:"miastenia grave",
    information:" ",
    restriction:" ",
    symptoms:["S203", "S203", "S135", "S112", "S251", "S074", "S076", "S075", "S081", "S001"]
});

db.diseases.insertOne({
    id:"D122",
    name:"microangiopatia, trombótica",
    information:" ",
    restriction:" ",
    symptoms:["S122", "S126", "S295", "S236", "S023", "S215", "S154", "S143", "S126", "S057", "S062", "S180", "S295", "S143"]
});

db.diseases.insertOne({
    id:"D123",
    name:"mieloma de células plasmáticas",
    information:" ",
    restriction:" ",
    symptoms:["S040", "S218", "S180", "S244", "S122", "S081", "S295", "S186", "S147", "S247", "S016"]
});

db.diseases.insertOne({
    id:"D124",
    name:"miocardiopatia hipertensiva",
    information:" ",
    restriction:" ",
    symptoms:["S298", "S285", "S107", "S307", "S057", "S081", "S019", "S215"]
});

db.diseases.insertOne({
    id:"D125",
    name:"miocardite",
    information:" ",
    restriction:" ",
    symptoms:["S122", "S126", "S073", "S290", "S118", "S094", "S277"]
});

db.diseases.insertOne({
    id:"D126",
    name:"mitral",
    information:" ",
    restriction:" ",
    symptoms:["S129", "S100", "S058", "S120", "S290", "S049", "S059", "S247", "S098", "S122", "S052", "S081", "S290", "S129", "S026"]
});

db.diseases.insertOne({
    id:"D127",
    name:"não-Hodgkin - linfoma",
    information:" ",
    restriction:" ",
    symptoms:["S186","S113", "S146", "S126", "S232", "S276", "S016", "S122", "S122", "S295", "S281", "S236", "S140", "S040"]
});

db.diseases.insertOne({
    id:"D128",
    name:"nephroblastoma",
    information:" ",
    restriction:" ",
    symptoms:["S088", "S021", "S308", "S308", "S126", "S142"]
});

db.diseases.insertOne({
    id:"D129",
    name:"ornitose",
    information:" ",
    restriction:" ",
    symptoms:["S239", "S025", "S126", "S095", "S298", "S107", "S290", "S118", "S113"]
});

db.diseases.insertOne({
    id:"D130",
    name:"pancreatite aguda",
    information:" ",
    restriction:" ",
    symptoms:["S088", "S207", "S308", "S197", "S031", "S126", "S163", "S071", "S167", "S260", "S274"]
});

db.diseases.insertOne({
    id:"D131",
    name:"pancreatite crônica",
    information:" ",
    restriction:" ",
    symptoms:["S207", "S308", "S232", "S197", "S073", "S167"]
});

db.diseases.insertOne({
    id:"D132",
    name:"paroxística nocturna hemoglobinúria",
    information:" ",
    restriction:" ",
    symptoms:["S301", "S298", "S154", "S224", "S262", "S016", "S143", "S054", "S142", "S081", "S016", "S143", "S094", "S207", "S076", "S078", "S090", "S298", "S095"]
});

db.diseases.insertOne({
    id:"D133",
    name:"pericardite constritiva crônica",
    information:" ",
    restriction:" ",
    symptoms:["S205", "S252", "S146", "S098", "S149", "S120", "S252"]
});

db.diseases.insertOne({
    id:"D134",
    name:"pielonefrite",
    information:" ",
    restriction:" ",
    symptoms:["S207", "S308", "S274", "S298", "S126", "S025", "S086", "S091", "S090"]
});

db.diseases.insertOne({
    id:"D135",
    name:"piloto anquilosante",
    information:" ",
    restriction:" ",
    symptoms:["S300", "S060", "S060", "S300", "S029", "S060", "S300", "S029"]
});

db.diseases.insertOne({
    id:"D136",
    name:"pneumonia por legionella",
    information:" ",
    restriction:" ",
    symptoms:["S238", "S126", "S258", "S183", "S298", "S057", "S184", "S073", "S289", "S025", "S095", "S290", "S094", "S239", "S238", "S126", "S258", "S183", "S298", "S057", "S073"]
});

db.diseases.insertOne({
    id:"D137",
    name:"pneumotórax",
    information:" ",
    restriction:" ",
    symptoms:["S082", "S290", "S091", "S091", "S081", "S280"]
});

db.diseases.insertOne({
    id:"D138",
    name:"Pneumotórax hipertensivo",
    information:" ",
    restriction:" ",
    symptoms:["S278", "S081", "S163", "S052", "S164", "S051"]
});

db.diseases.insertOne({
    id:"D139",
    name:"policitemia",
    information:" ",
    restriction:" ",
    symptoms:["S043", "S108", "S248", "S111", "S285", "S298", "S122", "S107", "S307", "S154"]
});

db.diseases.insertOne({
    id:"D140",
    name:"Pontiac - febre",
    information:" ",
    restriction:" ",
    symptoms:["S136", "S290", "S126", "S057", "S285", "S134", "S095", "S298"]
});

db.diseases.insertOne({
    id:"D141",
    name:"porfiria",
    information:" ",
    restriction:" ",
    symptoms:["S004", "S244", "S228", "S088", "S207", "S055", "S227", "S278", "S154"]
});

db.diseases.insertOne({
    id:"D142",
    name:"potássio deficiente",
    information:" ",
    restriction:" ",
    symptoms:["S121", "S135", "S061", "S246", "S243"]
});

db.diseases.insertOne({
    id:"D143",
    name:"Prolapso da válvula mitral",
    information:" ",
    restriction:" ",
    symptoms:["S278", "S267", "S122", "S122", "S022"]
});

db.diseases.insertOne({
    id:"D144",
    name:"rabdomiólise",
    information:" ",
    restriction:" ",
    symptoms:["S095", "S199", "S126", "S207", "S166", "S156"]
});

db.diseases.insertOne({
    id:"D145",
    name:"rápida - síndrome nefrítica progressiva",
    information:" ",
    restriction:" ",
    symptoms:["S223", "S154", "S247", "S268", "S180"]
});

db.diseases.insertOne({
    id:"D146",
    name:"Schwartz - Bartter - Síndrome",
    information:" ",
    restriction:" ",
    symptoms:["S021", "S055", "S116", "S207", "S308", "S298", "S169", "S269"]
});

db.diseases.insertOne({
    id:"D147",
    name:"síndrome da artéria espinal anterior",
    information:" ",
    restriction:" ",
    symptoms:["S091", "S212", "S307", "S309", "S083", "S207", "S035"]
});

db.diseases.insertOne({
    id:"D148",
    name:"Síndrome de Cushing",
    information:" ",
    restriction:" ",
    symptoms:["S048", "S119", "S199", "S154", "S159", "S152", "S165", "S218", "S154", "S159", "S152"]
});

db.diseases.insertOne({
    id:"D149",
    name:"síndrome de Kawasaki",
    information:" ",
    restriction:" ",
    symptoms:["S114", "S110", "S126", "S187", "S118", "S101", "S189", "S060"]
});

db.diseases.insertOne({
    id:"D150",
    name:"síndrome de Marfan",
    information:" ",
    restriction:" ",
    symptoms:["S229", "S194","S112","S105", "S229", "S194", "S112", "S179"]
});

db.diseases.insertOne({
    id:"D151",
    name:"síndrome de perda de proteína",
    information:" ",
    restriction:" ",
    symptoms:["S073", "S273", "S232", "S192", "S098", "S071", "S031"]
});

db.diseases.insertOne({
    id:"D152",
    name:"síndrome de Reye",
    information:" ",
    restriction:" ",
    symptoms:["S308", "S161", "S102", "S308", "S271", "S184"]
});

db.diseases.insertOne({
    id:"D153",
    name:"síndrome nefrótica",
    information:" ",
    restriction:" ",
    symptoms:["S031", "S040", "S154", "S180","S148", "S098", "S247"]
});

db.diseases.insertOne({
    id:"D154",
    name:"síndrome respiratória aguda Grave",
    information:" ",
    restriction:" ",
    symptoms:["S157", "S081","S280", "S081", "S052", "S006", "S057"]
});

db.diseases.insertOne({
    id:"D155",
    name:"subclávia - síndrome do roubo",
    information:" ",
    restriction:" ",
    symptoms:["S285", "S171", "S307", "S309", "S083", "S035", "S228", "S091", "S223"]
});

db.diseases.insertOne({
    id:"D156",
    name:"tamponamento cardíaco",
    information:" ",
    restriction:" ",
    symptoms:["S205", "S252", "S120", "S163", "S252", "S278"]
});

db.diseases.insertOne({
    id:"D157",
    name:"trombocitemia essencial",
    information:" ",
    restriction:" ",
    symptoms:["S307", "S298", "S285", "S309", "S276", "S107", "S137", "S141", "S228", "S111", "S111", "S285", "S298", "S307", "S281", "S113", "S156", "S185"]
});

db.diseases.insertOne({
    id:"D158",
    name:"tuberculose",
    information:" ",
    restriction:" ",
    symptoms:["S232", "S276", "S122", "S120", "S290", "S187", "S081", "S126", "S276", "S232", "S169", "S232", "S276", "S122", "S120"]
});

db.diseases.insertOne({
    id:"D159",
    name:"tuberculose, urogenital",
    information:" ",
    restriction:" ",
    symptoms:["S086", "S142", "S013", "S198", "S151"]
});

db.diseases.insertOne({
    id:"D160",
    name:"tumor cerebral maligno",
    information:" ",
    restriction:" ",
    symptoms:["S298", "S207", "S308", "S062", "S225"]
});

db.diseases.insertOne({
    id:"D161",
    name:"úlcera, gastroduodenal",
    information:" ",
    restriction:" ",
    symptoms:["S170", "S207", "S308", "S232", "S021", "S027", "S232", "S021", "S207", "S170", "S308"]
});

db.diseases.insertOne({
    id:"D162",
    name:"uremia",
    information:" ",
    restriction:" ",
    symptoms:["S271", "S021", "S031","S013", "S078", "S016", "S040", "S234", "S154", "S099", "S238", "S248", "S015"]
});

db.diseases.insertOne({
    id:"D163",
    name:"urolitíase",
    information:" ",
    restriction:" ",
    symptoms:["S308", "S274", "S142", "S201", "S207"]
});

db.diseases.insertOne({
    id:"D164",
    name:"urosepsia",
    information:" ",
    restriction:" ",
    symptoms:["S025", "S126", "S278", "S280", "S163", "S052", "S215"]
});

db.diseases.insertOne({
    id:"D165",
    name:"vertigem posicional paroxística benigna",
    information:" ",
    restriction:" ",
    symptoms:["S212", "S207", "S305", "S305", "S212", "S207", "S207"]
});


db.symptoms.insertOne({
    id:"S001",
    name:"A paralisia de Bell",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S002",
    name:"abscesso",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S003",
    name:"ácido úrico elevado",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S004",
    name:"adinamia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S005",
    name:"afasia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S006",
    name:"agitação",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S007",
    name:"agitado padronizado",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S008",
    name:"agonia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S009",
    name:"alcalose metabólica",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S010",
    name:"alopecia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S011",
    name:"alucinações",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S012",
    name:"alveolite",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S013",
    name:"amenorréia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S014",
    name:"amidalite",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S015",
    name:"amiloidose",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S016",
    name:"anemia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S017",
    name:"anemia hemolítica",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S018",
    name:"anemia por deficiência de ferro",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S019",
    name:"angina de peito",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S020",
    name:"angina tonsilar",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S021",
    name:"anorexia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S022",
    name:"ansiedade",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S023",
    name:"anúria",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S024",
    name:"apatia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S025",
    name:"arrepios",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S026",
    name:"arritmias",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S027",
    name:"arrotos",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S028",
    name:"artralgia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S029",
    name:"artrite",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S030",
    name:"artrite enteropática",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S031",
    name:"ascite",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S032",
    name:"asma aplicável",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S033",
    name:"ataque epiléptica",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S034",
    name:"ataxia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S035",
    name:"Ataxia cerebelar",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S036",
    name:"atraso no desenvolvimento",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S037",
    name:"atrofia muscular",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S038",
    name:"atrofia óptica",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S039",
    name:"atrofia testicular",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S040",
    name:"Aumenta infektanfaelligkeit",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S041",
    name:"aumentar em peso",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S042",
    name:"azia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S043",
    name:"Basofilia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S044",
    name:"bilirrubina elevada geral",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S045",
    name:"bradicardia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S046",
    name:"cálculos biliares",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S047",
    name:"caquexia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S048",
    name:"cara de lua cheia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S049",
    name:"cardíaco asma",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S050",
    name:"cardiomegalia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S051",
    name:"choque",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S052",
    name:"cianose",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S053",
    name:"cirrose",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S054",
    name:"citopenia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S055",
    name:"cólicas",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S056",
    name:"coma",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S057",
    name:"confusão",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S058",
    name:"Congestão pulmonar",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S059",
    name:"congestionamento crónico",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S060",
    name:"conjuntivite",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S061",
    name:"constipação",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S062",
    name:"convulsões",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S063",
    name:"crepitações pulmão",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S064",
    name:"dedo baqueta",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S065",
    name:"deficiência auditiva",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S066",
    name:"deficiência muscular ocular",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S067",
    name:"depressão",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S068",
    name:"dermatomiosite",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S069",
    name:"derrame",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S070",
    name:"derrame pericárdico",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S071",
    name:"derrame pleural",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S072",
    name:"desidratação",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S073",
    name:"diarréia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S074",
    name:"diplopia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S075",
    name:"disartria",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S076",
    name:"disfagia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S077",
    name:"disfagia esofágica",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S078",
    name:"disfunção erétil",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S079",
    name:"dismenorréia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S080",
    name:"dispepsia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S081",
    name:"falta de ar",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S082",
    name:"dispnéia aguda",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S083",
    name:"distúrbio somatossensorial da pele",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S084",
    name:"distúrbios da consciência",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S085",
    name:"distúrbios do sono",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S086",
    name:"disúria",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S087",
    name:"doença de Lupus",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S088",
    name:"dor abdominal",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S089",
    name:"dor de ouvido",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S090",
    name:"dor nas costas",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S091",
    name:"dor nei",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S092",
    name:"dor no osso",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S093",
    name:"dor nos olhos",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S094",
    name:"dor torácica",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S095",
    name:"Dores musculares",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S096",
    name:"durchfaelle recorrente",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S097",
    name:"eczema",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S098",
    name:"edema",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S099",
    name:"edema pulmonar",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S100",
    name:"embolia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S101",
    name:"enantema",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S102",
    name:"encefalopatia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S103",
    name:"enfarte do rim",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S104",
    name:"enfisema",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S105",
    name:"Enoftalmia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S106",
    name:"episclerite",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S107",
    name:"epistaxe",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S108",
    name:"eritema",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S109",
    name:"eritema nodoso",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S110",
    name:"eritema palmar",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S111",
    name:"erythromelalgia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S112",
    name:"escoliose",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S113",
    name:"esplenomegalia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S114",
    name:"estomatite",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S115",
    name:"estridor",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S116",
    name:"estupor",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S117",
    name:"euforia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S118",
    name:"exantema",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S119",
    name:"Excesso de peso",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S120",
    name:"exertional",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S121",
    name:"extra-sístoles",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S122",
    name:"fadiga",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S123",
    name:"falta de ácido fólico",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S124",
    name:"faringite",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S125",
    name:"fase expiratória prolongada",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S126",
    name:"febre",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S127",
    name:"fedor ex minério",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S128",
    name:"fetor hepaticus",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S129",
    name:"fibrilação atrial",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S130",
    name:"fibrose pulmonar",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S131",
    name:"fígado gordo",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S132",
    name:"fissuras",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S133",
    name:"flatulência",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S134",
    name:"fotofobia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S135",
    name:"fraqueza muscular",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S136",
    name:"fungar",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S137",
    name:"gengivas sangram",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S138",
    name:"gengivite",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S139",
    name:"ginecomastia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S140",
    name:"granulocitopenia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S141",
    name:"hematoma",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S142",
    name:"hematúria",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S143",
    name:"hemólise",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S144",
    name:"hepatite",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S145",
    name:"hepatoesplenomegalia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S146",
    name:"hepatomegalia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S147",
    name:"hipercalcemia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S148",
    name:"hipercolesterolemia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S149",
    name:"hiperesplenismo",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S150",
    name:"hiperidrose",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S151",
    name:"hipermenorreia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S152",
    name:"hipernatremia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S153",
    name:"hipersalivação",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S154",
    name:"hipertensão",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S155",
    name:"hipertricose",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S156",
    name:"hiperuricemia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S157",
    name:"hiperventilação",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S158",
    name:"hipocalcemia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S159",
    name:"hipocalemia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S160",
    name:"hipoestesia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S161",
    name:"hipoglicemia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S162",
    name:"hipogonadismo",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S163",
    name:"hipotensão",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S164",
    name:"hipóxia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S165",
    name:"hirsutismo",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S166",
    name:"hyperkalemia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S167",
    name:"icterícia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S168",
    name:"ilusão",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S169",
    name:"inapetência",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S170",
    name:"inchaço",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S171",
    name:"inconsciência",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S172",
    name:"incontinência",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S173",
    name:"incontinencia urinaria",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S174",
    name:"infertilidade",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S175",
    name:"inflamação na orelha",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S176",
    name:"Insuficiência cardíaca",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S177",
    name:"insuficiência cardíaca direita",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S178",
    name:"insuficiência cardíaca esquerda",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S179",
    name:"insuficiência mitral",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S180",
    name:"insuficiência renal",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S181",
    name:"iridociclite",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S182",
    name:"irite",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S183",
    name:"laringite",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S184",
    name:"letargia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S185",
    name:"leucocitose",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S186",
    name:"leucopenia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S187",
    name:"linfadenopatia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S188",
    name:"linfocitose",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S189",
    name:"língua de framboesa",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S190",
    name:"livedo reticular",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S191",
    name:"má absorção",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S192",
    name:"má absorção",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S193",
    name:"macroglossia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S194",
    name:"mama funil",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S195",
    name:"Melena",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S196",
    name:"meningismo",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S197",
    name:"meteorismo",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S198",
    name:"metrorrhagia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S199",
    name:"miastenia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S200",
    name:"micoses",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S201",
    name:"microhematuria",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S202",
    name:"miocardite",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S203",
    name:"miopatia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S204",
    name:"miosite",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S205",
    name:"moderar aumentos da pressão venosa",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S206",
    name:"múltipla telangiectasia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S207",
    name:"náusea",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S208",
    name:"nefrolitíase",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S209",
    name:"nei oftalmopatia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S210",
    name:"neurite óptica",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S211",
    name:"neuropatia periférica",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S212",
    name:"nistagmo",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S213",
    name:"noctúria",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S214",
    name:"obstrução",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S215",
    name:"oligúria",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S216",
    name:"opistótono",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S217",
    name:"ortopneia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S218",
    name:"osteoporose",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S219",
    name:"outra perda auditiva",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S220",
    name:"Outras alterações cutâneas",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S221",
    name:"Outras mudanças cadeira",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S222",
    name:"outros distúrbios da micção",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S223",
    name:"Palidez",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S224",
    name:"pancitopenia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S225",
    name:"papiledema",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S226",
    name:"paralisia do VI",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S227",
    name:"paralisia e paresia (excl. nervos cranianos)",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S228",
    name:"Parestesia e disestesia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S229",
    name:"peito de quilha",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S230",
    name:"pele seca",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S231",
    name:"perda auditiva por condução sonora",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S232",
    name:"perda de peso acidental",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S233",
    name:"perda de visão",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S234",
    name:"pericardite",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S235",
    name:"peritonite",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S236",
    name:"petequial",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S237",
    name:"pieira",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S238",
    name:"pleurisia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S239",
    name:"pneumonia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S240",
    name:"polaquiúria",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S241",
    name:"poliartrite",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S242",
    name:"policitemia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S243",
    name:"polidipsia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S244",
    name:"polineuropatia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S245",
    name:"poliserosite",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S246",
    name:"poliúria",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S247",
    name:"proteinúria",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S248",
    name:"prurido",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S249",
    name:"psicomotor desaceleração",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S250",
    name:"psoríase",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S251",
    name:"ptose",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S252",
    name:"pulso paradoxal",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S253",
    name:"púrpura",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S254",
    name:"queimadura língua",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S255",
    name:"quente com fome",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S256",
    name:"regurgitação",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S257",
    name:"reincidente explosão",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S258",
    name:"rinite",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S259",
    name:"rouquidão",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S260",
    name:"rubor",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S261",
    name:"sacroileíte",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S262",
    name:"sangramento",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S263",
    name:"scotoma",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S264",
    name:"sensação de fraqueza",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S265",
    name:"sensação de pressão",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S266",
    name:"sepsia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S267",
    name:"síncope",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S268",
    name:"síndrome nefrótica",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S269",
    name:"sintoma de padronizado irritável",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S270",
    name:"sinusite",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S271",
    name:"sonolência",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S272",
    name:"sopro cardíaco",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S273",
    name:"steatorrhea",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S274",
    name:"suboclusão intestinal",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S275",
    name:"suor",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S276",
    name:"suor noturno",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S277",
    name:"taquicardia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S278",
    name:"taquicardia sinusal",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S279",
    name:"taquicardia ventricular",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S280",
    name:"taquipnéia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S281",
    name:"tendência para hemorragias",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S282",
    name:"tenro",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S283",
    name:"tetany",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S284",
    name:"tinea corporal",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S285",
    name:"tontura",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S286",
    name:"tosse",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S287",
    name:"Tosse crônica",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S288",
    name:"tosse noturna",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S289",
    name:"tosse seca",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S290",
    name:"tossir",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S291",
    name:"traqueobronquite",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S292",
    name:"tremer",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S293",
    name:"tremor",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S294",
    name:"tremor de intenção",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S295",
    name:"trombocitopenia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S296",
    name:"ulcerações ane",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S297",
    name:"úlceras aftosas",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S298",
    name:"dor de cabeça",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S299",
    name:"unhas de vidro do relógio",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S300",
    name:"uretrite",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S301",
    name:"urina castanha",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S302",
    name:"urticária",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S303",
    name:"uveíte",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S304",
    name:"vasculite",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S305",
    name:"vertigem rotativa",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S306",
    name:"vigilância reduzida",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S307",
    name:"visão embaçada",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S308",
    name:"vomitar",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S309",
    name:"zumbido",
    information:" ",
    restriction:" ",
});
