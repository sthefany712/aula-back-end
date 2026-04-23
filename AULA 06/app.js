/*********************************************************************************************************
 * 
 * 
 * Para trabalhar com o body precisa instalar:  npm install body-parser
 * 
 ********************************************************************************************************/

//Import das dependencias para criar a API
const express       = require('express') //require == exigir
const cors          = require('cors')
const bodyParser    = require('body-parser')

//Import das CONTROLLERS do projeto
const controllerFilme = require('./controller/filme/controller_filme.js')

//Criando um objeto para manipular dados do body da API em formato JSON
const bodyParserJSON = bodyParser.json()

//Criando um objeto para manipular o express
const app = express()

//Conjunto de permissões a serem aplicadas no CORS da API
const corsOptions = {
    origin: ['*'],                                      //A origem da requisição, podendo ser um IP ou '*'- TODOS
    methods: 'GET, POST, DELETE, OPTIONS',              //São os verbos que serão liberados na API (GET, POST, PUT e DELETE)
    allowedHeaders: ['Content-type', 'Autorization']    //São permissões de cabeçalho do CORS 
}

//Configura as permissões da API atraves do CORS 
app.use(cors(corsOptions))

//ENDPOINTS
app.post('/v1/senai/locadora/filme', bodyParserJSON, async function (request, response){
    //Recebe o conteúdo dentro do body da requisição
    let dados = request.body
    
     //Recebe o content type da requisição para validar se é um Json
    let contentType = request.headers['content-type']

    let result = await controllerFilme.inserirNovoFilme(dados, contentType)

    response.status(result.status_code)
    response.json(result)

})

app.listen(8080, function(){
    console.log('API funcionando e aguardando novas requisições ...')
}) 


// {
//     "nome": "teste",
//     "data_lancamento": "2000-10-10",
//     "duracao": "01:20:00",
//     "sinopse": "teste 2",
//     "avaliacao": "1",
//     "valor": "60",
//     "capa": "mario"

// }