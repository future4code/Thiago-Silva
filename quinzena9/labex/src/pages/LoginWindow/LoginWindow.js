import React, { useEffect, useState } from 'react'
import axios from 'axios'

import styled from 'styled-components'

import { BASE_URL, aluno } from '../../constants/Request'
import { useHistory } from 'react-router-dom'
import astronauta from '../../img/astronauta.gif'

import { goToListTrip } from '../../routes/Coordinator'

import { ImageLogin } from '../ListTravels/ListTravelsStyle'

const LoginContainer = styled.div`
  border-radius: 50px;
  width: 300px;
  height: 200px;
  margin: 0px 10px;
`

const ContainerInputs = styled.div`
  text-align: center;
  margin-top: 20px;
`

const LoginButton = styled.button`
  margin-top: 20px;
`

export default function LoginWindow() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const history = useHistory()

  const logar = () => {
    const body = {
      email,
      password
    }
    axios
      .post(`${BASE_URL + aluno}login`, body)
      .then((resposta) => {
        localStorage.setItem("token", resposta.data.token)
      })
      .catch((erro) => {
        console.log(erro)
      })

  }

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      goToListTrip(history, 'viagens')
    }
  }, [history])

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onChangeSenha = (event) => {
    setPassword(event.target.value)
  }

  return (
    <LoginContainer>
      <h1><ImageLogin src={astronauta} /></h1>
      <ContainerInputs>
        <input
          type="email"
          placeholder="e-mail"
          value={email}
          onChange={onChangeEmail}
        />

        <input
          type="password"
          placeholder="senha"
          value={password}
          onChange={onChangeSenha}
        />
      </ContainerInputs>
      <LoginButton onClick={logar}>Login</LoginButton>
    </LoginContainer>
  )
}