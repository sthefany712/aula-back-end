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
const inserirNovoFilme = async function (filme) {

    //Criando um clone do objeto JSON para manipular a sua estrutura local sem
    //modificar a estrutura original
    //let message = config_message NÃO FUNCIONA COMO O CLONE DE UMA VARIÁVEL, já que é um OBJT 

    let message = JSON.parse(JSON.stringify(config_message)) //ARRUMAR O MESSAGE

    //Validação de dados para os atributos do Filme (Status 400)
    if(filme.nome == ''|| filme.nome == null || filme.nome == undefined || filme.nome.length > 80) { //vazio é != de null
        message.ERROR_BAD_REQUEST.field = '[NOME] INVÁLIDO'
        // return message.ERROR_BAD_REQUEST //400

    } else if(filme.data_lancamento == '' || filme.data_lancamento == null || filme.data_lancamento == undefined || filme.data_lancamento != 10 ) {
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
        let result = await filmeDAO.insertFilme(filme)
        if(result){ //201
            message.DEFAULT_MESSAGE.status = message.SUCESS_CREATED_ITEM.status
            message.DEFAULT_MESSAGE.status_code = message.SUCESS_CREATED_ITEM.status_code
            message.DEFAULT_MESSAGE.message = message.SUCESS_CREATED_ITEM.message
        }else{ //400
            message.DEFAULT_MESSAGE.status = message.ERROR_BAD_REQUEST.status
            message.DEFAULT_MESSAGE.status_code = message.ERROR_BAD_REQUEST.status_code
            message.DEFAULT_MESSAGE.message = message.ERROR_BAD_REQUEST.message
            message.DEFAULT_MESSAGE.field = message.ERROR_BAD_REQUEST.field
        }

        return message.DEFAULT_MESSAGE
    }
}

//Função para atualizar um filme
const atualizarFilme = async function () {
    
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

module.exports = {
    inserirNovoFilme
}