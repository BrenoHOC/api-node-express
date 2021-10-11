const AlunosController = require('../controllers/AlunosController');

module.exports = app => {

     app.get("/aluno/listar", (req, resp) => {
         AlunosController.list(req, resp)
     })
     
     app.post("/aluno/cadastrar", (req, resp) => {
        AlunosController.create(req, resp)
    })
}