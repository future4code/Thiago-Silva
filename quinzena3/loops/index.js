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
let arrayOriginal = [10,25,31,49,50,67,79,18,29]
console.log(arrayOriginal)
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