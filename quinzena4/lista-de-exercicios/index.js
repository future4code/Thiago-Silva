// ---  Exercícios de INTERPRETAÇÃO DE CÓDIGO  ---

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




// ---  Exercícios de LÓGICA DE PROGRAMAÇÃO  ---

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
// let comparadorDeNumeros = (num1, num2) =>{

//     if(num1 > num2){
//         console.log(`O maior é: ${num1}`)
//     }
//     else if(num2 > num1){
//         console.log(`O maior é: ${num2}`)
//     }

//     if(num1 % num2 === 0){
//         console.log(`${num1} é divisivel por ${num2}`)
//     }else{
//         console.log(`${num1} não é divisivel por ${num2}`)
//     }

//     if(num2 % num1 === 0){
//         console.log(`${num2} é divisivel por ${num1}`)
//     }else{
//         console.log(`${num2} não é divisivel por ${num1}`)
//     }

//     let diferenca = num1 - num2

//     if(diferenca >= 0){
//         console.log(`A diferença entre eles é ${diferenca}`)
//     }else{
//         diferenca *= -1
//         console.log(`A diferença entre eles é ${diferenca}`)
//     }
// }

// let primeiroNumero = Number(prompt("Digite o primeiro número"))
// let segundoNumero = Number(prompt("Digite o segundo número"))

// comparadorDeNumeros(primeiroNumero, segundoNumero)




//  ---  Exercícios de FUNÇÕES  ---
// 1.
// const array = [50, 30, 20, 10, 33, 27, 73, 100, 1920, 7000]

// let numerosExtremos = (array) => {
//     let maiorNumero = 0
//     let menorNumero = Infinity
//     array.forEach((num) => {
//         if(num > maiorNumero){
//             maiorNumero = num
//         }
//         else if(num < menorNumero){
//             menorNumero = num
//         }
//     })
//     imprimirNumeros = document.getElementById("numerosExtremos")

//     imprimirNumeros.innerHTML += `O maior número é ${maiorNumero} e o menor número é ${menorNumero}`
// }

// // numerosExtremos(array)

// // 2.
// const mensagem = () => {
//     alert("Hellow Muyembe - Labenu")
//     numerosExtremos(array)
// }

// mensagem()



// ---  Exercícios de OBJETOS  ---
// 1. Quando temos uma lista de coisas que possuem características
// específicas é necessário utilizar um array de objetos, 
// como exemplo: o cadastro de um cliente em uma loja de ecommerce
// o cliente terá cadastrado o seu nome, endereço, forma de pagamento, telefone, e-mail, dentre outros,
// isso formará um objeto Cliente, como nosso ecommerce tem vários clientes temos um array de objetos Cliente


// 2.
// let criaRetangulo = (lado1, lado2) => {

//     console.log(`Largura: ${lado1}; Altura: ${lado2}`)

//     let perimetro = 2 * (lado1 + lado2)
//     console.log(`perimetro: ${perimetro}`)

//     let area = lado1 * lado2
//     console.log(`Área: ${area}`)
// }

// alert("Digite os lados do retângulo")
// let largura = Number(prompt("Digite a Largura do retângulo"))
// let altura = Number(prompt("Digite a Altura do retângulo"))

// criaRetangulo(largura, altura)



// 3.
// let relacaoAtores = ["Scarlett Johansson","Robert Downey Jr.","Chris Hemsworth"]

// let filme = { titulo: "Os Vingadores", ano: "2012", diretor: "Joss Whedon, Joe Russo, Anthony Russo", atores: relacaoAtores}

// filme.forEach((dados) => {
//     informacoesFilme = document.getElementById("filme")
//     informacoesFilme.innerHTML += `Venha assistir ao filme ${dados.titulo}, de ${dados.ano}, 
//                                     dirigido por ${dados.diretor} e 
//                                     estrelado por ${dados.atores}.`
// })


