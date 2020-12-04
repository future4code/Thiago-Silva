
// Exercícios de interpretação de código
// EXERCÍCIO 1
// a. 10 50
// b. 50

// EXERCÍCIO 2
// a. Darvas Goli
// b. será impresso no console Amanda e Caio, que são a posição 0 e 1 que são menores que 2

// EXERCÍCIO 2
// esta função pega os números pares do primeiro array - nome melhor: arrayPar

// Exercícios de escrita de código
// EXERCÍCIO 4
// a.
// function Eu(nome,idade, cidade, ocupacao){
//     console.log("Eu sou ",nome, " tenho ", idade," anos, moro em", cidade," e sou ",ocupacao,".")
// }
// Eu("Thiago","31","Curitiba","Estudante")

// b.
// function informacoes(nome,idade, cidade, ocupacao){
//     console.log("Eu sou ",nome, " tenho ", idade," anos, moro em", cidade," e ",ocupacao," estudante.")
// }
// let nome = prompt("Qual é o seu nome?")
// let idade = Number(prompt("Qual é a sua idade?"))
// let cidade = prompt("Onde você mora?")
// let ocupacao = confirm("Você é estudante")

// if(ocupacao){
//     ocupacao = "sou"
// }else(
//     ocupacao = "não sou"
// )

// informacoes(nome, idade, cidade, ocupacao)

// EXERCÍCIO 5
// a.
// function soma(numero1, numero2){
//     let calculo = numero1 + numero2
//     return calculo
// }

// console.log("Resultado: ",soma(5,3))

// b.
// function maiorOuIgual(numero1, numero2){
//     let comparativo
//     if(numero1 >= numero2){
//         comparativo = true
//         return comparativo
//     }else{
//         comparativo = false
//         return comparativo
//     }
// }
// console.log(maiorOuIgual(1,30))

// c.
// function mensagem(frase){
//     for(let contador = 0; contador < 10; contador++){
//         console.log(frase)
//     }
// }
// mensagem("Acredite nos planos de Deus para sua vida")

// EXERCÍCIO 6

// a.
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// function metodo(array){
//     const quantidade = array.length
//     return quantidade
// }

// console.log(metodo(array))

// b.
function pares(array){
    let condicao
    for(numero of array){
        condicao = (numero % 2 === 0)
        // console.log(condicao)
    }
    return condicao
}

// pares(array)

// c.
// function quantidade(numeros){
//     let contador = 0
//     for(indice of numeros){
//         if(indice % 2 === 0){
//             contador++
//         }
//     }
//     return console.log("Este array possui ", contador," numeros pares")
// }

// quantidade(array)

// d.
function quantidade(numeros){
    let contador = 0
    for(indice of numeros){
        if(pares(array)){
            contador++
        }
    }
    return console.log("Este array possui ", contador," numeros pares")
}

quantidade(array)