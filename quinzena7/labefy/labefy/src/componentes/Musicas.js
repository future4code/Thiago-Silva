import React from  'react'
import styled from 'styled-components'
import {BASE_URL, axiosConfig} from '../constantes/requisicoes'
import axios from 'axios'
import ReactAudioPlayer from 'react-audio-player'
import { getAllByPlaceholderText } from '@testing-library/react'

const BlocoListagem = styled.div`
    border: 3px solid  #1793d1;
    border-radius:70px;
    margin: 10px 50px;
`

const Listagem = styled.div`
    display:flex;
    justify-content: column;
    align-items: center;
    justify-content: space-between;
    margin:40px;
    padding: 20px;
    border: 2px solid gray;
    border-radius:70px;
`

const EscolherPlaylist = styled.div`
    display:flex;
    justify-content: column;
    align-items: center;
    margin:20px 200px;
    padding:10px;
`

const BolinhaImg = styled.img`
    border-radius: 50%;
`
const BotaoAdicionar = styled.button`
    padding:5px;
    background-color: green;
    color:white;
    border-radius: 50px;
    font-size: 30px;
    border:none;
    outline-style: none;
`

class ListadeMusicas extends React.Component{
    state = {
        playLists: [],

        musicas: [
            {   
                id: 0,
                nome: "A Barca",
                artist: "Barca",
                url: "https://immub-space.nyc3.digitaloceanspaces.com/musicas/894996.mp3" 
            },
            {   
                id: 1,
                nome: "Cobra Salamanta",
                artist: "Barca",
                url: "https://immub-space.nyc3.digitaloceanspaces.com/musicas/894997.mp3" 
            },
            {   
                id: 2,
                nome: "Na Reunida Flor do Campo Chegou",
                artist: "Barca",
                url: "https://immub-space.nyc3.digitaloceanspaces.com/musicas/894998.mp3" 
            },
            {   
                id: 3,
                nome: "Mucura",
                artist: "Barca",
                url: "https://immub-space.nyc3.digitaloceanspaces.com/musicas/894999.mp3" 
            },
            {   
                id: 4,
                nome: "Estrela Guia",
                artist: "Barca",
                url: "https://immub-space.nyc3.digitaloceanspaces.com/musicas/895000.mp3" 
            },
            {   
                id: 5,
                nome: "Dona Maria",
                artist: "Barca",
                url: "https://immub-space.nyc3.digitaloceanspaces.com/musicas/895001.mp3" 
            },
            {   
                id: 6,
                nome: "Dona Mariquinha",
                artist: "Barca",
                url: "https://immub-space.nyc3.digitaloceanspaces.com/musicas/895002.mp3" 
            },
            {
                id: 7,
                nome: "Balança o Galho da Limeira",
                artist: "Barca",
                url: "https://immub-space.nyc3.digitaloceanspaces.com/musicas/895003.mp3" 
            },
            {
                id: 8,
                nome: "Oleleô Cauã ",
                artist: "Barca",
                url: "https://immub-space.nyc3.digitaloceanspaces.com/musicas/895004.mp3" 
            },
            {
                id: 9,
                nome: "Bichinho Canário",
                artist: "Barca",
                url: "https://immub-space.nyc3.digitaloceanspaces.com/musicas/895005.mp3" 
            }
            
        ],
        name: "",
        artist: "",
        url: "",
        playlistEscolhida: ""
    }

    componentDidMount() {
        this.listaMusicas()
    }
    
      listaMusicas = async () => {
          try {
            const resposta = await axios.get(`${BASE_URL}`, axiosConfig)
            this.setState({playLists:resposta.data.result.list})
          } catch (erro) {
            alert(erro.message);
          }
        }

        selecionaPlaylist = (evento) => {
            this.setState({playlistEscolhida: evento.target.value})
        }

       

        OnClickAddMusica = (id) => {
            alert(`Identificação da música:${id}`)
            alert(`A playlista escolhida é ${this.state.playlistEscolhida}`)
            // const body = {
            //     name: this.state.inputNomeMusica,
            //     artist: this.state.inputArtista,
            //     url: this.state.inputUrl
            // }
            // axios
            // .post(`${BASE_URL}/${id}/tracks`, body, axiosConfig)
            // .then((resposta) => {
            //     alert(`Musica adicionada a Playlist`)
            // })
            // .catch((erro) => {
            //     alert("erro no cadastro")
            // })
    
        }

    render(){
        const playlists = this.state.playLists.map((play) =>{
            return(
                <option key={play.id} value={play.name}>{play.name}</option>
            )
            })

        const lista = this.state.musicas.map((play) =>{
            return(
                <Listagem>
                    <BolinhaImg alt="imagem" src="https://picsum.photos/100/100"/>
                    <p>{play.nome}</p>
                    <ReactAudioPlayer src={play.url} controls />
                    <BotaoAdicionar onClick={() => {this.OnClickAddMusica(play.id)}}>+</BotaoAdicionar>
                </Listagem>
            )
        })

        return(
            <BlocoListagem>
                <EscolherPlaylist>
                    <select onChange={this.selecionaPlaylist} value={this.state.playlistEscolhida}>
                        <option>Escolha a Playlist E adicione a música que preferir</option>
                        {playlists}
                    </select>
                </EscolherPlaylist>
                {lista}
            </BlocoListagem>
        )
    }
}

export default ListadeMusicas