import React from 'react';
import styled from 'styled-components';
import Post from './components/Post/Post';
import ele from './img/ol.png'
import deathnote from './img/death-note.jpg'
import akame from './img/akame_perfil.png'
import akamePost from './img/akame.png'

const Fundo = styled.body`
  background-color: #e5e5e5;
  
`

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const FormPostagens = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding:20px;
  button{
    margin: 5px;
    background-color: green;
    color: white;
    border-radius: 5px;
    font-family: cursive;
  }
`


class App extends React.Component {
  state = {
    usuarios: [
      {
        nomeUsuario:"Akame",
        fotoUsuario: "./img/akame_perfil.png",
        fotoPost: akamePost
      },
      {
        nomeUsuario:"L Lawliet",
        fotoUsuario: ele,
        fotoPost: deathnote
      },
      {
        nomeUsuario:"Bruna",
        fotoUsuario:"https://picsum.photos/50/50",
        fotoPost:"https://picsum.photos/200/150"
      }
    ],

    valorInputPessoa: "",
    valorInputFoto: "",
    valorInputFotoPost: ""
  }

  adicionaUsuario = () => {
    const novoUsuario = {
      nome: this.state.valorInputPessoa,
      foto: this.state.valorInputFoto,
      fotoPost: this.state.valorInputFotoPost
    };

    const novoUsuarios = [...this.state.usuarios, novoUsuario];
    this.setState({ usuarios: novoUsuarios });
    this.setState({ valorInputFoto: "", valorInputFotoPost: "", valorInputPessoa: ""})
  };

  onChangeInputPessoa = (event) => {
    this.setState({ valorInputPessoa: event.target.value });
  };

  onChangeInputFoto = (event) => {
    this.setState({ valorInputFoto: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };
  
  render() {
    const postagens = this.state.usuarios.map((usuario) => {
      console.log(usuario.nomeUsuario)
      console.log(usuario.fotoUsuario)
      console.log(usuario.fotoPost)
      return (
        <Post>
          {usuario.nomeUsuario}
          {usuario.fotoUsuario}
          {usuario.fotoPost}
        </Post>
      )
    })

    return (
      <Fundo>
        <FormPostagens>
              <input
                value={this.state.valorInputPessoa}
                onChange={this.onChangeInputPessoa}
                placeholder={"Nome"}
              />
              <input
                value={this.state.valorInputFoto}
                onChange={this.onChangeInputFoto}
                placeholder={"Foto"}
              />
              <input
                value={this.state.valorInputFotoPost}
                onChange={this.onChangeInputFotoPost}
                placeholder={"Post"}
              />
              <button onClick={this.adicionaUsuario}>Postar</button>
          </FormPostagens>
          <AppContainer>{postagens}</AppContainer>
      </Fundo>
    )
  }
}

export default App;
