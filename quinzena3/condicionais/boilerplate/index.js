// EXERCÍCIO 1
// o código testa se o resto da divisão numero digitado pelo usuário por 2 é igual a 0
// para numeros pares ou que tem o resto da divisão do número digitado pelo usuário por 2 é igual a 0 imprime "Passou no teste?"
// para numeros impares ou que tem resto da divisão diferente de 0 a mensagem mostrada é "Não passou no teste"?  

// EXERCÍCIO 2
// a. Para verificar o preço de cada fruta
// b. O preço da fruta Maçã é R$ 2.25
// c. O preço da fruta Pêra é R$ 5

// EXERCÍCIO 3
// a. declarando uma variavel com nome numero, que recebe um prompt, este por sua vez está tendo seu retorno transformado no tipo number
// b. para entrada 10: Esse número passou no teste e também erro de variavel mensagem não definida
//    para entrada -10: erro de variavel mensagem não definida
// c. Sim. Ocorre o erro da variável mensagem não ter sido definida, devido ela ter sido declarada dentro do escopo if.

// Exercícios de escrita de código

// EXERCÍCIO 4
// let idadeDoUsuario = Number(prompt("Qual é a sua idade"))

// if(idadeDoUsuario >= 18){
//     console.log("Você pode dirigir")
// }else{
//     console.log("Você não pode dirigir")
// }

// EXERCÍCIO 5
// const turnoAluno = prompt("Qual turno você estuda? Digite M(matutino) ou V (Vespertino) ou N (Noturno)")

// if(turnoAluno === "M"){
//     console.log("Bom dia!")
// }else if(turnoAluno === "V"){
//     console.log("Boa tarde!")
// }else{
//     console.log("Boa noite!")
// }

// EXERCÍCIO 6

// const turnoAluno = prompt("Qual turno você estuda? Digite M(matutino) ou V (Vespertino) ou N (Noturno)")

// switch(turnoAluno){
//     case "M":
//         console.log("Bom dia!")
//     break
//     case "V":
//         console.log("Boa tarde!")
//     break
//     case "N":
//         console.log("Boa noite!")
//     break
// }


// EXERCÍCIO 7
// const generoFilme = prompt("Qual é o gênero do Filme?")
// const precoIngresso = prompt("Qual o preço do Ingresso?")

// if(generoFilme === "fantasia" && precoIngresso <= "15"){
//     console.log("Bom Filme!")
// }else{
//     console.log("Escolha outro Filme :( ")
// }


// DESAFIO 1
// const generoFilme = (prompt("Qual é o gênero do Filme?")).toLocaleLowerCase()
// const precoIngresso = prompt("Qual o preço do Ingresso?")

// if(generoFilme === "fantasia" && precoIngresso <= "15"){
//     let snack = (prompt("Qual snack você quer?")).toLocaleLowerCase()
//     console.log("Bom Filme com ", snack, "!")
// }else{
//     console.log("Escolha outro Filme :( ")
// }

