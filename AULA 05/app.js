/********************************************************************************************************************************************************
 * Objetivo: Arquivo responsável pela criação da API do projeto de Estados e Cidades (Sempre no app)
 * Data: 01/Abril/2026
 * Autor: Sthefany Correia
 * Versão: 1.0
 * 
 * /*  API
    HTTP(Verbos)
     - get      (Solicitar Dados) - PEGAR
     - post     (Solicitar a inserção de um novo item) - PUBLICAR
     - put      (Solicitar uma alteração) - COLOCAR
     - delete   (Solicitar um delete) - APAGAR

     Vamos ultilizar a biblioteca EXPRESS
     Buscar no npm que tem todas as dependencias para ser instaladas no node

     Instalação do EXPRESS  - npm install express --save
        Dependencia responsável pela utilização do protocolo HTTP para 
        criar uma API

     Instalação do CORS     - npm install cors --save
        Dependencia responsável pelas configurações a serem realizadas para 
        a permissão de acesso da API

        ESTRUTURA BASE DA API!!!!!
*******************************************************************************************************************************************************/ 

//1 Passo: Import das dependencias para criar a API
const express   = require('express') //require == exigir
const cors      = require('cors')

//2 Passo: Criando um objeto para manipular o express
const app = express()

//3 Passo: Conjunto de permissões a serem aplicadas no CORS da API
const corsOptions = {
    origin: ['*'], //A origem da requisição, podendo ser um IP ou '*'- TODOS
    methods: 'GET', //São os verbos que serão liberados na API (GET, POST, PUT e DELETE)
    allowedHeaders: ['Content-type', 'Autorization'] //São permissões de cabeçalho do CORS 
}

//4 Passo: Configura as permissões da API atraves do CORS 
app.use(cors(corsOptions))

//Exportando arquivo das funções
const estadosCidades = require('./modulo/arquivoFuncao.js')

//Response -> Retornos da API (Se a API precisar RESPONDER) (req)
//Request -> São chegadas de dados da API (Sempre que API precisar RECEBER) (res)
//sempre que o back fizer um response ele vai montar json e status_code. 
//Precisa mandar 2 response, um com json e outro com status_code (é um código que representa oq está acontecendo c/ a minha API,
//Nao pode inverter os argumentos req e res

//Criando EndPoint para a API

//Retorna dados dos estados filtrando pelo uf
app.get('/v1/senai/dados/estado/', function(request, response){ 
    // /:uf é a minha variável que estou criando na minha url, os : são OBRIGATÓRIOS
    // http://localhost:8080///v1/senai/dados/estado/sp - como coloco na pesquisa
    // console.log(request.params.uf)

    //Recebe a variavel UF através da URL separao pela / 
    //'/v1/senai/dados/estado/uf'
    // let sigla = request.params.uf

    //let sigla = request.params.uf // você coloca apenas query e a variável que vai usar


     //Recebe a variavel UF via Query Params, que são variáveis 
        //após o símbolo de ?
    let sigla = request.query.uf
    let estado = estadosCidades.getDadosEstado(sigla)

    if(estado){
        response.json(estado)
        response.status(200)
    }else{
        response.status(404)
        response.json({"message": "O estado informado não foi encontrado"})
        
    }

    // response.json(estado)
    // response.status(200)
    
    //.status(): É o "humor" da resposta (sucesso, erro, alerta).
    //.json(): É o "conteúdo" da resposta (o presente dentro da caixa).
})

//Retorna dados da capital de cada estado filtrando pelo uf
app.get('/v1/senai/capital/estado/:uf', function(request, response){

    let capitalS = request.params.uf
    let estado = estadosCidades.getCapitalEstado(capitalS)

    if(estado){
        response.status(200)
        response.json(estado)
    }else{
        response.json({"message": "O estado informado não foi encontrado"})
        response.status(404)
    }
})

//Retorna dados dos estados que forma capitais do Brasil
app.get('/v1/senai/estados/capital/brasil', function(request, response){

    let estado = estadosCidades.getCapitalPais()
        response.status(200) 
        response.json(estado)    
})

//Retorna dados dos estados filtrando pela região
app.get('/v1/senai/estados/regiao/:regiao', function(request, response){

    let regiao = request.params.regiao
    let estado = estadosCidades.getEstadosRegiao(regiao)
    
    if(estado){
        response.status(200)
        response.json(estado)
    }else{
        response.status(404)
        response.json({"message": "O estado informado não foi encontrado"})
       
    }
})

//Retorna dados dos estados filtrando pelo uf
app.get('/v1/senai/cidades/estados/:uf', function(request, response){   

    let cidades = request.params.uf
    let estado = estadosCidades.getCidades(cidades)
    
    if(estado){
        response.status(200)
        response.json(estado)
    }else{
        response.status(404)
        response.json({"message": "O estado informado não foi encontrado"})
        }
})

//Retorna os estados
app.get('/v1/senai/estados', function(request, response){

    //Chama a função que retorna a lista de estados
    let estados = estadosCidades.getListaDeEstados()

    response.status(200)
    response.json(estados)
    
}) //coloco por ultimo para que os demais enPoints sejam validados primeiro, já que tem outros que possuem o inicio parecido


app.get('/v1/senai/help', function(request, response){
    let docAPI = {
        "API-description": "API para manipular dados de Estados e Cidades",
        "date": "2026-04-02",
        "Development": "Sthefany",
        "Version": "1.0",
        "Endpoints": [
            {
                "id": 1,
                "Rota 1": "/v1/senai/estados",
                "Obs": "Retorna a lista de todos os estados"
            },
            {
                "id": 2,
                "Rota 1": "/v1/senai/dados/estado/sp",
                "Obs": "Retorna os dados do estado filtrando pela sigla do estado",
            },
            {
                "id": 3,
                "Rota 1": "/v1/senai/capital/estado/sp",
                "Obs": "Retorna os dados da capital filtrando pela sigla do estado",
            },
            {
                "id": 4,
                "Rota 1": "v1/senai/estados/capital/brasil",
                "Obs": "Retorna todos os estados que formaram a capital do Brasil",
            },
            {
                "id": 5,
                "Rota 1": "/v1/senai/estados/regiao/sul",
                "Obs": "Retorna todos os estados referente a uma regiao ",
            },
            {
                "id": 6,
                "Rota 1": "/v1/senai/cidades/estados/:uf",
                "Obs": "Retorna todos as cidades filtrando pela sigla do estado ",
            }        
        ]
    }

    response.status(200)
    response.json(docAPI)
})

//Serve para inicializar a API para receber requisições (geralmente colocamos no final do código)
app.listen(8080, function(){
    console.log('API funcionando e aguardando novas requisições ...')
}) 

//Não ficar abrindo terminais, se mexer em algo, dar ctr C e rodar novamente !!!!!
//Cada endPoint (url) retorna um Json
