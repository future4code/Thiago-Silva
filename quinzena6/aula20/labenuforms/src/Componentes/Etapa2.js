import React from  'react'
import styled from 'styled-components'
import Perguntas from './Perguntas'

const Botaoprox = styled.button`
    border-radius: 10px;
    background-color: #0080FF;
    color: #EDEDEE;
    border-style: none;
    margin-top:50px
`


class Etapa2 extends React.Component {
  render() {
    document.title = "LabenuForm - Etapa 2"
    return (
     <div>
       <h3>ETAPA 2: Informações do Ensino Superior</h3>
       <Perguntas pergunta={"1. Qual curso?"}/>
       <Perguntas pergunta={"2. Qual Instituição de Ensino Superior que cursou?"}/>
       <br/>
       
       <Botaoprox onClick={this.props.funcaonOnClickParaEtapa3}>Próxima Etapa</Botaoprox>
       </div>
    )
  }
}

export default Etapa2;