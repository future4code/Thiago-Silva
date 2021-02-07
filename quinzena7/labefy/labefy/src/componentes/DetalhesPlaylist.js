import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import ReactAudioPlayer from 'react-audio-player'
import {BASE_URL, axiosConfig} from '../constantes/requisicoes'
import {BlocoListagem, Listagem, BolinhaImg} from './estilos'

class DetalhesPlaylist extends React.Component {
  state = {
    musicas: [],
    idPlaylist:"",
    nomeplaylistEscolhida:""
  }

  componentDidMount() {
    this.setState({idPlaylist: this.props.id, nomeplaylistEscolhida: this.props.nome})
    this.listaMusicas()
  }
    
    listaMusicas = async () => {
        try {
          const id = this.state.idPlaylist
          const resposta = await axios.get(`${BASE_URL}/${id}/tracks`, axiosConfig)
          this.setState({musicas:resposta.data.result.list})
        } catch (erro) {
          alert(erro.message);
        }
      }

  render(){
    const lista = this.state.musicas.map((play) =>{
      return(
        <Listagem>
            <BolinhaImg alt="imagem" src="https://picsum.photos/100/100"/>
            <p>{play.nome}</p>
            <ReactAudioPlayer src={play.url} controls />
        </Listagem>
        
      )
    })

    return (
        <BlocoListagem>
            <Listagem>
                <h1>{this.state.nomeplaylistEscolhida}</h1>
                <p>{lista}</p>
            </Listagem>
        </BlocoListagem>
    )
  }
    
}

export default DetalhesPlaylist;
