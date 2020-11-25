// 1.
// a. true
// b. true
// c. true
// e. boolean

// 2.
// a. undefined
// b. null
// c. 11
// d. 3
// e. 3 19 5 6 7 8 9 10 11 12 13
// f. 10

// Escrita de código:

// 1.
// let suaIdade = Number(prompt("Qual é a sua idade"))
// let idadeAmigo = Number(prompt("Qual é a idade do(a) seu(sua) melhor amigo(a)?"))

// let maiorIdade = suaIdade > idadeAmigo

// console.log("Sua idade é maior do que a do seu melhor amigo?", maiorIdade)

// let diferencaIdade = suaIdade - idadeAmigo
// console.log("A diferença entre as idades é de ", diferencaIdade, " anos")


// 2.
// let numeroPar = Number(prompt("Por favor, insira um número par:"))
// let resto = numeroPar%2
// console.log("O resto deste número divido por 2 é: ", resto)
// o resto da divisão dos números pares por 2, é sempre 0

// se o usuário inserir um número impar, o resto da divisão por 2 será sempre 1


// 3.
// let listaDeTarefas = []

// listaDeTarefas.push(prompt("Quais tarefas você precisa realizar hoje?"))
// listaDeTarefas.push(prompt("Quais tarefas você precisa realizar hoje?"))
// listaDeTarefas.push(prompt("Quais tarefas você precisa realizar hoje?"))

// console.log(listaDeTarefas)

// let indice = prompt("Digite o índice da sua tarefa (0,1 ou 2):")

// listaDeTarefas.splice(indice, 1)

// console.log(listaDeTarefas)


// 4.
// const nomeDoUsuario = prompt("Qual é o seu nome?")
// const emailDoUsuario = prompt("Qual é o seu e-mail?")

// console.log("O e-mail ", emailDoUsuario," foi cadastrado com sucesso. Seja bem-vinda(o), ", nomeDoUsuario,"!")

//  DESAFIO:

// 1.

// a)

// let kelvin = 0
// let fahrenheit = 77

// kelvin = (fahrenheit - 32)*5/9 + 273.15
// console.log(fahrenheit,"ºF é igual a ", kelvin,"K")

// // b)

// let celsius = 80

// fahrenheit = celsius *9/5 + 32
// console.log(celsius,"ºC é igual a ", fahrenheit,"ºF")

// // c)

// celsius = 30
// fahrenheit = celsius *9/5 + 32
// kelvin = (fahrenheit - 32)*5/9 + 273.15
// console.log(celsius,"ºC é igual a ", fahrenheit,"ºF e ", kelvin ,"K")


// // d)
// celsius = prompt("Insira a temperatura em Celsius")
// fahrenheit = celsius *9/5 + 32
// kelvin = (fahrenheit - 32)*5/9 + 273.15
// console.log(celsius,"ºC é igual a ", fahrenheit,"ºF e ", kelvin ,"K")


// 2.
// let quilowattsConsumida = 280
// let valorEnergia = 0.05
// let valorConsumo = quilowattsConsumida * valorEnergia
// console.log("Foi consumido 280 quilowatts-hora, seu valor é de ", valorConsumo)

// // b)
// valorComDesconto = (valorConsumo*15)/100
// console.log("o valor com desconto fica: ",valorComDesconto)

// 3.
// a)
// let libras = 20
// let quilogramas = libras*0.453592
// console.log(libras,"lb equivalem a ", quilogramas," kg")

// b)
// let onca = 10.5
// let quilogramas = onca*0.0283495
// console.log(onca,"oz equivalem a ", quilogramas,"kg")

// c)
//  let milha = 100
//  let metro = milha*1609.34
//  console.log(milha,"mi equivalem a ", metro,"m")

// d)
// let pes = 50
// let metro = pes*0.3048
// console.log(pes,"ft equivalem a ", metro,"m")

// e)
// let galao = 103.56
// let litro = galao*3.78541
// console.log(galao,"gal equivalem a ", litro,"l")

// f)
// let xicara = 450
// let litro = xicara*0.24
// console.log(xicara,"xic equivalem a ", litro,"l")

// g)

let xicara = prompt("Quantas xicaras você vai adicionar?")
let litro = xicara*0.24
console.log(xicara,"xic equivalem a ", litro,"l")





