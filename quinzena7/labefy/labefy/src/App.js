import React from 'react'
import styled from 'styled-components'
import GlobalStyle from './Global/GlobalEstilo'
import axios from 'axios'
import {BASE_URL, axiosConfig} from './constantes/requisicoes'
import CriarPlaylist from './componentes/CriarPlaylist'
import ListadeMusicas from './componentes/Musicas'
import DetalhesPlaylist from './componentes/DetalhesPlaylist'

const SecaoPrincipal = styled.div`
  display:flex;
  justify-content: row;
  align-items: top;
  margin: 30px;
  border: 1px solid #abb2bf;
  border-radius:10px;
`

const ReferenciaTitulo = styled.h1`
  margin: 10px 70px;
`

const SecaoPlaylists = styled.div`
  margin: 10px;
  border: 3px solid #1793d1;
  border-radius:10px;
`
const Lista = styled.div`
  margin:30px;
`

const ItemLista = styled.div`
  display:flex;
  justify-content: space-between;
  margin:5px;
  padding:5px;
  border: 1px solid black;
`
const BotaoDeletar = styled.button`
  background-color: red;
  color: white;
  border:none;
  outline-style: none;
  padding:3px;
  border-radius:50%;
`

const Cabecalho = styled.header`
  width:100vw;
  height:60px;
  background-color: #1793d1;
  display:flex;
  justify-content: center;
  align-items: center;
`

const Voltar = styled.button`
  background-color: #1793d1;
  color: white;
  border:none;
  outline-style: none;
  font-size: 50px;
`
const Paravoltar = styled.p`
  left: 35px;
  position: absolute;
  font-size:15px;
  padding:10px;
`

const IrPlaylist = styled.div`
    display:flex;
    justify-content: column;
    align-items: center;
    margin:20px 50px;
    padding:10px;
`

class App extends React.Component {
  state = {
    playLists: [],
    seletor:"musicas",
    playlistEscolhida: ""
  }

  seletorMusicasEPlaylist = () => {
    switch (this.state.seletor) {
      case "musicas":
        return <ListadeMusicas/>
      case "playlistSelecionada":
        return <DetalhesPlaylist id={this.state.playlistEscolhida}/>
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
      const body = [
        "name": "KARATE", 
        "artist": "BABYMETAL",
        "url": "https://www.youtube.com/watch?v=GvD3CHA48pA&list=PL8akiHUX0PI1bfzIytmEoZpjPI8joQtRf"
      ]
      axios
      .get(`${BASE_URL}/${id}/${}`, body, axiosConfig)
        this.setState({playLists:resposta.data.result.list})
      } catch (erro) {
        alert(erro.message);
      }
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
      alert(evento.target.value)
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
