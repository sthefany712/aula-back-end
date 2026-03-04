//Função ter um nome em verbo, e deixar claro o que está fazendo
//Isso aqui função
//Uma função precisa retornar algo
const gerarImc = function(peso,altura){
    let peso1 = Number(peso)
    let altura1 = Number(altura) 

    //VER EXERCICIO 2

    //variável
    const resultadoImc = Number(peso1) / (Number(altura1) ** 2)
    return resultadoImc
}

//Criei uma função para a condição, pois não deve ficar junta com a conta
//Na grande maioria das vezes uma função vai precisar receber um parâmetro/argumento
//Isso porque a função precisa receber os dados externos para dentro dela, para processar e retornar algo
// ampliando assim o seu potencial de uso
//Entretando, em certos casos elas podem não precisar, isso acontece em procedimentos que
//executam os mesmos passos toda vez que são chamados.
// (ex: limparTela(), tocarCampainha()).

    const condicionandoImc = function(peso1,altura1){
        let valor = gerarImc(peso1,altura1) //gerarImc(peso1,altura1) pertence a primeira função
        if(valor < 18.5){
            return 'Abaixo do peso'
        }else if(valor == 18.5 || valor <= 24.9){
            return 'peso normal'
        }else if(valor == 25 || valor <= 29.9){
            return 'Acima do peso (sobrepeso) '
        }else if(valor == 30 || valor <= 34.9){
            return 'Obesidade 1'
        }else if(valor == 35 || valor <= 39.9){
             return 'Obesidade 2'
        }else if(valor > 40){
            return 'Obesidade 3'
        }    
        
        //Anotções importantes:
        //Esse VALOR é uma variável da segunda função: condicionandoImc 

        //if (se...)
        // else if (senão, se...)
        // else (senão...)
    }
    

module.exports = {
    gerarImc, condicionandoImc,
    

   }