// DESAFIO 2
const nomeTorcedor = prompt("Qual é o seu nome?").toLocaleUpperCase()
let tipoDeJogo = prompt("Você assitirá um jogo Nacional(DO) ou Internacional(IN)").toLocaleUpperCase()
let etapaDoJogo = prompt("Que etapa do Jogo está? Semi-Final(SF), Decisão de Terceiro Lugar(DT) ou Final(FI)").toLocaleUpperCase()
const categoria = Number(prompt("Qual categoria?(1,2,3,4)"))
const quantidadeIngressos = Number(prompt("Quantos Ingressos?"))
let precoTotal = 0
let precoIngresso = 0

    switch(categoria){
        case 1:
            switch(etapaDoJogo){
                case "SF":  
                    etapaDoJogo = "Semi-Final"
                    precoIngresso = 1320
                        
                    console.log("---Dados da compra---")
                    console.log("Nome do cliente: ", nomeTorcedor)
                    console.log("Etapa do jogo: ", etapaDoJogo)
                    console.log("Categoria: ", categoria)
                    console.log("Quantidade de Ingressos: ", quantidadeIngressos)
                    
                    if(tipoDeJogo === "DO"){

                            tipoDeJogo = "Nacional"
                            precoTotal = (quantidadeIngressos*precoIngresso)   

                            console.log("Tipo do jogo: ", tipoDeJogo)
                            console.log("---Valores--- ")
                            console.log("Valor do ingresso: R$", precoIngresso)
                            console.log("Valor total: R$",precoTotal)
                    }else if(tipoDeJogo === "IN"){

                            tipoDeJogo = "Internacional"
                            precoIngresso = precoIngresso/4.10
                            precoTotal = (quantidadeIngressos*precoIngresso)

                            console.log("Tipo do jogo: ", tipoDeJogo)
                            console.log("---Valores--- ")
                            console.log("Valor do ingresso: U$", precoIngresso)
                            console.log("Valor total: U$",precoTotal)
                    }
                break;

                case "DT":
                    etapaDoJogo = "Decisão do 3º Lugar"
                    precoIngresso = 660
                        
                    console.log("---Dados da compra---")
                    console.log("Nome do cliente: ", nomeTorcedor)
                    console.log("Etapa do jogo: ", etapaDoJogo)
                    console.log("Categoria: ", categoria)
                    console.log("Quantidade de Ingressos: ", quantidadeIngressos)
                    
                    if(tipoDeJogo === "DO"){

                            tipoDeJogo = "Nacional"
                            precoTotal = (quantidadeIngressos*precoIngresso)   

                            console.log("Tipo do jogo: ", tipoDeJogo)
                            console.log("---Valores--- ")
                            console.log("Valor do ingresso: R$", precoIngresso)
                            console.log("Valor total: R$",precoTotal)
                    }else if(tipoDeJogo === "IN"){

                            tipoDeJogo = "Internacional"
                            precoIngresso = precoIngresso/4.10
                            precoTotal = (quantidadeIngressos*precoIngresso)

                            console.log("Tipo do jogo: ", tipoDeJogo)
                            console.log("---Valores--- ")
                            console.log("Valor do ingresso: U$", precoIngresso)
                            console.log("Valor total: U$",precoTotal)
                    }
                break;

                case "FI":
                    etapaDoJogo = "Decisão do 3º Lugar"
                    precoIngresso = 1980
                        
                    console.log("---Dados da compra---")
                    console.log("Nome do cliente: ", nomeTorcedor)
                    console.log("Etapa do jogo: ", etapaDoJogo)
                    console.log("Categoria: ", categoria)
                    console.log("Quantidade de Ingressos: ", quantidadeIngressos)
                    
                    if(tipoDeJogo === "DO"){

                            tipoDeJogo = "Nacional"
                            precoTotal = (quantidadeIngressos*precoIngresso)   

                            console.log("Tipo do jogo: ", tipoDeJogo)
                            console.log("---Valores--- ")
                            console.log("Valor do ingresso: R$", precoIngresso)
                            console.log("Valor total: R$",precoTotal)
                    }else if(tipoDeJogo === "IN"){

                            tipoDeJogo = "Internacional"
                            precoIngresso = precoIngresso/4.10
                            precoTotal = (quantidadeIngressos*precoIngresso)

                            console.log("Tipo do jogo: ", tipoDeJogo)
                            console.log("---Valores--- ")
                            console.log("Valor do ingresso: U$", precoIngresso)
                            console.log("Valor total: U$",precoTotal)
                    }
                break;
            }
        break;

        case 2:
            switch(etapaDoJogo){
                case "SF":  
                    etapaDoJogo = "Semi-Final"
                    precoIngresso = 880
                        
                    console.log("---Dados da compra---")
                    console.log("Nome do cliente: ", nomeTorcedor)
                    console.log("Etapa do jogo: ", etapaDoJogo)
                    console.log("Categoria: ", categoria)
                    console.log("Quantidade de Ingressos: ", quantidadeIngressos)
                    
                    if(tipoDeJogo === "DO"){

                            tipoDeJogo = "Nacional"
                            precoTotal = (quantidadeIngressos*precoIngresso)   

                            console.log("Tipo do jogo: ", tipoDeJogo)
                            console.log("---Valores--- ")
                            console.log("Valor do ingresso: R$", precoIngresso)
                            console.log("Valor total: R$",precoTotal)
                    }else if(tipoDeJogo === "IN"){

                            tipoDeJogo = "Internacional"
                            precoIngresso = precoIngresso/4.10
                            precoTotal = (quantidadeIngressos*precoIngresso)

                            console.log("Tipo do jogo: ", tipoDeJogo)
                            console.log("---Valores--- ")
                            console.log("Valor do ingresso: U$", precoIngresso)
                            console.log("Valor total: U$",precoTotal)
                    }
                break;

                case "DT":
                    etapaDoJogo = "Decisão do 3º Lugar"
                    precoIngresso = 440
                        
                    console.log("---Dados da compra---")
                    console.log("Nome do cliente: ", nomeTorcedor)
                    console.log("Etapa do jogo: ", etapaDoJogo)
                    console.log("Categoria: ", categoria)
                    console.log("Quantidade de Ingressos: ", quantidadeIngressos)
                    
                    if(tipoDeJogo === "DO"){

                            tipoDeJogo = "Nacional"
                            precoTotal = (quantidadeIngressos*precoIngresso)   

                            console.log("Tipo do jogo: ", tipoDeJogo)
                            console.log("---Valores--- ")
                            console.log("Valor do ingresso: R$", precoIngresso)
                            console.log("Valor total: R$",precoTotal)
                    }else if(tipoDeJogo === "IN"){

                            tipoDeJogo = "Internacional"
                            precoIngresso = precoIngresso/4.10
                            precoTotal = (quantidadeIngressos*precoIngresso)

                            console.log("Tipo do jogo: ", tipoDeJogo)
                            console.log("---Valores--- ")
                            console.log("Valor do ingresso: U$", precoIngresso)
                            console.log("Valor total: U$",precoTotal)
                    }
                break;

                case "FI":
                    etapaDoJogo = "Decisão do 3º Lugar"
                    precoIngresso = 1320
                        
                    console.log("---Dados da compra---")
                    console.log("Nome do cliente: ", nomeTorcedor)
                    console.log("Etapa do jogo: ", etapaDoJogo)
                    console.log("Categoria: ", categoria)
                    console.log("Quantidade de Ingressos: ", quantidadeIngressos)
                    
                    if(tipoDeJogo === "DO"){

                            tipoDeJogo = "Nacional"
                            precoTotal = (quantidadeIngressos*precoIngresso)   

                            console.log("Tipo do jogo: ", tipoDeJogo)
                            console.log("---Valores--- ")
                            console.log("Valor do ingresso: R$", precoIngresso)
                            console.log("Valor total: R$",precoTotal)
                    }else if(tipoDeJogo === "IN"){

                            tipoDeJogo = "Internacional"
                            precoIngresso = precoIngresso/4.10
                            precoTotal = (quantidadeIngressos*precoIngresso)

                            console.log("Tipo do jogo: ", tipoDeJogo)
                            console.log("---Valores--- ")
                            console.log("Valor do ingresso: U$", precoIngresso)
                            console.log("Valor total: U$",precoTotal)
                    }
                break;
            }
        break;

        case 3:
            switch(etapaDoJogo){
                case "SF":  
                    etapaDoJogo = "Semi-Final"
                    precoIngresso = 550
                        
                    console.log("---Dados da compra---")
                    console.log("Nome do cliente: ", nomeTorcedor)
                    console.log("Etapa do jogo: ", etapaDoJogo)
                    console.log("Categoria: ", categoria)
                    console.log("Quantidade de Ingressos: ", quantidadeIngressos)
                    
                    if(tipoDeJogo === "DO"){

                            tipoDeJogo = "Nacional"
                            precoTotal = (quantidadeIngressos*precoIngresso)   

                            console.log("Tipo do jogo: ", tipoDeJogo)
                            console.log("---Valores--- ")
                            console.log("Valor do ingresso: R$", precoIngresso)
                            console.log("Valor total: R$",precoTotal)
                    }else if(tipoDeJogo === "IN"){

                            tipoDeJogo = "Internacional"
                            precoIngresso = precoIngresso/4.10
                            precoTotal = (quantidadeIngressos*precoIngresso)

                            console.log("Tipo do jogo: ", tipoDeJogo)
                            console.log("---Valores--- ")
                            console.log("Valor do ingresso: U$", precoIngresso)
                            console.log("Valor total: U$",precoTotal)
                    }
                break;

                case "DT":
                    etapaDoJogo = "Decisão do 3º Lugar"
                    precoIngresso = 330
                        
                    console.log("---Dados da compra---")
                    console.log("Nome do cliente: ", nomeTorcedor)
                    console.log("Etapa do jogo: ", etapaDoJogo)
                    console.log("Categoria: ", categoria)
                    console.log("Quantidade de Ingressos: ", quantidadeIngressos)
                    
                    if(tipoDeJogo === "DO"){

                            tipoDeJogo = "Nacional"
                            precoTotal = (quantidadeIngressos*precoIngresso)   

                            console.log("Tipo do jogo: ", tipoDeJogo)
                            console.log("---Valores--- ")
                            console.log("Valor do ingresso: R$", precoIngresso)
                            console.log("Valor total: R$",precoTotal)
                    }else if(tipoDeJogo === "IN"){

                            tipoDeJogo = "Internacional"
                            precoIngresso = precoIngresso/4.10
                            precoTotal = (quantidadeIngressos*precoIngresso)

                            console.log("Tipo do jogo: ", tipoDeJogo)
                            console.log("---Valores--- ")
                            console.log("Valor do ingresso: U$", precoIngresso)
                            console.log("Valor total: U$",precoTotal)
                    }
                break;

                case "FI":
                    etapaDoJogo = "Decisão do 3º Lugar"
                    precoIngresso = 880
                        
                    console.log("---Dados da compra---")
                    console.log("Nome do cliente: ", nomeTorcedor)
                    console.log("Etapa do jogo: ", etapaDoJogo)
                    console.log("Categoria: ", categoria)
                    console.log("Quantidade de Ingressos: ", quantidadeIngressos)
                    
                    if(tipoDeJogo === "DO"){

                            tipoDeJogo = "Nacional"
                            precoTotal = (quantidadeIngressos*precoIngresso)   

                            console.log("Tipo do jogo: ", tipoDeJogo)
                            console.log("---Valores--- ")
                            console.log("Valor do ingresso: R$", precoIngresso)
                            console.log("Valor total: R$",precoTotal)
                    }else if(tipoDeJogo === "IN"){

                            tipoDeJogo = "Internacional"
                            precoIngresso = precoIngresso/4.10
                            precoTotal = (quantidadeIngressos*precoIngresso)

                            console.log("Tipo do jogo: ", tipoDeJogo)
                            console.log("---Valores--- ")
                            console.log("Valor do ingresso: U$", precoIngresso)
                            console.log("Valor total: U$",precoTotal)
                    }
                break;
            }
        break;

        case 4:
            switch(etapaDoJogo){
                case "SF":  
                    etapaDoJogo = "Semi-Final"
                    precoIngresso = 220
                        
                    console.log("---Dados da compra---")
                    console.log("Nome do cliente: ", nomeTorcedor)
                    console.log("Etapa do jogo: ", etapaDoJogo)
                    console.log("Categoria: ", categoria)
                    console.log("Quantidade de Ingressos: ", quantidadeIngressos)
                    
                    if(tipoDeJogo === "DO"){

                            tipoDeJogo = "Nacional"
                            precoTotal = (quantidadeIngressos*precoIngresso)   

                            console.log("Tipo do jogo: ", tipoDeJogo)
                            console.log("---Valores--- ")
                            console.log("Valor do ingresso: R$", precoIngresso)
                            console.log("Valor total: R$",precoTotal)
                    }else if(tipoDeJogo === "IN"){

                            tipoDeJogo = "Internacional"
                            precoIngresso = precoIngresso/4.10
                            precoTotal = (quantidadeIngressos*precoIngresso)

                            console.log("Tipo do jogo: ", tipoDeJogo)
                            console.log("---Valores--- ")
                            console.log("Valor do ingresso: U$", precoIngresso)
                            console.log("Valor total: U$",precoTotal)
                    }
                break;

                case "DT":
                    etapaDoJogo = "Decisão do 3º Lugar"
                    precoIngresso = 170
                        
                    console.log("---Dados da compra---")
                    console.log("Nome do cliente: ", nomeTorcedor)
                    console.log("Etapa do jogo: ", etapaDoJogo)
                    console.log("Categoria: ", categoria)
                    console.log("Quantidade de Ingressos: ", quantidadeIngressos)
                    
                    if(tipoDeJogo === "DO"){

                            tipoDeJogo = "Nacional"
                            precoTotal = (quantidadeIngressos*precoIngresso)   

                            console.log("Tipo do jogo: ", tipoDeJogo)
                            console.log("---Valores--- ")
                            console.log("Valor do ingresso: R$", precoIngresso)
                            console.log("Valor total: R$",precoTotal)
                    }else if(tipoDeJogo === "IN"){

                            tipoDeJogo = "Internacional"
                            precoIngresso = precoIngresso/4.10
                            precoTotal = (quantidadeIngressos*precoIngresso)

                            console.log("Tipo do jogo: ", tipoDeJogo)
                            console.log("---Valores--- ")
                            console.log("Valor do ingresso: U$", precoIngresso)
                            console.log("Valor total: U$",precoTotal)
                    }
                break;

                case "FI":
                    etapaDoJogo = "Decisão do 3º Lugar"
                    precoIngresso = 330
                        
                    console.log("---Dados da compra---")
                    console.log("Nome do cliente: ", nomeTorcedor)
                    console.log("Etapa do jogo: ", etapaDoJogo)
                    console.log("Categoria: ", categoria)
                    console.log("Quantidade de Ingressos: ", quantidadeIngressos)
                    
                    if(tipoDeJogo === "DO"){

                            tipoDeJogo = "Nacional"
                            precoTotal = (quantidadeIngressos*precoIngresso)   

                            console.log("Tipo do jogo: ", tipoDeJogo)
                            console.log("---Valores--- ")
                            console.log("Valor do ingresso: R$", precoIngresso)
                            console.log("Valor total: R$",precoTotal)
                    }else if(tipoDeJogo === "IN"){

                            tipoDeJogo = "Internacional"
                            precoIngresso = precoIngresso/4.10
                            precoTotal = (quantidadeIngressos*precoIngresso)

                            console.log("Tipo do jogo: ", tipoDeJogo)
                            console.log("---Valores--- ")
                            console.log("Valor do ingresso: U$", precoIngresso)
                            console.log("Valor total: U$",precoTotal)
                    }
                break;
            }
        break;
    }
    





