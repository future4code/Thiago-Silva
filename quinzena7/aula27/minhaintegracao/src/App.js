import React from 'react'
import GlobalStyle from './estilo/global'
import {Cabecalho, Titulo, Menu, CorpoMenu, ItemMenu} from './estilo/estiloApp'
import Noticias from './componentes/Noticias';


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
