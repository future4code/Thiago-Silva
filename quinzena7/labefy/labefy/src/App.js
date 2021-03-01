import React from 'react'
import styled from 'styled-components'
import GlobalStyle from './Global/GlobalEstilo'
import axios from 'axios'
import {BASE_URL, axiosConfig} from './constantes/requisicoes'
import CriarPlaylist from './componentes/CriarPlaylist'
import ListadeMusicas from './componentes/Musicas'
import DetalhesPlaylist from './componentes/DetalhesPlaylist'
import {SecaoPrincipal, ReferenciaTitulo, SecaoPlaylists, 
        Lista, ItemLista, BotaoDeletar, 
        Cabecalho, Voltar, Paravoltar, IrPlaylist} from './componentes/estilos'

class App extends React.Component {
  state = {
    playLists: [],
    seletor:"musicas",
    playlistEscolhida: "",
    nomeplaylistEscolhida: ""
  }

  seletorMusicasEPlaylist = () => {
    switch (this.state.seletor) {
      case "musicas":
        return <ListadeMusicas/>
      case "playlistSelecionada":
        return <DetalhesPlaylist id={this.state.playlistEscolhida} nome={this.state.nomeplaylistEscolhida}/>
      default:
        return <div>Erro: página não encontrada</div>
    }
  }

  componentDidMount() {
    this.listaPlayLists()
  }

  componentDidUpdate() {
    this.listaPlayLists()
  }

  listaPlayLists = async () => {
      try {
        const resposta = await axios.get(`${BASE_URL}`, axiosConfig)
        this.setState({playLists:resposta.data.result.list})
      } catch (erro) {
        alert(erro.message);
      }
    }

    addMusicaNaPlayList = () => {
      const body = {
        nome: this.state.inputNomeMusica,
        artist: this.state.inputArtista,
        url: this.state.inputUrl
      }
      axios
      .get(`${BASE_URL}/${this.state.playlistEscolhida}/tracks`, body, axiosConfig)
        .then((resposta) => {
          alert(`Playlist Deletada com sucesso!`)
      }).catch ((erro) => {
        alert(erro.message);
      })
    }

    OnClickDel = (id) => {
        axios
        .delete(`${BASE_URL}/${id}`, axiosConfig)
        .then((resposta) => {
            alert(`Playlist Deletada com sucesso!`)
        })
        .catch((erro) => {
            alert("erro no cadastro")
        })

    }

    irParaPlaylist = (evento) => {
    
      this.state.playLists.map((play) =>{
        if(this.state.playlistEscolhida === play.id){
          return(
             this.setState({nomeplaylistEscolhida: play.name})
            )
        }
        
      })

      this.setState({playlistEscolhida: evento.target.value, seletor:"playlistSelecionada"})
    }

    irParaHome = () => {
      this.setState({seletor:"musicas"})
    }

  render(){
    const lista = this.state.playLists.map((play) =>{
      return(
          <ItemLista>
              <p>{play.name}</p>
              <BotaoDeletar onClick={() => {this.OnClickDel(play.id)}}>X</BotaoDeletar>
          </ItemLista>
      )
    })

    const playlists = this.state.playLists.map((play) =>{
      return(
          <option key={play.id} value={play.id}>{play.name}</option>
      )
      })

    return (
      <div>
        <GlobalStyle/>
        <Voltar><Cabecalho onClick={this.irParaHome}>{this.state.seletor === "musicas" || <Paravoltar>Voltar</Paravoltar>}LABEFY</Cabecalho></Voltar>
        
        <IrPlaylist>
          <select onChange={this.irParaPlaylist} value={this.state.playlistEscolhida}>
            <option>Selecione a Playlist para escutar</option>
            {playlists}
          </select>
        </IrPlaylist>
        <SecaoPrincipal>
          <SecaoPlaylists>
            <ReferenciaTitulo>Playlists</ReferenciaTitulo>
            <CriarPlaylist/>
            <Lista>{lista}</Lista>
          </SecaoPlaylists>
          {this.seletorMusicasEPlaylist()}
        </SecaoPrincipal>
      </div>
    )
  }
    
}

export default App;
