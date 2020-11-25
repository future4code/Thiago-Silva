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

         
         usuario = comprarCarta() // pega a resposta da função comprarCarta
         cartasUsuario.push(usuario.texto) // pega o texto da função comprarCarta e coloca no array
         valorUsuario += usuario.valor // soma os valores das cartas
         
   
         //testa se o jogador recebeu dois A
         if(cartasUsuario[0] === "A" && cartasUsuario[1] === "A"){
            usuario = comprarCarta()
            cartasUsuario.push(usuario.texto)
            valorUsuario += usuario.valor 
         }

         computador = comprarCarta()
         cartasComputador.push(computador.texto)
         valorComputador += computador.valor
   
   
         if(cartasComputador[0] === "A" && cartasComputador[1] === "A"){
            computador = comprarCarta()
            cartasComputador.push(computador.texto)
            valorComputador += computador.valor

            if (confirm( "Suas cartas são "+ 
                cartasUsuario[0]+" "+ cartasUsuario[1]+
                ". A carta revelada do computador é "
                + cartasComputador[0] + "."
                + " Deseja comprar mais uma carta?")){

               usuario = comprarCarta()
               cartasUsuario.push(usuario.texto)
               valorUsuario += usuario.valor
               
               if(valorUsuario < 21){
                  if (confirm( "Suas cartas são "+ 
                     cartasUsuario[0]+" "+ cartasUsuario[1]+
                     ". A carta revelada do computador é "
                     + cartasComputador[0] + "."
                     + " Deseja comprar mais uma carta?")){

                     usuario = comprarCarta()
                     cartasUsuario.push(usuario.texto)
                     valorUsuario += usuario.valor
                     alert(cartasUsuario)
                  }
               }
            }

         }
         else if (cartasComputador[1] != undefined) {
   
            if (confirm( "Suas cartas são "+ 
                cartasUsuario[0]+" "+ cartasUsuario[1]+
                ". A carta revelada do computador é "
                + cartasComputador[0] + "."
                + " Deseja comprar mais uma carta?")){

               usuario = comprarCarta()
               cartasUsuario.push(usuario.texto)
               valorUsuario += usuario.valor
               
               
                  if (confirm( "Suas cartas são "+ 
                     cartasUsuario+
                     ". A carta revelada do computador é "
                     + cartasComputador[0] + "."
                     + " Deseja comprar mais uma carta?")){

                     usuario = comprarCarta()
                     cartasUsuario.push(usuario.texto)
                     valorUsuario += usuario.valor
                  }
                  else if(valorUsuario > 21){
                      //calcula a diferença enter 21 e o valor das cartas dos jogadores
                        calculoResultadoUsuario = 21 - valorUsuario
                        calculoResultadoComputador = 21 - valorComputador

                        //verifica quem ganhou ou se ocorreu empate
                        if ((calculoResultadoUsuario < calculoResultadoComputador) && (calculoResultadoUsuario >= 0)) {
                           alert("O usuário Ganhou!")
                        }
                        else if ((calculoResultadoComputador < calculoResultadoUsuario) && (calculoResultadoComputador >= 0)) {
                           alert("O computador Ganhou!")
                        } 
                        else{
                           alert("Empate!")
                        }
                  }
                  else{
                     //calcula a diferença enter 21 e o valor das cartas dos jogadores
                     calculoResultadoUsuario = 21 - valorUsuario
                     calculoResultadoComputador = 21 - valorComputador

                     //verifica quem ganhou ou se ocorreu empate
                     if ((calculoResultadoUsuario < calculoResultadoComputador) && (calculoResultadoUsuario >= 0)) {
                        alert("O usuário Ganhou!")
                     }
                     else if ((calculoResultadoComputador < calculoResultadoUsuario) && (calculoResultadoComputador >= 0)) {
                        alert("O computador Ganhou!")
                     } 
                     else{
                        alert("Empate!")
                     }
                  }
               
            }
         }

         // //calcula a diferença enter 21 e o valor das cartas dos jogadores
         // calculoResultadoUsuario = 21 - valorUsuario
         // calculoResultadoComputador = 21 - valorComputador


         // //verifica quem ganhou ou se ocorreu empate
         //    if ((calculoResultadoUsuario < calculoResultadoComputador) && (calculoResultadoUsuario >= 0)) {
         //       console.log("O usuário Ganhou!")
         //    }
         //    else if ((calculoResultadoComputador < calculoResultadoUsuario) && (calculoResultadoComputador >= 0)) {
         //       console.log("O computador Ganhou!")
         //    } 
         //    else{
         //       console.log("Empate!")
         //    }

      }

} else {
   alert("O jogo acabou")
}