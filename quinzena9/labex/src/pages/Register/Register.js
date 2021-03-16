import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { BASE_URL } from '../../constants/Request'

import {RegisterContainer, ContainerInputs} from './RegisterStyle'

export default function Register() {
    const [inputEmail, setInputEmail] = useState("")
    const [inputSenha, setInputSenha] = useState("")

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

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
        <div>
            <button onClick={goBack}>Retornar a home</button>
            
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
        </div>
    )
}