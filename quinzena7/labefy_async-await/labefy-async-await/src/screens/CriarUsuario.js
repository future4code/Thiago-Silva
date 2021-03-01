import React from  'react'
import styled from 'styled-components'
import { BASE_URL, axiosConfig } from "../constants/requisicoes";
import axios from "axios";


const Bloco = styled.header`
  display:grid;
  width:15%;
  margin-left:40%;
  margin-top:5%;
  border: 1px solid rgb(49, 52, 62);
  border-radius:10%;
  padding: 20px;
`

const CampoInput = styled.input`
  margin: 10px;
`

const BotaoEnviar = styled.button`
  background-color: green;
  color:white;
  border-radius:10px;
  border-style: none;
  margin-top:10px;
  padding: 10px;
`

class CriarUsuarios extends React.Component{
    state = {
        nomeAtualUsuario: "",
        emailAtualUsuario: "",
    }
    
    onChageNomeValue = (event) => {
        this.setState({nomeAtualUsuario: event.target.value})
        console.log(this.state.nomeAtualUsuario)
    }
    
    onChangeEmailValue = (event) => {
        this.setState({emailAtualUsuario: event.target.value})
        console.log(this.state.emailAtualUsuario)
    }

    criarUsuario = () => {
        const body = {
          name: this.state.nomeAtualUsuario,
          email: this.state.emailAtualUsuario
        }
    
        axios
            .post(`${BASE_URL}/users`, body, axiosConfig)
            .then(() => {
                alert(`O usuário ${this.state.nomeAtualUsuario} criado`)
                this.setState({
                nomeAtualUsuario: "",
                emailAtualUsuario: ""
                })
            })
            .catch((erro) => {
                alert(erro.message)
            })
        
      }

    render() {
        return(
        <Bloco>
            <label>Nome:</label>
            
            <CampoInput
              placeholder="nome"
              value={this.state.nomeAtualUsuario}
              onChange={this.onChageNomeValue}/>

            <label>E-mail:</label>

            <CampoInput 
              placeholder="e-mail"
              value={this.state.emailAtualUsuario}
              onChange={this.onChangeEmailValue}/>

            <BotaoEnviar onClick={this.criarUsuario}>Enviar</BotaoEnviar>
        </Bloco>
        )
    }
}

export default CriarUsuarios
