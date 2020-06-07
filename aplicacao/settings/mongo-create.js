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
    name:"dispnéia aguda",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S082",
    name:"distúrbio somatossensorial da pele",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S083",
    name:"distúrbios da consciência",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S084",
    name:"distúrbios do sono",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S085",
    name:"disúria",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S086",
    name:"doença de Lupus",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S087",
    name:"dor abdominal",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S088",
    name:"dor de cabeça",
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
    name:"falta de ar",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S125",
    name:"faringite",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S126",
    name:"fase expiratória prolongada",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S127",
    name:"febre",
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
    name:"mal hálito",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S195",
    name:"mama funil",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S196",
    name:"Melena",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S197",
    name:"meningismo",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S198",
    name:"meteorismo",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S199",
    name:"metrorrhagia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S200",
    name:"miastenia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S201",
    name:"micoses",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S202",
    name:"microhematuria",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S203",
    name:"miocardite",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S204",
    name:"miopatia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S205",
    name:"miosite",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S206",
    name:"moderar aumentos da pressão venosa",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S207",
    name:"múltipla telangiectasia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S208",
    name:"náusea",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S209",
    name:"nefrolitíase",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S210",
    name:"nei oftalmopatia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S211",
    name:"neurite óptica",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S212",
    name:"neuropatia periférica",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S213",
    name:"nistagmo",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S214",
    name:"noctúria",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S215",
    name:"obstrução",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S216",
    name:"oligúria",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S217",
    name:"opistótono",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S218",
    name:"ortopneia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S219",
    name:"osteoporose",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S220",
    name:"outra perda auditiva",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S221",
    name:"Outras alterações cutâneas",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S222",
    name:"Outras mudanças cadeira",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S223",
    name:"outros distúrbios da micção",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S224",
    name:"Palidez",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S225",
    name:"pancitopenia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S226",
    name:"papiledema",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S227",
    name:"paralisia do VI",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S228",
    name:"paralisia e paresia (excl. nervos cranianos)",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S229",
    name:"Parestesia e disestesia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S230",
    name:"peito de quilha",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S231",
    name:"pele seca",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S232",
    name:"perda auditiva por condução sonora",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S233",
    name:"perda de peso acidental",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S234",
    name:"perda de visão",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S235",
    name:"pericardite",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S236",
    name:"peritonite",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S237",
    name:"petequial",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S238",
    name:"pieira",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S239",
    name:"pleurisia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S240",
    name:"pneumonia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S241",
    name:"polaquiúria",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S242",
    name:"poliartrite",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S243",
    name:"policitemia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S244",
    name:"polidipsia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S245",
    name:"polineuropatia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S246",
    name:"poliserosite",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S247",
    name:"poliúria",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S248",
    name:"proteinúria",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S249",
    name:"prurido",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S250",
    name:"psicomotor desaceleração",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S251",
    name:"psoríase",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S252",
    name:"ptose",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S253",
    name:"pulso paradoxal",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S254",
    name:"púrpura",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S255",
    name:"queimadura língua",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S256",
    name:"quente com fome",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S257",
    name:"regurgitação",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S258",
    name:"reincidente explosão",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S259",
    name:"rinite",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S260",
    name:"rouquidão",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S261",
    name:"rubor",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S262",
    name:"sacroileíte",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S263",
    name:"sangramento",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S264",
    name:"scotoma",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S265",
    name:"sensação de fraqueza",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S266",
    name:"sensação de pressão",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S267",
    name:"sepsia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S268",
    name:"síncope",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S269",
    name:"síndrome nefrótica",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S270",
    name:"sintoma de padronizado irritável",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S271",
    name:"sinusite",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S272",
    name:"sonolência",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S273",
    name:"sopro cardíaco",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S274",
    name:"steatorrhea",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S275",
    name:"suboclusão intestinal",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S276",
    name:"suor",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S277",
    name:"suor noturno",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S278",
    name:"taquicardia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S279",
    name:"taquicardia sinusal",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S280",
    name:"taquicardia ventricular",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S281",
    name:"taquipnéia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S282",
    name:"tendência para hemorragias",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S283",
    name:"tenro",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S284",
    name:"tetany",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S285",
    name:"tinea corporal",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S286",
    name:"tontura",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S287",
    name:"tosse",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S288",
    name:"Tosse crônica",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S289",
    name:"tosse noturna",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S290",
    name:"tosse seca",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S291",
    name:"tossir",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S292",
    name:"traqueobronquite",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S293",
    name:"tremer",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S294",
    name:"tremor",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S295",
    name:"tremor de intenção",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S296",
    name:"trombocitopenia",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S297",
    name:"ulcerações ane",
    information:" ",
    restriction:" ",
});

