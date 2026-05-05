/*********************************************************************************************************
 * 
 * Para trabalhar com o bodyParser precisa instalar:  npm install body-parser
 * 
 ********************************************************************************************************/

//Import das dependencias para criar a API
const express       = require('express') //require == exigir
const cors          = require('cors')
const bodyParser    = require('body-parser')

//Import das CONTROLLERS do projeto
const controllerFilme = require('./controller/filme/controller_filme.js')

//Criando um objeto para manipular dados do body da API em formato JSON
const bodyParserJSON = bodyParser.json() //é usado quando for enviar um JSON p/ a API

//Criando um objeto para manipular o express
const app = express()

//Conjunto de permissões a serem aplicadas no CORS da API
const corsOptions = {
    origin: ['*'], //A origem da requisição, podendo ser um IP/URL ou '*'- TODOS
    methods: 'GET, POST, DELETE, OPTIONS', //São os verbos que serão liberados na API (GET, POST, PUT e DELETE)
    allowedHeaders: ['Content-type', 'Autorization'] //São permissões de cabeçalho do CORS 
}

//Configura as permissões da API atraves do CORS 
app.use(cors(corsOptions))

//ENDPOINTS 
//(O CRUD basico mantém a mesma assinatura da URL, muda apenas o post,get... o verbo que diferencia, por ex:
// /v1/senai/locadora/inserir/filme, não precisa escrever INSERIR, pois o get já significa isso.)

app.post('/v1/senai/locadora/filme', bodyParserJSON, async function (request, response){
    //Recebe o conteúdo dentro do body da requisição 
    //Front vai enviar os dados através do body
    //request recebe os dados do Front-end
    let dados = request.body
    
     //Recebe o content type da requisição para validar se é um Json
    let contentType = request.headers['content-type']

    //Envia para a função (processa)
    let result = await controllerFilme.inserirNovoFilme(dados, contentType)

    //Devolve uma resposta p/ o front-end
    response.status(result.status_code)
    response.json(result)
})

app.get('/v1/senai/locadora/filme', async function (request,response) {
    let result = await controllerFilme.listarFilme()
    
    response.status(result.status_code)
    response.json(result)
})

app.get('/v1/senai/locadora/filme/:id', async function (request, response) {
    let id = request.params.id
    
    let result = await controllerFilme.buscarFilme(id)

    response.status(result.status_code)
    response.json(result)
})

app.put('/v1/senai/locadora/filme/:id', bodyParserJSON, async function (request,response) {
    //Recebe o contety type da requisição
    let contentType = request.headers['content-type']
    
    //Recebe o ID do registro a ser atualizado
    let id = request.params.id
    //Recebe os dados enviados no corpo da requisição
    let dados = request.body

    //Chama a função de atualizar na controller e encaminha os dados, id e contenty-type
    //obedecendo a ordem de criação na função da controller
    let result = await controllerFilme.atualizarNovoFilme(dados, id, contentType) //mandar os agurmentos na ordem da controller

    response.status(result.status_code)
    response.json(result)
})

app.delete('/v1/senai/locadora/filme/:id', async function (request, response) {

    let id = request.params.id

    let result = await controllerFilme.excluirFilme(id)

    response.status(result.status_code)
    response.json(result)
})

app.listen(8080, function(){
    console.log('API funcionando e aguardando novas requisições...')
}) 


//Sempre que quiser filtrar pela PK (chave primária/ID) ela TEM que vir via parametro
//Filtros que são via Query

// {
//     "nome": "teste",
//     "data_lancamento": "2000-10-10",
//     "duracao": "01:20:00",
//     "sinopse": "teste 2",
//     "avaliacao": "1",
//     "valor": "60",
//     "capa": "mario"

// }