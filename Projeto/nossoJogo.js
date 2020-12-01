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

      //se o usuário não ter recebido a segunda carta não imprime a informação no console
      if (cartasUsuario[1] !== undefined) {
         console.log("Usuário - cartas:", cartasUsuario[0], cartasUsuario[1], " - pontuação", valorUsuario)
      }


      computador = comprarCarta()
      cartasComputador.push(computador.texto)
      valorComputador += computador.valor
      if (cartasComputador[1] != undefined) {
         console.log("Computador - cartas:", cartasComputador[0], cartasComputador[1], " - pontuação", valorComputador)
      }

      //calcula a diferença enter 21 e o valor das cartas dos jogadores
      calculoResultadoUsuario = 21 - valorUsuario
      calculoResultadoComputador = 21 - valorComputador


      //verifica quem ganhou ou se ocorreu empate
      if (cartasComputador[1] != undefined) {
         if ((calculoResultadoUsuario < calculoResultadoComputador) && (calculoResultadoUsuario >= 0)) {
            console.log("O usuário Ganhou!")
         }
         else if ((calculoResultadoComputador < calculoResultadoUsuario) && (calculoResultadoComputador >= 0)) {
            console.log("O computador Ganhou!")
         }
         else {
            console.log("Empate!")
         }
      }

   }

} else {
   console.log("O jogo acabou")
}