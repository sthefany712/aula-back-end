/***********************************************************************************
 * Objetivo: criar todas as funções em um arquivo a parte para que no futuro possamos integrar
em uma “API bem legal”, que terá como objetivo trazer informações sobre os
estados do Brasil.
 * Data: 13/03/2026
 * Versão: 1.0
 * Autor: Sthefany Correia 
 **********************************************************************************
 */

let estadosCidades = require('./estados_cidades.js') //arquivo

getListaDeEstados(estadosCidades.listaDeEstados) //arquivo e variável do arquivo como parâmetro

function getListaDeEstados(listaDeEstados) {

    let siglaQuantidade = {
        uf: [],
        quantidade: 0
    }
  
    listaDeEstados.estados.forEach(estado => {
         siglaQuantidade.uf.push(estado.sigla) //push pois tenho array
         siglaQuantidade.quantidade = siglaQuantidade.quantidade + 1 //para contar a quantidade de siglas
    })
    return siglaQuantidade
}

getDadosEstado('sp')
function getDadosEstado(estadoSigla) {
    estadoSigla = estadoSigla.toUpperCase()

    let siglaDadoEstado = {
        uf: '',
        descricao: '',
        capital: '',
        regiao: ''
    }

    estadosCidades.listaDeEstados.estados.forEach(dados => {
      
        if(estadoSigla == dados.sigla){
            siglaDadoEstado.uf = dados.sigla
            siglaDadoEstado.descricao = dados.nome
            siglaDadoEstado.capital = dados.capital
            siglaDadoEstado.regiao = dados.regiao
        }
    })

    return siglaDadoEstado
}

getCapitalEstado('mt')

function getCapitalEstado(capitalS) {
    capitalS = capitalS.toUpperCase()

    let capitalUf = {
        uf: '', descricao: '', capital: ''  
    }
    
    estadosCidades.listaDeEstados.estados.forEach(capital => {
        
        if(capitalS == capital.sigla){
            capitalUf.uf = capital.sigla
            capitalUf.descricao = capital.nome
            capitalUf.capital = capital.capital
        }
    })
    return capitalUf
}

getEstadosRegiao('Norte')
function getEstadosRegiao(regiao) {

    let infRegiao = {
        regiao: '',
        estados: [],
    }

    estadosCidades.listaDeEstados.estados.forEach(regiaoEstado =>{
       
        if(regiao == regiaoEstado.regiao){
            infRegiao.regiao = regiaoEstado.regiao
            
            let estado = {
                uf: regiaoEstado.nome, 
                descricao: regiaoEstado.nome
            }
            infRegiao.estados.push(estado) 
            
        }
    })
    console.log(infRegiao)

}
