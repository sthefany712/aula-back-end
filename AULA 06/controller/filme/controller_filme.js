/***************************************************************************************************************************
 * Objetivo: Arquivo resposável pela validação, tratamento e manipulação de dados para o CRUD de filmes
 * Data: 17/04/2026
 * Autor: Sthefany
 * Versão: 1.0
 ***************************************************************************************************************************/

//Import do arquivo de padronização de mensagens
const config_message = require('../modulo/configMessages.js')

//Import do arquivo DAO para fazer o CRUD do filme no banco de dados
const filmeDAO = require('../../model/DAO/filme/filme.js')

//Faço minhas const baseado nas funções do meu DAO, se tenho 5 funções no DAO, 
//no minimo são 5 controllers, porém, pode ser mais de 5 

//Função para inserir um novo Filme
const inserirNovoFilme = async function (filme,contentType) {

    //Criando um clone do objeto JSON para manipular a sua estrutura local sem
    //modificar a estrutura original
    //let message = config_message NÃO FUNCIONA COMO O CLONE DE UMA VARIÁVEL, já que é um OBJT 

    let message = JSON.parse(JSON.stringify(config_message))
    
    try {

        if (String(contentType).toLocaleUpperCase() == 'APPLICATION/JSON') {

            //Validação de dados para os atributos do Filme (ERRO:400)
            let validar = await validarDados(filme)

            //Se a função validar retornar um JSON de erro, iremos devolver ao APP o erro
            if (validar) {
                return validar
            } else {
                //Encaminha os dados do filme para o DAO
                let result = await filmeDAO.insertFilme(filme)
                if (result) { //status code 201
                    message.DEFAULT_MESSAGE.status = message.SUCCESS_CREATED_ITEM.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_CREATED_ITEM.status_code
                    message.DEFAULT_MESSAGE.message = message.SUCCESS_CREATED_ITEM.message
                } else {//status code 500
                    return message.ERROR_INTERNAL_SERVER_MODEL //Erro 500 model
                }
                return message.DEFAULT_MESSAGE
            }
        } else {
            return message.ERROR_CONTENT_TYPE
        }

    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER// ERRO 500 controller
    }
}


//Função para atualizar um filme
const atualizarNovoFilme = async function () {
    
}

//Função para retornar todos os filmes
const listarFilme = async function () {
    
}

//Função para buscar um filme pelo ID
const buscarFilme = async function () {
    
}

//Função para excluir um filme
const excluirFilme = async function () {
    
}


//Função para validar todos os dados de filme (obrigatórios,qtd de caracteres, etc..)
const validarDados = async function (filme){

    let message = JSON.parse(JSON.stringify(config_message)) //ARRUMAR O MESSAGE

    if(filme.nome == ''|| filme.nome == null || filme.nome == undefined || filme.nome.length > 80) { //vazio é != de null
        message.ERROR_BAD_REQUEST.field = '[NOME] INVÁLIDO' //400
         return message.ERROR_BAD_REQUEST //400

    } else if(filme.data_lancamento == '' || filme.data_lancamento == null || filme.data_lancamento == undefined || filme.data_lancamento.length != 10 ) {
        message.ERROR_BAD_REQUEST.field = '[DATA_LANCAMENTO] INVÁLIDO'
        return message.ERROR_BAD_REQUEST //400

    } else if(filme.duracao == '' || filme.duracao == null || filme.duracao == undefined || filme.duracao.length < 5 ) {
        message.ERROR_BAD_REQUEST.field = '[DURACAO] INVÁLIDO'
        return message.ERROR_BAD_REQUEST //400

    } else if(filme.sinopse == '' || filme.sinopse == null || filme.sinopse == undefined) {
        message.ERROR_BAD_REQUEST.field = '[SINOPSE] INVÁLIDO'
        return message.ERROR_BAD_REQUEST //400

    } else if(isNaN(filme.avaliacao) || filme.avaliacao.length > 3) { //não trato mais coisas pois ele não é obgt, tratei apenas o numero
        message.ERROR_BAD_REQUEST.field = '[AVALIAÇÃO] INVÁLIDO'
        return message.ERROR_BAD_REQUEST //400

    } else if(filme.valor == '' || filme.valor == null == filme.valor == undefined || filme.valor.length > 5 || isNaN(filme.valor)) {
        message.ERROR_BAD_REQUEST.field = '[VALOR] INVÁLIDO'
        return message.ERROR_BAD_REQUEST //400

    } else if(filme.capa.length > 255) { 
        message.ERROR_BAD_REQUEST.field = '[CAPA] INVÁLIDO'
        return message.ERROR_BAD_REQUEST //400
    } else{
         return false
    }    
}


module.exports = {
    inserirNovoFilme,
    atualizarNovoFilme,
    listarFilme,
    buscarFilme,
    excluirFilme
}