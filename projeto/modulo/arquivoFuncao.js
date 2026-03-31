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

getEstadosRegiao('SuL')
function getEstadosRegiao(regiao) {
    regiao = regiao.toUpperCase()
    let infRegiao = {
        regiao: '',
        estados: [],
    }

    estadosCidades.listaDeEstados.estados.forEach(regiaoEstado =>{
       regiaoEstado.regiao = regiaoEstado.regiao.toUpperCase()

        if(regiao == regiaoEstado.regiao){
            infRegiao.regiao = regiaoEstado.regiao
            
            let estado = {
                uf: regiaoEstado.nome, 
                descricao: regiaoEstado.nome
            }
            infRegiao.estados.push(estado) 
        }
    })
   return infRegiao 
}

getCapitalPais()
function getCapitalPais(){

    let capitalBrasil = {
        capitais: [], 
    }
 
    estadosCidades.listaDeEstados.estados.forEach(capital => {
        if(capital.capital_pais){
            let informaçõesCapital = {
                capital_atual: capital.capital_pais.capital,
                uf: capital.sigla,
                descricao: capital.nome,
                regiao: capital.regiao,
                capital_pais_ano_inicio: capital.capital_pais.ano_inicio,
                capital_pais_ano_terminio: capital.capital_pais.ano_fim
            }

            capitalBrasil.capitais.push(informaçõesCapital)
        }  
    })
      return capitalBrasil
}

getCidades('mg')
function getCidades(filtroEstado){
    filtroEstado = filtroEstado.toUpperCase()

    let infoCidades = {
        uf: '',
        descricao: '',
        quantidade_cidades: 0,
        cidades: []
    }

    estadosCidades.listaDeEstados.estados.forEach(estado => {

        if(filtroEstado == estado.sigla.toUpperCase()){
            infoCidades.uf = estado.sigla
            infoCidades.descricao = estado.nome
           
            estado.cidades.forEach(cidade => {      //forEach pois é um array 
                infoCidades.cidades.push(cidade.nome)
                infoCidades.quantidade_cidades = infoCidades.quantidade_cidades + 1
            });
        }
    })
       return infoCidades 
}