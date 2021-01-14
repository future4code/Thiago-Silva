import React from  'react'
import styled from 'styled-components'
import Perguntas from './Perguntas'
import PerguntaOpcoes from './PerguntaOpcoes'

const Botaoprox = styled.button`
    border-radius: 10px;
    background-color: #0080FF;
    color: #EDEDEE;
    border-style: none;
    margin-top:50px
`


class PerguntaAberta extends React.Component {
  state = {
    escolaridade:""
  }

  render() {
    document.title = "Pergunta Aberta"
    if(this.state.escolaridade === "Ensino Superior Incompleto" || this.state.escolaridade === "Ensino Superior Completo"){
      alert("pegou")
    }
    const options = ["Ensino Médio Incompleto", "Ensino Médio Completo", "Ensino Superior Incompleto", "Ensino Superior Completo"]
    return (
     <div>
       <h3>ETAPA 1: Dados gerais</h3>
       <Perguntas pergunta={"1. Qual o seu nome?"}/>
       <Perguntas pergunta={"2. Qual é a sua idade?"}/>
       <Perguntas pergunta={"3. Qual é o seu e-mail?"}/>
       <PerguntaOpcoes pergunta={"4. Qual a sua escolaridade?"}/>
          <select
            value={this.state.escolaridade}
            onChange={e => this.setState({ escolaridade: e.target.value })}>
            {options.map(optionValue => (
              <option value={optionValue}>{optionValue}</option>
            ))}
          </select>
          
       
       <br/>
       <Botaoprox onClick={this.props.funcaonOnClickParaEtapa2}>Próxima Etapa</Botaoprox>
       </div>
    )
  }
}

export default PerguntaAberta;
