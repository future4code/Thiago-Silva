import React from 'react'
import styled from 'styled-components'
import GlobalStyle from './estilo/global'
import axios from 'axios'
import Noticias from './componentes/Noticias';

// 437d10866fd544cc95c6db4c094a74b1

const Cabecalho = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 3px black;
`
const Titulo = styled.h1`
   color: #4A93F8;
`

const Menu = styled.div`
  width:500px;
  margin-left:30%;
  color: blue;
`
const CorpoMenu = styled.ul`
  margin:50px;
  border:1px solid #EDEDED;
  list-style:none;
`
const ItemMenu = styled.li`
  display:inline;
  margin-left:50px;
`

class App extends React.Component {
  render(){
    return(
      <div>
        <GlobalStyle/>
        <Cabecalho>
          <Titulo>N³</Titulo>
          <p>New Notice Now</p>
        </Cabecalho>

        <Menu>
          <CorpoMenu>
            <ItemMenu>Geral</ItemMenu>
            <ItemMenu>Geek</ItemMenu>
            <ItemMenu>Brasil</ItemMenu>
          </CorpoMenu>
        </Menu>

          <Noticias/>
          
      </div>
    )
  }
}

export default App;
