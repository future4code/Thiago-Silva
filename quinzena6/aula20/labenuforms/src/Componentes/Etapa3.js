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


class Etapa3 extends React.Component {
  render() {
    document.title = "LabenuForm - Etapa 3"
    return (
     <div>
       <h3>ETAPA 3: INFORMAÇÕES GERAIS DE ENSINO</h3>
       <Perguntas pergunta={"1. Por que você não terminou um curso de graduação?"}/>
       <p>2. Você fez algum curso complementar?</p>
       <select name="select">
         <option selected value="nenhum">Nenhum</option>
         <option value="cursoTecnico">Curso Técnico</option>
         <option value="cursoIngles">Curso de Inglês</option>
         <option value="naoFez">Não Fiz Curso Complementar</option>
       </select>
       <br/>
       <Botaoprox onClick={this.props.funcaonOnClickParaEtapaFinal}>Próxima Etapa</Botaoprox>
       </div>
    )
  }
}

export default Etapa3;