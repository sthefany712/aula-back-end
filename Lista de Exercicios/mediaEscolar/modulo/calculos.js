const valor = function(nota1, nota2, nota3,nota4){
    let notaUm = Number(nota1)
    let notaDois = Number(nota2)
    let notaTres = Number(nota3)
    let notaQuatro = Number(nota4)

    const media = (Number(notaUm) + Number(notaDois) + Number(notaTres) + Number(notaQuatro)) /4
    return media
}

const limitarValores = function (nota1,nota2,nota3,nota4){
    let notas = valor(nota1,nota2,nota3,nota4)
    if(notas <= 0 || notas >= 100){
        return 'ERRO'

    }

}
  


    


   

 module.exports = {
     valor, limitarValores
 }






// const registrarDados = function(nomeDoAluno, nomeDoProfessor, 
//     sexoDoProf, sexoDoAluno, nomeDoCurso, nomeDaDisciplina,
//     nota1,nota2,nota3,nota4){

//     let nomeAluno = String(nomeDoAluno).toUpperCase() 
//     let nomeProf = String(nomeDoProfessor).toUpperCase()  
//     let sexoProf = String(sexoDoProf).toUpperCase()  
//     let sexoAluno = String(sexoDoAluno).toUpperCase()  
//     let nomeCurso = String(nomeDoCurso).toUpperCase()  
//     let nomeDiscip = String(nomeDaDisciplina).toUpperCase()  
//     let notaUm = Number(nota1)
//     let notaDois = Number(nota2)
//     let notaTres = Number(nota3)
//     let notaQuatro = Number(nota4)

//     return {
//         nomeAluno, nomeProf,
//         sexoProf, sexoAluno,
//         nomeCurso, nomeDiscip,
//         notaUm, notaDois, notaTres, notaQuatro
//     }
