import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import ele from './img/ol.png'
import deathnote from './img/death-note.jpg'
import akame from './img/akame_perfil.png'
import akamePost from './img/akame.png'


class App extends React.Component {
  state = {
    usuarios: [
      {
        nomeUsuario:"Akame",
        fotoUsuario: akame,
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
    ]
  }

  adicionaUsuario = () => {
    const novoUsuario = {
      nome: this.state.valorInputPessoa,
      foto: this.state.valorInputFoto,
      fotoPost: this.state.valorInputFotoPost
    };

    const novoUsuarios = [...this.state.usuarios, novoUsuario];
    this.setState({ usuarios: novoUsuarios });
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
      return (
        <Post>
          {usuario.nomeUsuario}
          {usuario.fotoUsuario}
          {usuario.fotoPost}
        </Post>
      )
    })

    return (
      <div>
     <div>
          <input
            // Mesma lógica do exemplo anterior
            value={this.state.valorInputPessoa}
            // Repare na função que é passada aqui no onChange
            onChange={this.onChangeInputPessoa}
            placeholder={"Nome"}
          />
          <input
            // Diferente do input acima, a variável de estado aqui é outra
            value={this.state.valorInputFoto}
            // E a função também é outra
            onChange={this.onChangeInputFoto}
            placeholder={"Foto"}
          />
          <input
            // Diferente do input acima, a variável de estado aqui é outra
            value={this.state.valorInputFotoPost}
            // E a função também é outra
            onChange={this.onChangeInputFotoPost}
            placeholder={"FotoPost"}
          />
          <button onClick={this.adicionaUsuario}>Postar</button>
        </div>

      <div className={'app-container'}>{postagens}</div>
      </div>
    )
  }
}

export default App;
