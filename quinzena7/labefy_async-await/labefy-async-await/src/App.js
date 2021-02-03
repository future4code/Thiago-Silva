import React from 'react'
import styled from 'styled-components'
import CriarUsuarios from './screens/CriarUsuario'
import ListaUsuarios from './screens/ListaUsuarios'

const Principal = styled.div`
  margin: 0;
  padding: 0;
  background-color: #242837;
  color: white;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
`

const BotaoTroca = styled.button`
  margin:30px;
  background-color: #022C74;
  color:white;
  padding: 5px;
  border-radius:5%;
  border-style:none;
  font-size:15px;
  font-family:cursive;
`

class App extends React.Component {
  state = {
    voltar: true
  }

  botaoVoltar = () => {
    this.setState({voltar: !this.state.voltar})
  }
  
  render () {
    document.title = "LabenUsers 2.0"

    return (
      <Principal>
        <BotaoTroca onClick={this.botaoVoltar}>{this.state.voltar ?"Lista de usuarios" : "voltar"}</BotaoTroca>
        
        {this.state.voltar ? (
          <CriarUsuarios/>
        ):(
          <ListaUsuarios/>
        )}
        
      </Principal>
    )
  }
}

export default App;