// 4.
// let pessoa = {nome: "Thiago", email:"thiago@gmail.com", endereco:"rua do alvorecer, 73"}


// let anonimizarPessoa = (pessoa) => {
//     pessoa.nome = "ANÔNIMO"
//     console.log(pessoa)
// }

// anonimizarPessoa(pessoa)




// ---  Exercícios de FUNÇOES DE ARRAY  ---
// 1.
// a e b
// let pessoas = [
//     {nome: "Pedro", idade: 20},
//     {nome: "João" , idade: 10},
//     {nome: "Paula", idade: 12},
//     {nome: "Artur", idade: 89}
// ]

// let arrayAdultos = []
// let arrayCriancas = []

// pessoas.forEach((pessoa)=>{
//     if(pessoa.idade >= 20){
//         arrayAdultos.push(pessoa.nome)
//     }
//     else{
//         arrayCriancas.push(pessoa.nome)
//     }
// })

// console.log(`As pessoas adultas são: ${arrayAdultos}`)
// console.log(`O nome das crianças são ${arrayCriancas}`)

// 2.
// const array = [1, 2, 3, 4, 5, 6]
// a)
// array.forEach((dobro)=>{
//     dobro *= 2
//     console.log(dobro)
// })


// b)
// let mudaParaString = ""
// array.forEach((triploString)=>{
//     triploString *= 3
//     mudaParaString = String(triploString)
//     console.log(mudaParaString)
// })


// c)
// let mudaParaString = ""
// array.forEach((parOuImpar)=>{
//     if(parOuImpar % 2 === 0){
//         mudaParaString = String(parOuImpar)
//         console.log(`${mudaParaString} é par `)
//     }else{
//         mudaParaString = String(parOuImpar)
//         console.log(`${mudaParaString} é impar `)
//     }
// })


// 3.
// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]

// let pessoasPermitidas = []

// pessoas.forEach((pessoa)=>{
//     if(pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60){
//         pessoasPermitidas.push(pessoa.nome)
//     }
    
// })

// console.log(`Pessoas que podem entrar no brinquedo: ${pessoasPermitidas}`)

// //b)
// let pessoasNaoPermitidas = []

// pessoas.forEach((pessoa)=>{
//     if(pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60){
//         pessoasNaoPermitidas.push(pessoa.nome)
//     }
// })

// console.log(`Pessoas que Não podem entrar no brinquedo: ${pessoasNaoPermitidas}`)



// 4.
// const consultas = [
// 	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
// 	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
// 	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
// 	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
// ]

// consultas.forEach((pessoa)=>{
//     if(pessoa.cancelada === false){
//         if(pessoa.genero === "masculino"){

//             console.log(`Olá, Sr. ${pessoa.nome}. Estamos enviando esta mensagem para
//             lembrá-lo da sua consulta no dia ${pessoa.dataDaConsulta}. Por favor, acuse
//             o recebimento deste e-mail.`)

//         }else{
//             console.log(`Olá, Sra. ${pessoa.nome}. Estamos enviando esta mensagem para
//             lembrá-la da sua consulta no dia ${pessoa.dataDaConsulta}. Por favor, acuse
//             o recebimento deste e-mail.`)
//         }
//     }else{
//         if(pessoa.genero === "masculino"){

//             console.log(`Olá, Sr. ${pessoa.nome}. Infelizmente, sua consulta marcada
//             para o dia ${pessoa.dataDaConsulta} foi cancelada. Se quiser, pode entrar em 
//             contato conosco para remarcá-la`)

//         }else{
//             console.log(`Olá, Sra. ${pessoa.nome}. Infelizmente, sua consulta marcada
//             para o dia ${pessoa.dataDaConsulta} foi cancelada. Se quiser, pode entrar em 
//             contato conosco para remarcá-la`)
//         }
//     }
// })



// 5.
const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

contas.forEach((saldo)=>{
    saldo.compras.forEach((valor)=>{
        saldo.saldoTotal -= valor
    })
})

console.log(contas)