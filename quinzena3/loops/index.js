// EXERCÍCIO 1
// faz o incremento da contagem a cada loop, assim somando 0+1+2+3+4 e colocando na variavel valor

// EXERCÍCIO 2
// a.
// será impresso no console números maiores que 18, desta forma:
// 19
// 21
// 23
// 25
// 27
// 30

// b.
// sim. console.log(numero) logo abaixo do for... of... vai imprimir cada indice, pois a cada loop o numero troca de posição.

// DESAFIO 1 - interpretação de código:
// 0000

// EXERCÍCIO 3
// let arrayOriginal = [10,25,31,49,50,67,79,18,29]
// console.log(arrayOriginal)
// a.
// for(numero of arrayOriginal){
//     console.log(numero)
// }

// b.
// let dividido = 0
// for(numero of arrayOriginal){
//     dividido = numero/10
//     console.log(dividido)
// }

// c.
// let novoArray = []
// for(numero of arrayOriginal){
//     if(numero%2 === 0){
//         novoArray.push(numero)
//     }
    
    
// }

// console.log(novoArray)

// d.
// let novoArray = []
// let numeroString = ""
// let index = 0
// let tamanho = arrayOriginal.length
// for(index = 0; index < tamanho; index++){
//         indexArrayOriginal = arrayOriginal[index]
//         numeroString = String(indexArrayOriginal)
//         novoArray.push(numeroString)
//         indexString = String(index)
//         console.log("O elemento do index ", indexString, " é ", numeroString)
// }


// e.
// let numeroAtual = 0
// let valorMaximo = 0

// for(numero of arrayOriginal){
//         if(numero > valorMaximo){
//                 valorMaximo = numero
//         }        
// }

// let valorMinimo = valorMaximo
// for(numero of arrayOriginal){
//         if(numero < valorMinimo){
//                 valorMinimo = numero
//         }        
// }

// console.log("O maior número é ,", valorMaximo," e o menor é ", valorMinimo)

//DESAFIO 2

// const numeroP1 = Number(prompt("Player 1 - Digite um número"))
// let chutesP2
// let tentativas = 0

// console.log("Vamos Jogar!")

// while(chutesP2 !== numeroP1){
//     chutesP2 = Number(prompt("Player 2 - Chute um número"))
//     tentativas++
//     console.log("O número chutado foi:", chutesP2)
//     if(chutesP2 !== numeroP1){

//         if(chutesP2 > numeroP1){
//             alert("Errou. O número escolhido é MENOR. Aperte Enter para continuar")
//         }else {
//             alert("Errou. O número escolhido é MAIOR. Aperte Enter para continuar")
//         }   
//     }else if(chutesP2 === numeroP1){
//         console.log("Acertou!!")
//         console.log("O número de tentativas foi: ", tentativas)
//     }else{
//         console.log("ocorreu um erro, por gentileza, reinicie o jogo")
//     }
// }

// // DESAFIO 3

// const numeroComputador = Math.floor((Math.random() * 100) + 1)

// let chutes
// let tentativas = 0

// console.log("Vamos Jogar!")

// while(chutes !== numeroComputador){
//     chutes = Number(prompt("Chute um número de 1 a 100"))
//     tentativas++
//     console.log("O número chutado foi:", chutes)
//     if(chutes !== numeroComputador){

//         if(chutes > numeroComputador){
//             alert("Errou. O número escolhido é MENOR. Aperte Enter para continuar")
//         }else {
//             alert("Errou. O número escolhido é MAIOR. Aperte Enter para continuar")
//         }   
//     }else if(chutes === numeroComputador){
//         console.log("Acertou!!")
//         console.log("O número de tentativas foi: ", tentativas)
//     }else{
//         console.log("ocorreu um erro, por gentileza, reinicie o jogo")
//     }
// }