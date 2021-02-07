import React from  'react'
import styled from 'styled-components'
import {BASE_URL, axiosConfig} from '../constantes/requisicoes'
import axios from 'axios'
import {CriaNovaLista, BotaoCriar} from './estilos'


class CriarPlaylist extends React.Component{
    state = {
        name: "",
        inputNovaPlaylist: ""
    }

    onChangeNovaLista = (evento) => {
        this.setState({inputNovaPlaylist: evento.target.value})
        console.log(this.state.inputNovaPlaylist)
    }

    criarNovaPlayList = () => {
        const body = {
            name: this.state.inputNovaPlaylist
        }
        axios
        .post(`${BASE_URL}`, body, axiosConfig)
        .then((resposta) => {
            console.log(resposta)
            alert(`Playlist criada com sucesso!`)
        })
        .catch((erro) => {
            console.log(erro)
            alert("erro no cadastro")
        })

        this.setState({inputNovaPlaylist: ""})
    } 


    render(){
        return(
            <CriaNovaLista>
            <input
                value={this.state.inputNovaPlaylist}
                onChange={this.onChangeNovaLista}
            />
            <BotaoCriar onClick={this.criarNovaPlayList}>Crie Sua Playlist</BotaoCriar>
            </CriaNovaLista>
        )
    }
}

export default CriarPlaylist