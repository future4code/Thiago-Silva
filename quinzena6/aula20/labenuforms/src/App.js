import React from  'react'
import styled from 'styled-components'
import PerguntaAberta from './Componentes/PerguntaAberta'
import Etapa2 from './Componentes/Etapa2'
import Etapa3 from './Componentes/Etapa3'
import Etapa4 from './Componentes/Etapa4'


const Escuro = styled.div`
  text-align: center;
  background-color: #2F3437;
  color:#EDEDEE;
  padding: 10px 0px 230px 20px
`


class App extends React.Component {
  state = {
    etapa: "etapa1",
    escuro: false
  }

  onClickEtapa2 = () => {
    this.setState({etapa:"etapa2"});
  }

  onClickEtapa3 = () => {
    this.setState({etapa:"etapa3"});
  }

  onClickEtapa4 = () => {
    this.setState({etapa:"etapa4"});
  }

  
  render() {
    document.title = "LabenuForm"
    const qualEtapa = () => {
      switch(this.state.etapa){
        case 'etapa1':
          return <PerguntaAberta funcaonOnClickParaEtapa2={this.onClickEtapa2}/>
        case 'etapa2':
          return <Etapa2 funcaonOnClickParaEtapa3={this.onClickEtapa3}/>
        case 'etapa3':
          return <Etapa3 funcaonOnClickParaEtapaFinal={this.onClickEtapa4}/>
          case 'etapa4':
            return <Etapa4/>
        default:
          console.log("erro")
      }
    }
    return (
     <Escuro>
       {qualEtapa()}
      </Escuro>
    )
  }
}

export default App;

