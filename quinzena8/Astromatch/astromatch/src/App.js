import React, {useState} from 'react'

import axios from 'axios'
import { BASE_URL } from './constantes/requisicoes'

import Card from './componentes/Card/Card'
import Aprovados from './componentes/Aprovados/Aprovados'

import GlobalEstilo from './Global/GlobalEstilo'
import {Titulo, TrocaTela, Limpar, TamanhoMatchs} from './styledApp'

import Gatos from './img/gatosAbracados.png'

import "./index.css";


function App() {
  const [troca, setTroca] = useState(true)

  const trocarTela = () => {
    setTroca(!troca)
  }

  const limpar = () => {
    axios.put(`${BASE_URL}clear`)
        .then((resposta)=>{
           console.log(resposta)
        })
        .catch((erro) => {
            console.log(erro)
        })
  }
  
  return (
    <div>
      <GlobalEstilo/>
      <div> 
        <Titulo>Astromatch</Titulo>
        <TrocaTela onClick={trocarTela}><TamanhoMatchs src={Gatos} alt="Matchs"/>
        {troca ? "Listas de quem você gostou" : "Voltar"}
        </TrocaTela>
        <Limpar onClick={limpar}>Limpar swipes e matches</Limpar>
      </div>

      {troca ? <Card/> : <Aprovados/>}

    </div>
  )
}

export default App;
