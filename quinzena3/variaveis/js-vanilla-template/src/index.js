/* 1. A primeira saída no console será o valor de b que no caso é 10
   o valor de b foi setado para 5
   O valor da Segunda saída no console será 10 5 */

/*  2. a = 10
    b = 20
    c = 10(a)
    b = 10(c)
    a = 10(b)
    A saída no console será 10 10 10*/


// 1.a) observação: tinha colocado como const, porém o navegador informa ausencia de inicialização do const
let nome

// b)
let idade

//c)
console.log(typeof nome, typeof idade)

/* 
d)
apareceu como undefined devido não ter sido atribuído nenhum valor 
para as váriaveis nome e idade, assim fica indefinido para o sistema saber que tipo é
*/

nome = prompt("Qual é o seu nome?")
idade = prompt("Qual é a sua idade?")

// e) o tipo das variaveis mudou para string, após ter passado pelo prompt.
console.log(typeof nome, typeof idade)

// f) 
console.log("Olá ", nome, " você tem ", idade, " anos.")


// 2.
game = prompt("Você joga video games?")
videoGame = prompt("Qual video game você tem?")
filme = prompt("Qual é o seu filme favorito?")
musica = prompt("Qual é a sua música favorita?")
anime = prompt("Você gosta de Animes?")

console.log("1. Você joga video games?")
console.log("Resposta: ", game)

console.log("2. Qual video game você tem?")
console.log("Resposta: ", videoGame)

console.log("3. Qual é o seu filme favorito?")
console.log("Resposta: ", filme)

console.log("4. Qual é a sua música favorita?")
console.log("Resposta: ", musica)

console.log("5. Você gosta de Animes?")
console.log("Resposta:", anime)


// 3.
let comidas = ["Carne", "Macarrão", "Pizza", "Hamburguer", "Chocolate"]

// a)
console.log(comidas)

// b)
console.log("Essas são as minhas comidas preferidas: ")
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

// c)
comidas[1] = prompt("Qual é a sua comida preferida?")

console.log("Nova lista de Comidas:")
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])


// 4.
let perguntas = ["Você dormiu hoje?", "Você tomou água hoje?", "Você fez exercícios hoje?"]

let respostas = [false, true]

console.log(perguntas[0], respostas[1])

console.log(perguntas[1], respostas[1])

console.log(perguntas[2], respostas[0])
