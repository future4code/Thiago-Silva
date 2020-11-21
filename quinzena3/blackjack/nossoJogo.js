/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

   console.log("Bem vindo ao jogo de Blackjack!")

   if(confirm("Quer iniciar uma nova rodada?")){
      let usuario = 0
      let cartasUsuario = []
      let valorUsuario = 0

      let computador = 0
      let cartasComputador = []
      let valorComputador = 0

      let calculoResultadoUsuario = 0
      let calculoResultadoComputador = 0
      let resultadoFinal = 0
     
      for(mao = 0; mao != 2; mao++){

         usuario = comprarCarta()
         cartasUsuario.push(usuario.texto)
         valorUsuario += usuario.valor
         if(cartasUsuario[1] !== undefined){
            console.log("Usuário - cartas:",cartasUsuario[0],cartasUsuario[1]," - pontuação", valorUsuario)
         }
         
         
         computador = comprarCarta()
         cartasComputador.push(computador.texto)
         valorComputador += computador.valor
         if(cartasComputador[1] != undefined){
            console.log("Computador - cartas:",cartasComputador[0],cartasComputador[1]," - pontuação", valorComputador)
         }

         calculoResultadoUsuario = 21 - valorUsuario
         calculoResultadoComputador = 21 - valorComputador
         
         if(calculoResultadoUsuario < calculoResultadoComputador && calculoResultadoUsuario >= 0){
            console.log("O usuário Ganhou!")
         }
         else if(calculoResultadoComputador < calculoResultadoUsuario && calculoResultadoComputador >=0){
            console.log("O computador Ganhou!")
         }else {
            console.log("Empate!")
         }


         
      }
   
   
   }else{
      console.log("O jogo acabou")
   }