db.symptoms.insertOne({
    id:"S298",
    name:"úlceras aftosas",
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

db.diseases.insertOne({
    id:"D001",
    name:"acromegalia",
    information:" ",
    restriction:" ",
    symptoms:["S193", "S088", "S154", "S150", "S155", "S028", "S160", "S307"]
});

db.diseases.insertOne({
    id:"D002",
    name:"aguda glomerulonefrite proliferativa",
    information:" ",
    restriction:" ",
    symptoms:["S202", "S098", "S154", "S142", "S088", "S127", "S033", "S272", "S124", "S099", "S142", "S248"]
});

db.diseases.insertOne({
    id:"D003",
    name:"alergia alimentar",
    information:" ",
    restriction:" ",
    symptoms:["S302", "S249", "S118", "S032", "S259", "S136", "S279", "S163"]
});

db.diseases.insertOne({
    id:"D004",
    name:"alergia, trigo",
    information:" ",
    restriction:" ",
    symptoms:["S249", "S302", "S124", "S073", "S208", "S308", "S055", "S198"]
});

db.diseases.insertOne({
    id:"D005",
    name:"alveolite, exogenamente - alérgica",
    information:" ",
    restriction:" ",
    symptoms:["S127", "S287", "S124", "S185", "S122", "S122", "S291", "S124", "S052", "S233", "S130", "S185", "S088", "S025", "S122", "S233", "S127", "S291", "S124", "S281"]
});

db.diseases.insertOne({
    id:"D006",
    name:"amiloidose",
    information:" ",
    restriction:" ",
    symptoms:["S248", "S098", "S212", "S146", "S193", "S028", "S010"]
});

db.diseases.insertOne({
    id:"D007",
    name:"anemia",
    information:" ",
    restriction:" ",
    symptoms:["S122", "S088", "S120", "S279", "S286"]
});

db.diseases.insertOne({
    id:"D008",
    name:"anemia aplástica",
    information:" ",
    restriction:" ",
    symptoms:["S225", "S224", "S124", "S107", "S296", "S016", "S297", "S138", "S240", "S267", "S141", "S140", "S237", "S016", "S138", "S014", "S240", "S053", "S130", "S016", "S140", "S296", "S224", "S124", "S122", "S040", "S127", "S201", "S237", "S137", "S107"]
});

db.diseases.insertOne({
    id:"D009",
    name:"Anemia falciforme",
    information:" ",
    restriction:" ",
    symptoms:["S164", "S072", "S143", "S017", "S103", "S069", "S145", "S040", "S267", "S219", "S142", "S180"]
});

db.diseases.insertOne({
    id:"D010",
    name:"anemia por deficiência de ferro",
    information:" ",
    restriction:" ",
    symptoms:["S249", "S006", "S124", "S265", "S088", "S279", "S120", "S122", "S309", "S122", "S286", "S278", "S084", "S088"]
});

db.diseases.insertOne({
    id:"D011",
    name:"antifosfolípide - Síndrome",
    information:" ",
    restriction:" ",
    symptoms:["S234", "S220", "S062", "S248", "S154", "S296", "S143", "S016", "S263", "S190", "S100", "S069", ""]
});

db.diseases.insertOne({
    id:"D012",
    name:"artrite, artrite",
    information:" ",
    restriction:" ",
    symptoms:["S110", "S242", "S037", "S122", "S277", "S277"]
});

db.diseases.insertOne({
    id:"D013",
    name:"Ataque cardíaco",
    information:" ",
    restriction:" ",
    symptoms:["S019", "S265", "S022", "S276", "S208", "S308", "S280", "S163", "S019"]
});

db.diseases.insertOne({
    id:"D014",
    name:"bronquiolite",
    information:" ",
    restriction:" ",
    symptoms:["S127", "S281", "S052", "S126", "S291"]
});

db.diseases.insertOne({
    id:"D015",
    name:"bronquite aguda",
    information:" ",
    restriction:" ",
    symptoms:["S259", "S183", "S125", "S291", "S127", "S122", "S088", "S291", "S127", "S088", "S095"]
});

db.diseases.insertOne({
    id:"D016",
    name:"câncer colorretal",
    information:" ",
    restriction:" ",
    symptoms:["S233", "S127", "S122", "S122", "S233", "S122", "S224", "S016"]
});

db.diseases.insertOne({
    id:"D017",
    name:"Câncer de estômago",
    information:" ",
    restriction:" ",
    symptoms:["S208", "S021", "S080", "S146", "S167", "S031", "S233", "S208", "S266", "S122", "S076", "S080", "S308", "S169", "S233"]
});

db.diseases.insertOne({
    id:"D018",
    name:"câncer de pâncreas",
    information:" ",
    restriction:" ",
    symptoms:["S233", "S090", "S167", "S208", "S301", "S249", "S073", "S274", "S021", "S170", "S198", "S233", "S090", "S167", "S073", "S274", "S233", "S167", "S087", "S169", "S249", "S021", "S233", "S208", "S167", "S073", "S090", "S249", ""]
});

db.diseases.insertOne({
    id:"D019",
    name:"câncer de pulmão",
    information:" ",
    restriction:" ",
    symptoms:["S291", "S124", "S094", "S105", "S068", "S064", "S299", "S028", "S124", "S291", "S115", "S076", "S233", "S291", "S094", "S233", "S288", "S124", "S047", "S299", "S064", "S076", "S260", "S094", "S233", "S291", "S124", "S233", "S094"]
});

db.diseases.insertOne({
    id:"D020",
    name:"cancro do ovário",
    information:" ",
    restriction:" ",
    symptoms:["S223", "S198", "S170", "S031", "S079", "S233", "S122", "S222", "S223", "S170", "S031", "S079", "S233", "S122", "S047"]
});

db.diseases.insertOne({
    id:"D021",
    name:"carcinoma da próstata",
    information:" ",
    restriction:" ",
    symptoms:["S223", "S241", "S085", "S214", "S172", "S241", "S214", "S085", "S142", "S122", "S122", "S016"]
});

db.diseases.insertOne({
    id:"D022",
    name:"carcinoma de células renais",
    information:" ",
    restriction:" ",
    symptoms:["S142", "S147", "S154", "S243", "S233", "S122", "S127", "S016"]
});

db.diseases.insertOne({
    id:"D023",
    name:"carcinoma de esôfago",
    information:" ",
    restriction:" ",
    symptoms:["S076", "S233", "S091", "S196", "S257", "S308", "S077", "S090", "S021", "S260", "S257", "S076", "S019", "S153", "S153", "S260", "S076"]
});

db.diseases.insertOne({
    id:"D024",
    name:"carcinoma, neuroendócrino",
    information:" ",
    restriction:" ",
    symptoms:["S261", "S261", "S052", "S279", "S276", "S275", "S073", "S233", "S032", "S207", "S221"]
});

db.diseases.insertOne({
    id:"D025",
    name:"cardiomiopatia dilatada",
    information:" ",
    restriction:" ",
    symptoms:["S278", "S120", "S058", "S099", "S124", "S179", "S178", "S120"]
});

db.diseases.insertOne({
    id:"D026",
    name:"cardiomiopatia hipertrófica",
    information:" ",
    restriction:" ",
    symptoms:["S122", "S278", "S286", "S124", "S019", "S280", "S286", "S268", "S124", "S019"]
});

db.diseases.insertOne({
    id:"D027",
    name:"célula bola anemia",
    information:" ",
    restriction:" ",
    symptoms:["S016", "S224", "S124", "S279", "S167", "S113", "S044", "S046"]
});

db.diseases.insertOne({
    id:"D028",
    name:"cerebral venosa trombose",
    information:" ",
    restriction:" ",
    symptoms:["S283", "S307", "S091", "S098", "S033", "S088", "S208", "S307", "S127", "S185", "S227", "S226"]
});

db.diseases.insertOne({
    id:"D029",
    name:"Chagas - doença",
    information:" ",
    restriction:" ",
    symptoms:["S127", "S122", "S113", "S146", "S145", "S187", "S203", "S050", ""]
});

db.diseases.insertOne({
    id:"D030",
    name:"cirrose",
    information:" ",
    restriction:" ",
    symptoms:["S122", "S122", "S122", "S266", "S198", "S208", "S233", "S078", "S039", "S139", "S013", "S113", "S031", "S128"]
});

db.diseases.insertOne({
    id:"D031",
    name:"coarctação",
    information:" ",
    restriction:" ",
    symptoms:["S088", "S107", "S286", "S309", "S052", "S145"]
});

db.diseases.insertOne({
    id:"D032",
    name:"colangite",
    information:" ",
    restriction:" ",
    symptoms:["S091", "S167", "S127", "S127", "S167"]
});

db.diseases.insertOne({
    id:"D033",
    name:"Colangite esclerosante primária",
    information:" ",
    restriction:" ",
    symptoms:["S167", "S122", "S122", "S146", "S113", "S249", ""]
});

db.diseases.insertOne({
    id:"D034",
    name:"colelitíase",
    information:" ",
    restriction:" ",
    symptoms:["S208", "S266", "S208", "S170", "S308", "S198", "S208", "S308", "S170", "S198"]
});

db.diseases.insertOne({
    id:"D035",
    name:"colite microscópica",
    information:" ",
    restriction:" ",
    symptoms:["S073", "S233", "S087", "S208", "S198"]
});

db.diseases.insertOne({
    id:"D036",
    name:"comunicação interatrial",
    information:" ",
    restriction:" ",
    symptoms:["S122", "S122", "S120", "S278", "S019", "S069", "S177"]
});

db.diseases.insertOne({
    id:"D037",
    name:"crise thyrotoxic",
    information:" ",
    restriction:" ",
    symptoms:["S279", "S127", "S261", "S208", "S308", "S073", "S294", "S072"]
});

db.diseases.insertOne({
    id:"D038",
    name:"crónica asma",
    information:" ",
    restriction:" ",
    symptoms:["S238", "S126", "S290", "S288", "S124", "S291", "S126", "S279", "S253", "S238", "S279", ""]
});

db.diseases.insertOne({
    id:"D039",
    name:"curvas",
    information:" ",
    restriction:" ",
    symptoms:["S091", "S098", "S082", "S220", "S234", "S171", ""]
});

db.diseases.insertOne({
    id:"D040",
    name:"Cushing - doença",
    information:" ",
    restriction:" ",
    symptoms:["S141", "S148", "S219", "S204", "S004", "S159", "S048", "S119", "S154", "S162", "S200", "S165", "S067"]
});

db.diseases.insertOne({
    id:"D041",
    name:"defeito do Septo ventricular",
    information:" ",
    restriction:" ",
    symptoms:["S036", "S120", "S278", "S176", "S052", "S124", "S122", "S177", "S268", "S299", "S064", "S163"]
});

db.diseases.insertOne({
    id:"D042",
    name:"delirar",
    information:" ",
    restriction:" ",
    symptoms:["S083", "S007", "S011", "S294", "S154", "S279", "S127"]
});

db.diseases.insertOne({
    id:"D043",
    name:"dermatomiosite",
    information:" ",
    restriction:" ",
    symptoms:["S205", "S127", "S068", "S076", "S203", "S012", "S130", "S029", "S185", "S108", "S190", "S037", ""]
});

db.diseases.insertOne({
    id:"D044",
    name:"difteria",
    information:" ",
    restriction:" ",
    symptoms:["S127", "S308", "S291", "S203", "S240"]
});

db.diseases.insertOne({
    id:"D045",
    name:"dissecção aórtica",
    information:" ",
    restriction:" ",
    symptoms:["S069", "S023", "S094", "S019", "S090", "S008", "S051"]
});

db.diseases.insertOne({
    id:"D046",
    name:"diverticulite",
    information:" ",
    restriction:" ",
    symptoms:["S061", "S073", "S133", "S087", "S127", "S185", "S061", "S127", "S061", "S073", "S133", "S208", "S127", "S061", "S073", "S133", "S208", "S127", "S061", "S073", "S133", "S208", "S127", "S061", "S073", "S133", "S208", "S127", "S061", "S073", "S133", "S208", "S091", "S127", "S061", "S073", "S133", "S208", "S091", "S127", "S061", "S073", "S133", "S208", "S091", "S127", "S061", "S073", "S133", "S208", "S091", "S127", "S061", "S073", "S133", "S208", "S091", "S127", "S061", "S073", "S133", "S208", "S091", "S127", "S127", "S061", "S073", "S133", "S208", "S308", "S061", "S073", "S133", "S208", "S091", "S127", "S061", "S073", "S133", "S208", "S091", "S127"]
});

db.diseases.insertOne({
    id:"D047",
    name:"doença de Behçet",
    information:" ",
    restriction:" ",
    symptoms:["S109", "S304", "S029", "S304", "S298", "S303"]
});

db.diseases.insertOne({
    id:"D048",
    name:"doença de crohn",
    information:" ",
    restriction:" ",
    symptoms:["S262", "S106", "S209", "S021", "S127", "S208", "S308", "S233", "S122", "S133", "S073", "S109", "S029", "S303", "S304", "S131", "S015", "S096", "S002", "S016", "S030", "S262", "S028", "S028", "S303", "S182", "S106", "S109", "S114"]
});

db.diseases.insertOne({
    id:"D049",
    name:"doença de Hodgkin",
    information:" ",
    restriction:" ",
    symptoms:["S249", "S113", "S146", "S127", "S277", "S233", "S122", "S187"]
});

db.diseases.insertOne({
    id:"D050",
    name:"doença de Ménière",
    information:" ",
    restriction:" ",
    symptoms:["S305", "S286", "S220", "S309", "S305", "S208", "S308", "S309"]
});

db.diseases.insertOne({
    id:"D051",
    name:"doença de Whipple",
    information:" ",
    restriction:" ",
    symptoms:["S191", "S087", "S073", "S274", "S030", "S029", "S262", "S127", "S246", "S187", "S034", "S246", "S029", "S087", "S198", "S274", "S192", "S073", "S127", "S233", "S120", "S288", "S019", "S124", "S028", "S018", "S088", "S024", "S309", "S210"]
});

db.diseases.insertOne({
    id:"D052",
    name:"doença do refluxo gastroesofágico",
    information:" ",
    restriction:" ",
    symptoms:["S266", "S198", "S133", "S076", "S257", "S208", "S308", "S042", "S076", "S019", "S091", "S042", "S266", "S257"]
});

db.diseases.insertOne({
    id:"D053",
    name:"doença hepática alcoólica",
    information:" ",
    restriction:" ",
    symptoms:["S146", "S113", "S021", "S208", "S233", "S167", "S127"]
});

db.diseases.insertOne({
    id:"D054",
    name:"Doença pulmonar obstrutiva crônica",
    information:" ",
    restriction:" ",
    symptoms:["S288", "S238", "S126", "S291", "S120"]
});

db.diseases.insertOne({
    id:"D055",
    name:"Ebstein - anomalia",
    information:" ",
    restriction:" ",
    symptoms:["S124", "S122", "S019", "S278", "S052", "S146"]
});

db.diseases.insertOne({
    id:"D056",
    name:"edema pulmonar",
    information:" ",
    restriction:" ",
    symptoms:["S063", "S124", "S291", "S063", "S279", "S052", "S006"]
});

db.diseases.insertOne({
    id:"D057",
    name:"embolia pulmonar",
    information:" ",
    restriction:" ",
    symptoms:["S081", "S279", "S124", "S094", "S022", "S051", "S268", "S281", "S279", "S052", "S291", "S286", "S281", "S124", "S094", "S291", "S127", "S279", "S163"]
});

db.diseases.insertOne({
    id:"D058",
    name:"encefalite",
    information:" ",
    restriction:" ",
    symptoms:["S127", "S134", "S217", "S083", "S088"]
});

db.diseases.insertOne({
    id:"D059",
    name:"encefalopatia, hepática",
    information:" ",
    restriction:" ",
    symptoms:["S057", "S272", "S250", "S084", "S024", "S128", "S294", "S272", ""]
});

db.diseases.insertOne({
    id:"D060",
    name:"endocardite infecciosa",
    information:" ",
    restriction:" ",
    symptoms:["S127", "S279", "S025", "S265", "S021", "S233", "S276", "S028", "S273", "S176", "S099", "S070", "S237", "S304", "S064", "S299", "S142", "S103", "S113", "S016", "S185", "S296"]
});

db.diseases.insertOne({
    id:"D061",
    name:"enxaqueca",
    information:" ",
    restriction:" ",
    symptoms:["S134", "S208", "S021", "S088", "S134", "S308", "S208", "S286", "S005"]
});

db.diseases.insertOne({
    id:"D062",
    name:"escarlatina",
    information:" ",
    restriction:" ",
    symptoms:["S076", "S291", "S308", "S088", "S125", "S020", "S101", "S189", "S118", "S224", "S127", "S208", "S014"]
});

db.diseases.insertOne({
    id:"D063",
    name:"esclerose múltipla",
    information:" ",
    restriction:" ",
    symptoms:["S211", "S082", "S034", "S093", "S038", "S074", "S227", "S066", "S213", "S067", "S034", "S295", "S213", "S078", "S117", "S211", "S082", "S074", "S229", "S160", "S229", "S034", "S295", "S213", "S172", ""]
});

db.diseases.insertOne({
    id:"D064",
    name:"esclerose, sistêmica progressiva",
    information:" ",
    restriction:" ",
    symptoms:["S098", "S037", "S224", "S207", "S095", "S205", "S012", "S130", "S203", "S235", "S154", "S103", "S221", "S029"]
});

db.diseases.insertOne({
    id:"D065",
    name:"esofágico divertículo",
    information:" ",
    restriction:" ",
    symptoms:["S283", "S076", "S257", "S194", "S077", "S257", "S194"]
});

db.diseases.insertOne({
    id:"D066",
    name:"espondilite ainda, forma juvenil",
    information:" ",
    restriction:" ",
    symptoms:["S095", "S028", "S076", "S113", "S246", "S187", "S118", "S127", "S187", "S118", "S235", ""]
});

db.diseases.insertOne({
    id:"D067",
    name:"espondiloartrite",
    information:" ",
    restriction:" ",
    symptoms:["S262", "S182", "S090", "S182", "S181"]
});

db.diseases.insertOne({
    id:"D068",
    name:"estenose aortica",
    information:" ",
    restriction:" ",
    symptoms:["S124", "S019", "S286", "S268", "S122", "S019"]
});

db.diseases.insertOne({
    id:"D069",
    name:"estenose pulmonar",
    information:" ",
    restriction:" ",
    symptoms:["S122", "S124", "S176", "S019", "S286", "S268"]
});

db.diseases.insertOne({
    id:"D070",
    name:"fabry - Síndrome",
    information:" ",
    restriction:" ",
    symptoms:["S061", "S069", "S073", "S220", "S309", ""]
});

db.diseases.insertOne({
    id:"D071",
    name:"Febre glandular",
    information:" ",
    restriction:" ",
    symptoms:["S020", "S125", "S127", "S187", "S194"]
});

db.diseases.insertOne({
    id:"D072",
    name:"Febre Q",
    information:" ",
    restriction:" ",
    symptoms:["S019", "S025", "S028", "S088", "S095", "S118", "S127", "S240", "S290"]
});

db.diseases.insertOne({
    id:"D073",
    name:"febre reumática",
    information:" ",
    restriction:" ",
    symptoms:["S088", "S108", "S109", "S127", "S203", "S235", "S242", "S276", ""]
});

db.diseases.insertOne({
    id:"D074",
    name:"feocromocitoma",
    information:" ",
    restriction:" ",
    symptoms:["S006", "S087", "S088", "S154", "S185", "S224", "S233", "S276", "S278", "S279", "S294", ""]
});

db.diseases.insertOne({
    id:"D075",
    name:"fibrilação atrial",
    information:" ",
    restriction:" ",
    symptoms:["S022", "S124", "S247", "S268", "S278", "S286", ""]
});

db.diseases.insertOne({
    id:"D076",
    name:"fibrose cística",
    information:" ",
    restriction:" ",
    symptoms:["S046", "S047", "S073", "S104", "S174", "S215", "S291", ""]
});

db.diseases.insertOne({
    id:"D077",
    name:"fibrose pulmonar",
    information:" ",
    restriction:" ",
    symptoms:["S064", "S120", "S124", "S127", "S281", "S287"]
});

db.diseases.insertOne({
    id:"D078",
    name:"gastrinoma",
    information:" ",
    restriction:" ",
    symptoms:["S073", "S087", "S274", ""]
});

db.diseases.insertOne({
    id:"D079",
    name:"gastrite",
    information:" ",
    restriction:" ",
    symptoms:["S087", "S169", "S170", "S208", "S308"]
});

db.diseases.insertOne({
    id:"D080",
    name:"Gastrite aguda",
    information:" ",
    restriction:" ",
    symptoms:["S027", "S091", "S170", "S196", "S198", "S208", "S308", ""]
});

db.diseases.insertOne({
    id:"D081",
    name:"Gaucher - doença",
    information:" ",
    restriction:" ",
    symptoms:["S040", "S092", "S107", "S124", "S137", "S151", "S199", "S282", ""]
});

db.diseases.insertOne({
    id:"D082",
    name:"glaucoma",
    information:" ",
    restriction:" ",
    symptoms:["S088", "S093", "S208", "S234", "S308", ""]
});

db.diseases.insertOne({
    id:"D083",
    name:"glúten - enteropatia sensível",
    information:" ",
    restriction:" ",
    symptoms:["S018", "S021", "S029", "S037", "S040", "S061", "S073", "S092", "S098", "S108", "S123", "S132", "S133", "S144", "S158", "S191", "S192", "S208", "S219", "S222", "S224", "S233", "S242", "S255", "S274", "S284", "S298", ""]
});

db.diseases.insertOne({
    id:"D084",
    name:"granulomatosa com poliangeíte",
    information:" ",
    restriction:" ",
    symptoms:["S028", "S106", "S127", "S212", "S233", "S259", "S271", "S277", "S297", "S304", ""]
});

db.diseases.insertOne({
    id:"D085",
    name:"gripe",
    information:" ",
    restriction:" ",
    symptoms:["S025", "S076", "S088", "S127", "S291"]
});

db.diseases.insertOne({
    id:"D086",
    name:"hemorragia subaracnóide",
    information:" ",
    restriction:" ",
    symptoms:["S083", "S088", "S163", "S197", "S308"]
});

db.diseases.insertOne({
    id:"D087",
    name:"hepatite",
    information:" ",
    restriction:" ",
    symptoms:["S021", "S028", "S073", "S118", "S122", "S208", "S283"]
});

db.diseases.insertOne({
    id:"D088",
    name:"Hepatite Crônica",
    information:" ",
    restriction:" ",
    symptoms:["S013", "S021", "S028", "S039", "S122", "S139", "S145", "S146", "S149", "S167", "S207", "S249", "S283", ""]
});

db.diseases.insertOne({
    id:"D089",
    name:"hiperaldosteronismo primário",
    information:" ",
    restriction:" ",
    symptoms:["S009", "S154", "S159"]
});

db.diseases.insertOne({
    id:"D090",
    name:"hipercalcemia",
    information:" ",
    restriction:" ",
    symptoms:["S056", "S061", "S208", "S209", "S244", "S247", "S272", "S308", ""]
});

db.diseases.insertOne({
    id:"D091",
    name:"hiperesplenismo",
    information:" ",
    restriction:" ",
    symptoms:["S017", "S054", "S113", "S122", "S186", "S224", "S225", "S237", "S296", ""]
});

db.diseases.insertOne({
    id:"D092",
    name:"hipertensão pulmonar",
    information:" ",
    restriction:" ",
    symptoms:["S019", "S052", "S059", "S098", "S122", "S124", "S279", "S286", "S291"]
});

db.diseases.insertOne({
    id:"D093",
    name:"hipertiroidismo",
    information:" ",
    restriction:" ",
    symptoms:["S006", "S010", "S026", "S073", "S084", "S131", "S154", "S200", "S204", "S210", "S219", "S233", "S256", "S270", "S276", "S279", "S294", ""]
});

db.diseases.insertOne({
    id:"D094",
    name:"hipoglicemia",
    information:" ",
    restriction:" ",
    symptoms:["S006", "S074", "S088", "S154", "S208", "S224", "S256", "S265", "S270", "S272", "S276", "S278", "S279", "S281", "S293", "S294", "S308", ""]
});

db.diseases.insertOne({
    id:"D095",
    name:"hipotensão",
    information:" ",
    restriction:" ",
    symptoms:["S088", "S224", "S279", "S286", "S294", ""]
});

db.diseases.insertOne({
    id:"D096",
    name:"hipotiroidismo",
    information:" ",
    restriction:" ",
    symptoms:["S010", "S041", "S045", "S050", "S061", "S067", "S122", "S148", "S163", "S174", "S204", "S224", "S231", "S250", ""]
});

db.diseases.insertOne({
    id:"D097",
    name:"inclassificável síndrome mielodisplásica",
    information:" ",
    restriction:" ",
    symptoms:["S016", "S040", "S054", "S113", "S127", "S145", "S146", "S185", "S186", "S224", "S225", "S237", "S265", "S282", "S296", ""]
});

db.diseases.insertOne({
    id:"D098",
    name:"insuficiência aórtica",
    information:" ",
    restriction:" ",
    symptoms:["S006", "S019", "S032", "S122", "S124", "S178", "S268", "S278"]
});

db.diseases.insertOne({
    id:"D099",
    name:"Insuficiência cardíaca",
    information:" ",
    restriction:" ",
    symptoms:["S016", "S021", "S047", "S049", "S050", "S052", "S058", "S071", "S098", "S099", "S122", "S124", "S198", "S214", "S218", "S248", "S265", "S279", "S281", "S289"]
});

db.diseases.insertOne({
    id:"D100",
    name:"insuficiência cardíaca direita",
    information:" ",
    restriction:" ",
    symptoms:["S021", "S031", "S052", "S059", "S071", "S098", "S113", "S146", "S167", "S208", "S214", ""]
});

db.diseases.insertOne({
    id:"D101",
    name:"insuficiência cardíaca esquerda",
    information:" ",
    restriction:" ",
    symptoms:["S006", "S049", "S052", "S057", "S063", "S071", "S098", "S099", "S120", "S122", "S124", "S218", "S265", "S281", "S289", "S291", "S306", ""]
});

db.diseases.insertOne({
    id:"D102",
    name:"insuficiência hepática",
    information:" ",
    restriction:" ",
    symptoms:["S056", "S128", "S157", "S163", "S249", "S294"]
});

db.diseases.insertOne({
    id:"D103",
    name:"insuficiência hepática aguda",
    information:" ",
    restriction:" ",
    symptoms:["S056", "S083", "S128", "S157", "S163", "S167", "S272", "S282"]
});

db.diseases.insertOne({
    id:"D104",
    name:"insuficiência renal crônica",
    information:" ",
    restriction:" ",
    symptoms:["S016", "S055", "S057", "S088", "S098", "S099", "S166", "S171", "S194", "S249"]
});

db.diseases.insertOne({
    id:"D105",
    name:"insuficiência respiratória",
    information:" ",
    restriction:" ",
    symptoms:["S006", "S008", "S052", "S057", "S064", "S083", "S084", "S088", "S124", "S243", "S279"]
});

db.diseases.insertOne({
    id:"D106",
    name:"insuficiência venosa crônica",
    information:" ",
    restriction:" ",
    symptoms:["S052", "S098", "S224", "S229", "S249", "S254", ""]
});

db.diseases.insertOne({
    id:"D107",
    name:"insulinoma",
    information:" ",
    restriction:" ",
    symptoms:["S005", "S022", "S041", "S057", "S088", "S208", "S229", "S256", "S261", "S276", "S278", "S279", "S286", "S293", "S307", ""]
});

db.diseases.insertOne({
    id:"D108",
    name:"intestino irritável",
    information:" ",
    restriction:" ",
    symptoms:["S061", "S073", "S091", "S133", "S170", "S198", "S266", ""]
});

db.diseases.insertOne({
    id:"D109",
    name:"jirovecii Pneumocystis - pneumonia",
    information:" ",
    restriction:" ",
    symptoms:["S120", "S124", "S127", "S281", "S290", "S291"]
});

db.diseases.insertOne({
    id:"D110",
    name:"leucemia aguda",
    information:" ",
    restriction:" ",
    symptoms:["S003", "S016", "S113", "S122", "S124", "S127", "S138", "S140", "S187", "S201", "S224", "S277", "S296", ""]
});

db.diseases.insertOne({
    id:"D111",
    name:"Leucemia linfocítica aguda",
    information:" ",
    restriction:" ",
    symptoms:["S016", "S040", "S113", "S122", "S127", "S145", "S187", "S201", "S277", "S296"]
});

db.diseases.insertOne({
    id:"D112",
    name:"Leucemia linfocítica crônica",
    information:" ",
    restriction:" ",
    symptoms:["S016", "S040", "S113", "S122", "S127", "S140", "S146", "S185", "S187", "S201", "S233", "S249", "S254", "S277", "S296", "S302", ""]
});

db.diseases.insertOne({
    id:"D113",
    name:"Leucemia mielóide aguda",
    information:" ",
    restriction:" ",
    symptoms:["S016", "S040", "S122", "S127", "S237", "S277"]
});

db.diseases.insertOne({
    id:"D114",
    name:"Leucemia mielóide crônica",
    information:" ",
    restriction:" ",
    symptoms:["S003", "S113", "S122", "S185", "S258", "S277"]
});

db.diseases.insertOne({
    id:"D115",
    name:"leucopenia",
    information:" ",
    restriction:" ",
    symptoms:["S114", "S125", "S127", "S175", "S187", "S240", "S271", ""]
});

db.diseases.insertOne({
    id:"D116",
    name:"Lofgren - Síndrome",
    information:" ",
    restriction:" ",
    symptoms:["S029", "S109", "S127", "S242", ""]
});

db.diseases.insertOne({
    id:"D117",
    name:"lúpus eritematoso sistémico",
    information:" ",
    restriction:" ",
    symptoms:["S010", "S028", "S029", "S060", "S067", "S073", "S086", "S088", "S122", "S127", "S134", "S144", "S186", "S187", "S203", "S205", "S207", "S208", "S233", "S235", "S239", "S242", "S248", "S296", ""]
});

db.diseases.insertOne({
    id:"D118",
    name:"malária",
    information:" ",
    restriction:" ",
    symptoms:["S017", "S025", "S051", "S073", "S088", "S099", "S113", "S127", "S146", "S161", "S167", "S186", "S208", "S296", "S308", ""]
});

db.diseases.insertOne({
    id:"D119",
    name:"meningite",
    information:" ",
    restriction:" ",
    symptoms:["S024", "S055", "S057", "S083", "S088", "S090", "S127", "S134", "S185", "S197", "S208", "S217", "S226", "S237", "S308", ""]
});

db.diseases.insertOne({
    id:"D120",
    name:"miastenia grave",
    information:" ",
    restriction:" ",
    symptoms:["S001", "S074", "S075", "S076", "S112", "S124", "S135", "S204", "S252"]
});

db.diseases.insertOne({
    id:"D121",
    name:"microangiopatia, trombótica",
    information:" ",
    restriction:" ",
    symptoms:["S023", "S057", "S062", "S122", "S127", "S143", "S154", "S180", "S216", "S237", "S296", ""]
});

db.diseases.insertOne({
    id:"D122",
    name:"mieloma de células plasmáticas",
    information:" ",
    restriction:" ",
    symptoms:["S016", "S040", "S122", "S124", "S147", "S180", "S186", "S219", "S245", "S248", "S296", ""]
});

db.diseases.insertOne({
    id:"D123",
    name:"miocardiopatia hipertensiva",
    information:" ",
    restriction:" ",
    symptoms:["S019", "S057", "S088", "S107", "S124", "S216", "S286", "S307"]
});

db.diseases.insertOne({
    id:"D124",
    name:"miocardite",
    information:" ",
    restriction:" ",
    symptoms:["S073", "S094", "S118", "S122", "S127", "S278", "S291"]
});

db.diseases.insertOne({
    id:"D125",
    name:"mitral",
    information:" ",
    restriction:" ",
    symptoms:["S026", "S049", "S052", "S058", "S059", "S098", "S100", "S120", "S122", "S124", "S129", "S248", "S291", ""]
});

db.diseases.insertOne({
    id:"D126",
    name:"não-Hodgkin - linfoma",
    information:" ",
    restriction:" ",
    symptoms:["S016", "S040", "S113", "S122", "S127", "S140", "S146", "S186", "S233", "S237", "S277", "S282", "S296", ""]
});

db.diseases.insertOne({
    id:"D127",
    name:"nephroblastoma",
    information:" ",
    restriction:" ",
    symptoms:["S021", "S087", "S127", "S142", "S308"]
});

db.diseases.insertOne({
    id:"D128",
    name:"ornitose",
    information:" ",
    restriction:" ",
    symptoms:["S025", "S088", "S095", "S107", "S113", "S118", "S127", "S240", "S291"]
});

db.diseases.insertOne({
    id:"D129",
    name:"pancreatite aguda",
    information:" ",
    restriction:" ",
    symptoms:["S031", "S071", "S087", "S127", "S163", "S167", "S198", "S208", "S261", "S275", "S308"]
});

db.diseases.insertOne({
    id:"D130",
    name:"pancreatite crônica",
    information:" ",
    restriction:" ",
    symptoms:["S073", "S167", "S198", "S208", "S233", "S308"]
});

db.diseases.insertOne({
    id:"D131",
    name:"paroxística nocturna hemoglobinúria",
    information:" ",
    restriction:" ",
    symptoms:["S016", "S054", "S076", "S078", "S088", "S090", "S094", "S095", "S124", "S142", "S143", "S154", "S208", "S225", "S263", "S301", ""]
});

db.diseases.insertOne({
    id:"D132",
    name:"pericardite constritiva crônica",
    information:" ",
    restriction:" ",
    symptoms:["S098", "S120", "S146", "S149", "S206", "S253", ""]
});

db.diseases.insertOne({
    id:"D133",
    name:"pielonefrite",
    information:" ",
    restriction:" ",
    symptoms:["S025", "S085", "S088", "S090", "S091", "S127", "S208", "S275", "S308"]
});

db.diseases.insertOne({
    id:"D134",
    name:"piloto anquilosante",
    information:" ",
    restriction:" ",
    symptoms:["S029", "S060", "S300", ""]
});

db.diseases.insertOne({
    id:"D135",
    name:"pneumonia por legionella",
    information:" ",
    restriction:" ",
    symptoms:["S025", "S057", "S073", "S088", "S094", "S095", "S127", "S183", "S184", "S239", "S240", "S259", "S290", "S291"]
});

db.diseases.insertOne({
    id:"D136",
    name:"pneumotórax",
    information:" ",
    restriction:" ",
    symptoms:["S081", "S091", "S124", "S281", "S291"]
});

db.diseases.insertOne({
    id:"D137",
    name:"Pneumotórax hipertensivo",
    information:" ",
    restriction:" ",
    symptoms:["S051", "S052", "S124", "S163", "S164", "S279"]
});

db.diseases.insertOne({
    id:"D138",
    name:"policitemia",
    information:" ",
    restriction:" ",
    symptoms:["S043", "S088", "S107", "S108", "S111", "S122", "S154", "S249", "S286", "S307", ""]
});

db.diseases.insertOne({
    id:"D139",
    name:"Pontiac - febre",
    information:" ",
    restriction:" ",
    symptoms:["S057", "S088", "S095", "S127", "S134", "S136", "S286", "S291", ""]
});

db.diseases.insertOne({
    id:"D140",
    name:"porfiria",
    information:" ",
    restriction:" ",
    symptoms:["S004", "S055", "S087", "S154", "S208", "S228", "S229", "S245", "S279", ""]
});

db.diseases.insertOne({
    id:"D141",
    name:"potássio deficiente",
    information:" ",
    restriction:" ",
    symptoms:["S061", "S121", "S135", "S244", "S247"]
});

db.diseases.insertOne({
    id:"D142",
    name:"Prolapso da válvula mitral",
    information:" ",
    restriction:" ",
    symptoms:["S022", "S122", "S268", "S279", ""]
});

db.diseases.insertOne({
    id:"D143",
    name:"rabdomiólise",
    information:" ",
    restriction:" ",
    symptoms:["S095", "S127", "S156", "S166", "S200", "S208", ""]
});

db.diseases.insertOne({
    id:"D144",
    name:"rápida - síndrome nefrítica progressiva",
    information:" ",
    restriction:" ",
    symptoms:["S154", "S180", "S224", "S248", "S269", ""]
});

db.diseases.insertOne({
    id:"D145",
    name:"sarcoidose aguda e crônica",
    information:" ",
    restriction:" ",
    symptoms:["S021", "S070", "S109", "S120", "S122", "S124", "S127", "S130", "S176", "S181", "S187", "S226", "S233", "S242", "S287", "S291", "S307", ""]
});

db.diseases.insertOne({
    id:"D146",
    name:"Schwartz - Bartter - Síndrome",
    information:" ",
    restriction:" ",
    symptoms:["S021", "S055", "S088", "S116", "S169", "S208", "S270", "S308", ""]
});

db.diseases.insertOne({
    id:"D147",
    name:"síndrome da artéria espinal anterior",
    information:" ",
    restriction:" ",
    symptoms:["S035", "S082", "S091", "S208", "S213", "S307", "S309"]
});

db.diseases.insertOne({
    id:"D148",
    name:"Síndrome de Cushing",
    information:" ",
    restriction:" ",
    symptoms:["S048", "S119", "S152", "S154", "S159", "S165", "S200", "S219", ""]
});

db.diseases.insertOne({
    id:"D149",
    name:"síndrome de Kawasaki",
    information:" ",
    restriction:" ",
    symptoms:["S060", "S101", "S110", "S114", "S118", "S127", "S187", "S189"]
});

db.diseases.insertOne({
    id:"D150",
    name:"síndrome de Marfan",
    information:" ",
    restriction:" ",
    symptoms:["S105", "S112", "S179", "S195", "S230", ""]
});

db.diseases.insertOne({
    id:"D151",
    name:"síndrome de perda de proteína",
    information:" ",
    restriction:" ",
    symptoms:["S031", "S071", "S073", "S098", "S191", "S233", "S274", ""]
});

db.diseases.insertOne({
    id:"D152",
    name:"síndrome de Reye",
    information:" ",
    restriction:" ",
    symptoms:["S102", "S161", "S184", "S272", "S308", ""]
});

db.diseases.insertOne({
    id:"D153",
    name:"síndrome nefrótica",
    information:" ",
    restriction:" ",
    symptoms:["S031", "S040", "S098", "S148", "S154", "S180", "S248", ""]
});

db.diseases.insertOne({
    id:"D154",
    name:"síndrome respiratória aguda Grave",
    information:" ",
    restriction:" ",
    symptoms:["S006", "S052", "S057", "S124", "S157", "S281", ""]
});

db.diseases.insertOne({
    id:"D155",
    name:"subclávia - síndrome do roubo",
    information:" ",
    restriction:" ",
    symptoms:["S035", "S082", "S091", "S171", "S224", "S229", "S286", "S307", "S309"]
});

db.diseases.insertOne({
    id:"D156",
    name:"tamponamento cardíaco",
    information:" ",
    restriction:" ",
    symptoms:["S120", "S163", "S206", "S253", "S279"]
});

db.diseases.insertOne({
    id:"D157",
    name:"trombocitemia essencial",
    information:" ",
    restriction:" ",
    symptoms:["S088", "S107", "S111", "S113", "S137", "S141", "S156", "S185", "S229", "S277", "S282", "S286", "S307", "S309"]
});

db.diseases.insertOne({
    id:"D158",
    name:"tuberculose",
    information:" ",
    restriction:" ",
    symptoms:["S120", "S122", "S124", "S127", "S169", "S187", "S233", "S277", "S291"]
});

db.diseases.insertOne({
    id:"D159",
    name:"tuberculose, urogenital",
    information:" ",
    restriction:" ",
    symptoms:["S013", "S085", "S142", "S151", "S199", ""]
});

db.diseases.insertOne({
    id:"D160",
    name:"tumor cerebral maligno",
    information:" ",
    restriction:" ",
    symptoms:["S062", "S088", "S208", "S226", "S308"]
});

db.diseases.insertOne({
    id:"D161",
    name:"úlcera, gastroduodenal",
    information:" ",
    restriction:" ",
    symptoms:["S021", "S027", "S170", "S208", "S233", "S308"]
});

db.diseases.insertOne({
    id:"D162",
    name:"uremia",
    information:" ",
    restriction:" ",
    symptoms:["S013", "S015", "S016", "S021", "S031", "S040", "S078", "S099", "S154", "S235", "S239", "S249", "S272", ""]
});

db.diseases.insertOne({
    id:"D163",
    name:"urolitíase",
    information:" ",
    restriction:" ",
    symptoms:["S142", "S202", "S208", "S275", "S308", ""]
});

db.diseases.insertOne({
    id:"D164",
    name:"urosepsia",
    information:" ",
    restriction:" ",
    symptoms:["S025", "S052", "S127", "S163", "S216", "S279", "S281"]
});

db.diseases.insertOne({
    id:"D165",
    name:"vertigem posicional paroxística benigna",
    information:" ",
    restriction:" ",
    symptoms:["S208", "S213", "S305", ""]
});
