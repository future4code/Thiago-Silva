import axios from 'axios'
import React, { useState } from 'react'

import { BASE_URL } from '../requests/Request'

import {RegisterContainer, ContainerInputs} from '../styles/RegisterStyle'


export default function Register() {
    const [inputEmail, setInputEmail] = useState("")
    const [inputSenha, setInputSenha] = useState("")

    const onChangeEmail = (event) => {
        setInputEmail(event.target.value)
        console.log(inputEmail)
    }

    const onChangeSenha = (event) => {
        setInputSenha(event.target.value)
        console.log(inputSenha)
    }
    
    const NewRegister = () => {
        const body = {
            email: inputEmail,
	        password: inputSenha
        }
        axios
        .post(`${BASE_URL}`, body)
        .then((resposta) => {
            console.log(resposta)
            alert(`Novo Usuário Criado com Sucesso`)
        })
        .catch((erro) => {
            console.log(erro)
            alert("erro no cadastro")
        })
    } 

    return(
        <RegisterContainer>
            <h1>Cadastrar</h1>
            <ContainerInputs>
              <input 
                value = {inputEmail}
                onChange = {onChangeEmail}
              />
              <input 
                type="password"
                value = {inputSenha}
                onChange = {onChangeSenha}
              />
            </ContainerInputs>
            <button onClick={NewRegister}>Cadastrar</button>
        </RegisterContainer>
    )
}