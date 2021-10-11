const MongoClient = require('mongodb').MongoClient;

// const uri = 'mongodb://localhost:27017';
const uri = 'mongodb+srv://demo:9NZ2uFTAi8Hfw8mK@cluster0.z7qds.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const mongo = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function list(request, response) {

    mongo.connect(err => {
        
        const documents = mongo.db("sample_persons").collection("alunos");

        documents.find().toArray(function(err, result) {
        
            response.status(200).json(result);
        
        });
    });
}

async function create(request, response) {
    
    mongo.connect(err => {
        
        const documents = mongo.db("sample_persons").collection("alunos");
    
        const result = documents.insertOne(request.body);

        response.status(200).json(`Aluno criado ${request.body.nome} criado com sucesso.`);
    });
}

module.exports.list = list;
module.exports.create = create;