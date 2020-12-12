// ---  Exercícios de interpretação de código  ---

// 1. Converte um valor de dolar para real
// chama a função com o valor 100, 
// solicita ao usuário a cotação atual do dolar, 
// retorna a cotação multiplicado pelo valor em dolar, 
// este valor é atribuído a variável meuDinheiro que é impressa no console.

// 2. faz o cálculo do rendimento dependendo de onde é investido
// chama a função investeDinheiro e atribui o valor ação com valor 150 e tesouro direto com valor 200
// entra no case do tipo de investimento correspondente, 
// multiplica o valor pelo rendimento correspondente, que já é atribuido a variável valorAposInvestimento
// que sai da função e 
// é atribuida a variável novoMontante e segundoMontante respectivamente, que são impressos no console

// 3. imprime o tamanho da array número, do array de números pares e outro array de números impares
// passa o array numero por numero e testa se é par ou impar
// se for par inclui no array1 se for impar atribui ao array2

// 4. imprime o menor e maior número do array numeros
// passa o array no for of e compara com o numero anterior que passou, 
// atribui o menor número na variável numero1 e atribui o maior número na variável numero2
// imprime o valor da variável numero1(-10) e da variável numero2(1590)


// ---  Exercícios de Lógica de Programação  ---

// 1.
// const array = [50, 30, 20, 10, 33, 27, 73, 100, 1920, 3500]

// console.log("Formas de listar Array")

// for(let i = 0; i < array.length; i++){
//     console.log(array[i])
// }

// for(let numero of array){
//     console.log(numero)
// }

// array.forEach((index) => {
//     console.log(index)
// })


// 2.
// a) false
// b) false
// c) true
// d) true
// e) true


// 3. Não funciona, a variável deve ser um let, para pegar os vários número, não será um número único
// o while está fazendo uma comparação enter 0 e nenhum valor definido
// se while conseguisse executar o cosole daria 0 somente
// let quantidadeDeNumerosPares = Number(prompt("escreva um número"))
// let i = 0
// while(quantidadeDeNumerosPares > 0) {
//     console.log(i*2)
//     i++
//     quantidadeDeNumerosPares--

// }


// 4.
// let triangulo = (ladoA, ladoB, ladoC) => {
//     if (ladoA === ladoB && ladoB === ladoC) {
//         alert("Triângulo Equilátero")
//     }
//     else if (ladoA === ladoB || ladoB === ladoC || ladoC === ladoA) {
//         alert("Triângulo Isósceles")
//     }
//     else if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA) {
//         alert("Triângulo Escaleno")
//     }
// }

// alert("Digite os lados para saber que tipo é o triângulo:")

// let ladoA = prompt("Digite o primeiro lado do triângulo")
// let ladoB = prompt("Digite o segundo lado do triângulo")
// let ladoC = prompt("Digite o terceiro lado do triângulo")

// triangulo(ladoA, ladoB, ladoC)


// 5.
let comparadorDeNumeros = (num1, num2) =>{
    
    if(num1 > num2){
        console.log(`O maior é: ${num1}`)
    }
    else if(num2 > num1){
        console.log(`O maior é: ${num2}`)
    }

    if(num1 % num2 === 0){
        console.log(`${num1} é divisivel por ${num2}`)
    }else{
        console.log(`${num1} não é divisivel por ${num2}`)
    }

    if(num2 % num1 === 0){
        console.log(`${num2} é divisivel por ${num1}`)
    }else{
        console.log(`${num2} não é divisivel por ${num1}`)
    }

    let diferenca = num1 - num2

    if(diferenca >= 0){
        console.log(`A diferença entre eles é ${diferenca}`)
    }else{
        diferenca *= -1
        console.log(`A diferença entre eles é ${diferenca}`)
    }
}

let primeiroNumero = Number(prompt("Digite o primeiro número"))
let segundoNumero = Number(prompt("Digite o segundo número"))

comparadorDeNumeros(primeiroNumero, segundoNumero)

