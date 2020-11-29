console.log("Bem vindo ao jogo de Blackjack!")

if (confirm("Quer iniciar uma nova rodada?")) {
   //seta e inicializa as variaveis referente ao usuario
   let usuario = 0
   let cartasUsuario = []
   let valorUsuario = 0

   //seta e inicializa as variaveis referente ao computador
   let computador = 0
   let cartasComputador = []
   let valorComputador = 0

   //seta e inicializa as variaveis referente ao calculo para obter o resultado
   let calculoResultadoUsuario = 0
   let calculoResultadoComputador = 0

   //seta a variavel responsável por contar as cartas nas mãos dos jogadores
   let mao = 0

   //faz um loop para dar as cartas para os jogadores
   for (mao = 0; mao != 2; mao++) {
      usuario = comprarCarta() // pega a resposta da função comprarCarta referente ao Computador usuário
      cartasUsuario.push(usuario.texto) // pega o resultado da função comprarCarta e coloca no array
      valorUsuario += usuario.valor // soma os valores das cartas

      computador = comprarCarta() // pega a resposta da função comprarCarta referente ao Computador
      cartasComputador.push(computador.texto)
      valorComputador += computador.valor

      if (cartasUsuario[1] !== undefined) {
         //testa se o jogador recebeu dois A
         if ((cartasUsuario[0] === "A" && cartasUsuario[1] === "A")
            ||
            cartasComputador[0] === "A" && cartasComputador[1] === "A") {

            usuario = comprarCarta()
            cartasUsuario.push(usuario.texto)
            valorUsuario += usuario.valor

            computador = comprarCarta()
            cartasComputador.push(computador.texto)
            valorComputador += computador.valor

            //Deseja comprar mais uma carta
            if (valorUsuario === 21 && valorComputador !== 21) {
               alert("Você Ganhou!")
               console.log("Sua pontuação foi:", valorUsuario)
               console.log("A pontuação do computador foi", valorComputador)
               console.log("VOCÊ GANHOU!")
            } else if (valorComputador === 21 && valorUsuario !== 21) {
               alert("O computador Ganhou!")
               console.log("Sua pontuação foi:", valorUsuario)
               console.log("A pontuação do computador foi", valorComputador)
               console.log("O computador Ganhou!")
            } else if (valorComputador === 21 && valorUsuario === 21) {
               alert("Empate!")
               console.log("Sua pontuação foi:", valorUsuario)
               console.log("A pontuação do computador foi", valorComputador)
               console.log("Empate")
            } else if (valorUsuario < 21) {
               if (confirm("Suas cartas são " +
                  cartasUsuario[0] + " " + cartasUsuario[1] +
                  ". A carta revelada do computador é "
                  + cartasComputador[0] + "."
                  + " Deseja comprar mais uma carta?")) {

                  usuario = comprarCarta()
                  cartasUsuario.push(usuario.texto)
                  valorUsuario += usuario.valor
                  alert(cartasUsuario)

                  if (valorUsuario < 21) {
                     if (confirm("Suas cartas são " +
                        cartasUsuario[0] + " " + cartasUsuario[1] + " " + cartasUsuario[2] +
                        ". A carta revelada do computador é "
                        + cartasComputador[0] + "."
                        + " Deseja comprar mais uma carta?")) {

                        usuario = comprarCarta()
                        cartasUsuario.push(usuario.texto)
                        valorUsuario += usuario.valor
                        alert(cartasUsuario)

                        if (valorUsuario < 21) {
                           if (confirm("Suas cartas são " +
                              cartasUsuario[0] + " " + cartasUsuario[1] + " " + cartasUsuario[2] + " " + cartasUsuario[3] +
                              ". A carta revelada do computador é "
                              + cartasComputador[0] + "."
                              + " Deseja comprar mais uma carta?")) {

                              usuario = comprarCarta()
                              cartasUsuario.push(usuario.texto)
                              valorUsuario += usuario.valor
                              alert(cartasUsuario)

                           }//4 cartas
                           else {
                              //calcula a diferença enter 21 e o valor das cartas dos jogadores
                              calculoResultadoUsuario = 21 - valorUsuario
                              calculoResultadoComputador = 21 - valorComputador

                              //RESULTADOS
                              if ((calculoResultadoUsuario < calculoResultadoComputador) && (valorUsuario <= 21)) {
                                 alert("Você Ganhou!")
                                 console.log("Sua pontuação foi:", valorUsuario)
                                 console.log("A pontuação do computador foi", valorComputador)
                                 console.log("VOCÊ GANHOU!")
                              } else if ((calculoResultadoComputador < calculoResultadoUsuario) && (valorComputador <= 21)) {
                                 alert("O computador Ganhou!")
                                 console.log("Sua pontuação foi:", valorUsuario)
                                 console.log("A pontuação do computador foi", valorComputador)
                                 console.log("O computador Ganhou!")
                              } else {
                                 alert("Empate!")
                                 console.log("Sua pontuação foi:", valorUsuario)
                                 console.log("A pontuação do computador foi", valorComputador)
                                 console.log("Empate")
                              }
                           }
                        }//3 cartas
                        else {
                           //calcula a diferença enter 21 e o valor das cartas dos jogadores
                           calculoResultadoUsuario = 21 - valorUsuario
                           calculoResultadoComputador = 21 - valorComputador

                           //RESULTADOS
                           if ((calculoResultadoUsuario < calculoResultadoComputador) && (valorUsuario >= 0)) {
                              alert("Você Ganhou!")
                              console.log("Sua pontuação foi:", valorUsuario)
                              console.log("A pontuação do computador foi", valorComputador)
                              console.log("VOCÊ GANHOU!")
                           } else if ((calculoResultadoComputador < calculoResultadoUsuario) && (valorComputador >= 0)) {
                              alert("O computador Ganhou!")
                              console.log("Sua pontuação foi:", valorUsuario)
                              console.log("A pontuação do computador foi", valorComputador)
                              console.log("O computador Ganhou!")
                           } else {
                              alert("Empate!")
                              console.log("Sua pontuação foi:", valorUsuario)
                              console.log("A pontuação do computador foi", valorComputador)
                              console.log("Empate")
                           }
                        }
                        //RESULTADO SEM COMPRAR CARTAS ADICIONAIS
                     } else {
                        //RESULTADO SEM COMPRAR CARTAS ADICIONAIS
                        //calcula a diferença enter 21 e o valor das cartas dos jogadores
                        calculoResultadoUsuario = 21 - valorUsuario
                        calculoResultadoComputador = 21 - valorComputador

                        //RESULTADOS
                        if ((calculoResultadoUsuario < calculoResultadoComputador) && (valorUsuario <= 21)) {
                           alert("Você Ganhou!")
                           console.log("Sua pontuação foi:", valorUsuario)
                           console.log("A pontuação do computador foi", valorComputador)
                           console.log("VOCÊ GANHOU!")
                        } else if ((calculoResultadoComputador < calculoResultadoUsuario) && (valorComputador <= 21)) {
                           alert("O computador Ganhou!")
                           console.log("Sua pontuação foi:", valorUsuario)
                           console.log("A pontuação do computador foi", valorComputador)
                           console.log("O computador Ganhou!")
                        } else {
                           alert("Empate!")
                           console.log("Sua pontuação foi:", valorUsuario)
                           console.log("A pontuação do computador foi", valorComputador)
                           console.log("Empate")
                        }
                     }
                  }//usuário não quer mais comprar 
                  else {
                     //calcula a diferença enter 21 e o valor das cartas dos jogadores
                     calculoResultadoUsuario = 21 - valorUsuario
                     calculoResultadoComputador = 21 - valorComputador

                     //RESULTADOS
                     if ((calculoResultadoUsuario < calculoResultadoComputador) && (valorUsuario <= 21)) {
                        alert("Você Ganhou!")
                        console.log("Sua pontuação foi:", valorUsuario)
                        console.log("A pontuação do computador foi", valorComputador)
                        console.log("VOCÊ GANHOU!")
                     } else if ((calculoResultadoComputador < calculoResultadoUsuario) && (valorComputador <= 21)) {
                        alert("O computador Ganhou!")
                        console.log("Sua pontuação foi:", valorUsuario)
                        console.log("A pontuação do computador foi", valorComputador)
                        console.log("O computador Ganhou!")
                     } else {
                        alert("Empate!")
                        console.log("Sua pontuação foi:", valorUsuario)
                        console.log("A pontuação do computador foi", valorComputador)
                        console.log("Empate")
                     }
                  }
               }
            }
         } else if (valorUsuario === 21 && valorComputador !== 21) {
            alert("Você Ganhou!")
            console.log("Sua pontuação foi:", valorUsuario)
            console.log("A pontuação do computador foi", valorComputador)
            console.log("VOCÊ GANHOU!")
         } else if (valorComputador === 21 && valorUsuario !== 21) {
            alert("O computador Ganhou!")
            console.log("Sua pontuação foi:", valorUsuario)
            console.log("A pontuação do computador foi", valorComputador)
            console.log("O computador Ganhou!")
         } else if (valorComputador === 21 && valorUsuario === 21) {
            alert("Empate!")
            console.log("Sua pontuação foi:", valorUsuario)
            console.log("A pontuação do computador foi", valorComputador)
            console.log("Empate")
         } else if (valorUsuario < 21) {
            if (confirm("Suas cartas são " +
               cartasUsuario[0] + " " + cartasUsuario[1] +
               ". A carta revelada do computador é "
               + cartasComputador[0] + "."
               + " Deseja comprar mais uma carta?")) {

               usuario = comprarCarta()
               cartasUsuario.push(usuario.texto)
               valorUsuario += usuario.valor
               alert(cartasUsuario)

               if (valorUsuario < 21) {
                  if (confirm("Suas cartas são " +
                     cartasUsuario[0] + " " + cartasUsuario[1] + " " + cartasUsuario[2] +
                     ". A carta revelada do computador é "
                     + cartasComputador[0] + "."
                     + " Deseja comprar mais uma carta?")) {

                     usuario = comprarCarta()
                     cartasUsuario.push(usuario.texto)
                     valorUsuario += usuario.valor
                     alert(cartasUsuario)

                     if (valorUsuario < 21) {
                        if (confirm("Suas cartas são " +
                           cartasUsuario[0] + " " + cartasUsuario[1] + " " + cartasUsuario[2] + " " + cartasUsuario[3] +
                           ". A carta revelada do computador é "
                           + cartasComputador[0] + "."
                           + " Deseja comprar mais uma carta?")) {

                           usuario = comprarCarta()
                           cartasUsuario.push(usuario.texto)
                           valorUsuario += usuario.valor
                           alert(cartasUsuario)

                           //calcula a diferença enter 21 e o valor das cartas dos jogadores
                           calculoResultadoUsuario = 21 - valorUsuario
                           calculoResultadoComputador = 21 - valorComputador

                           //RESULTADOS
                           if ((calculoResultadoUsuario < calculoResultadoComputador) && (valorUsuario <= 21)) {
                              alert("Você Ganhou!")
                              console.log("Sua pontuação foi:", valorUsuario)
                              console.log("A pontuação do computador foi", valorComputador)
                              console.log("VOCÊ GANHOU!")
                           } else if ((calculoResultadoComputador < calculoResultadoUsuario) && (valorComputador <= 21)) {
                              alert("O computador Ganhou!")
                              console.log("Sua pontuação foi:", valorUsuario)
                              console.log("A pontuação do computador foi", valorComputador)
                              console.log("O computador Ganhou!")
                           } else {
                              alert("Empate!")
                              console.log("Sua pontuação foi:", valorUsuario)
                              console.log("A pontuação do computador foi", valorComputador)
                              console.log("Empate")
                           }

                        }//4 cartas
                        else {
                           //calcula a diferença enter 21 e o valor das cartas dos jogadores
                           calculoResultadoUsuario = 21 - valorUsuario
                           calculoResultadoComputador = 21 - valorComputador

                           //RESULTADOS
                           if ((calculoResultadoUsuario < calculoResultadoComputador) && (valorUsuario <= 21)) {
                              alert("Você Ganhou!")
                              console.log("Sua pontuação foi:", valorUsuario)
                              console.log("A pontuação do computador foi", valorComputador)
                              console.log("VOCÊ GANHOU!")
                           } else if ((calculoResultadoComputador < calculoResultadoUsuario) && (valorComputador <= 21)) {
                              alert("O computador Ganhou!")
                              console.log("Sua pontuação foi:", valorUsuario)
                              console.log("A pontuação do computador foi", valorComputador)
                              console.log("O computador Ganhou!")
                           } else {
                              alert("Empate!")
                              console.log("Sua pontuação foi:", valorUsuario)
                              console.log("A pontuação do computador foi", valorComputador)
                              console.log("Empate")
                           }
                        }
                     }//3 cartas
                     else {
                        //calcula a diferença enter 21 e o valor das cartas dos jogadores
                        calculoResultadoUsuario = 21 - valorUsuario
                        calculoResultadoComputador = 21 - valorComputador

                        //RESULTADOS
                        if ((calculoResultadoUsuario < calculoResultadoComputador) && (valorUsuario <= 21)) {
                           alert("Você Ganhou!")
                           console.log("Sua pontuação foi:", valorUsuario)
                           console.log("A pontuação do computador foi", valorComputador)
                           console.log("VOCÊ GANHOU!")
                        } else if ((calculoResultadoComputador < calculoResultadoUsuario) && (valorComputador <= 21)) {
                           alert("O computador Ganhou!")
                           console.log("Sua pontuação foi:", valorUsuario)
                           console.log("A pontuação do computador foi", valorComputador)
                           console.log("O computador Ganhou!")
                        } else {
                           alert("Empate!")
                           console.log("Sua pontuação foi:", valorUsuario)
                           console.log("A pontuação do computador foi", valorComputador)
                           console.log("Empate")
                        }
                     }
                     //RESULTADO SEM COMPRAR CARTAS ADICIONAIS
                  } else {
                     //calcula a diferença enter 21 e o valor das cartas dos jogadores
                     calculoResultadoUsuario = 21 - valorUsuario
                     calculoResultadoComputador = 21 - valorComputador

                     //RESULTADOS
                     if ((calculoResultadoUsuario < calculoResultadoComputador) && (valorUsuario <= 21)) {
                        alert("Você Ganhou!")
                        console.log("Sua pontuação foi:", valorUsuario)
                        console.log("A pontuação do computador foi", valorComputador)
                        console.log("VOCÊ GANHOU!")
                     } else if ((calculoResultadoComputador < calculoResultadoUsuario) && (valorComputador <= 21)) {
                        alert("O computador Ganhou!")
                        console.log("Sua pontuação foi:", valorUsuario)
                        console.log("A pontuação do computador foi", valorComputador)
                        console.log("O computador Ganhou!")
                     } else {
                        alert("Empate!")
                        console.log("Sua pontuação foi:", valorUsuario)
                        console.log("A pontuação do computador foi", valorComputador)
                        console.log("Empate")
                     }
                  }
               }
               else {
                  //calcula a diferença enter 21 e o valor das cartas dos jogadores
                  calculoResultadoUsuario = 21 - valorUsuario
                  calculoResultadoComputador = 21 - valorComputador

                  //RESULTADOS
                  if ((calculoResultadoUsuario < calculoResultadoComputador) && (valorUsuario <= 21)) {
                     alert("Você Ganhou!")
                     console.log("Sua pontuação foi:", valorUsuario)
                     console.log("A pontuação do computador foi", valorComputador)
                     console.log("VOCÊ GANHOU!")
                  } else if ((calculoResultadoComputador < calculoResultadoUsuario) && (valorComputador <= 21)) {
                     alert("O computador Ganhou!")
                     console.log("Sua pontuação foi:", valorUsuario)
                     console.log("A pontuação do computador foi", valorComputador)
                     console.log("O computador Ganhou!")
                  } else {
                     alert("Empate!")
                     console.log("Sua pontuação foi:", valorUsuario)
                     console.log("A pontuação do computador foi", valorComputador)
                     console.log("Empate")
                  }
               }
            } else if (valorUsuario <= 21) {
               while (valorComputador < valorUsuario) {
                  computador = comprarCarta()
                  cartasComputador.push(computador.texto)
                  valorComputador += computador.valor
                  console.log("computador comprou uma nova carta")
               }

                //calcula a diferença enter 21 e o valor das cartas dos jogadores
                calculoResultadoUsuario = 21 - valorUsuario
                calculoResultadoComputador = 21 - valorComputador

               //RESULTADOS
               if ((calculoResultadoUsuario < calculoResultadoComputador) && (calculoResultadoUsuario >= 0)) {
                  alert("Você Ganhou!")
                  console.log("Sua pontuação foi:", valorUsuario)
                  console.log("A pontuação do computador foi", valorComputador)
                  console.log("VOCÊ GANHOU!")
               }
               else if ((calculoResultadoComputador < calculoResultadoUsuario) && (calculoResultadoComputador >= 0)) {
                  alert("O computador Ganhou!")
                  console.log("Sua pontuação foi:", valorUsuario)
                  console.log("A pontuação do computador foi", valorComputador)
                  console.log("O computador Ganhou!")
               }
               else {
                  if (valorComputador === valorUsuario) {
                     alert("Empate!")
                     console.log("Sua pontuação foi:", valorUsuario)
                     console.log("A pontuação do computador foi", valorComputador)
                     console.log("Empate")
                  } else {
                     console.log('Erro')
                  }

               }
            }
            else {
               //calcula a diferença enter 21 e o valor das cartas dos jogadores
               calculoResultadoUsuario = 21 - valorUsuario
               calculoResultadoComputador = 21 - valorComputador

               //RESULTADOS
               if ((calculoResultadoUsuario < calculoResultadoComputador) && (valorUsuario <= 21)) {
                  alert("Você Ganhou!")
                  console.log("Sua pontuação foi:", valorUsuario)
                  console.log("A pontuação do computador foi", valorComputador)
                  console.log("VOCÊ GANHOU!")
               } else if ((calculoResultadoComputador < calculoResultadoUsuario) && (valorComputador <= 21)) {
                  alert("O computador Ganhou!")
                  console.log("Sua pontuação foi:", valorUsuario)
                  console.log("A pontuação do computador foi", valorComputador)
                  console.log("O computador Ganhou!")
               } else {
                  alert("Empate!")
                  console.log("Sua pontuação foi:", valorUsuario)
                  console.log("A pontuação do computador foi", valorComputador)
                  console.log("Empate")
               }
            }
         }
      }
   }
} else {
   alert("O jogo acabou")
   console.log("Você terminou o jogo")
}