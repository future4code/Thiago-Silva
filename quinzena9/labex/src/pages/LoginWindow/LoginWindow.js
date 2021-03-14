import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL, aluno } from '../../constants/Request'
import { useHistory } from 'react-router-dom'
import astronauta from '../../img/astronauta.gif'
import { ImageLogin } from '../ListTravels/ListTravelsStyle'
import { goToListTrip } from '../../routes/Coordinator'
import { LoginContainer, ContainerInputs, LoginButton, ContainerLoader, Loader} from './LoginStyle'

export default function LoginWindow() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loaderOn, setLoaderOn] = useState(false)

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
        goToListTrip(history, 'viagens')
      })
      .catch((erro) => {
        console.log(erro)
      })

     const token = localStorage.getItem("token")
     setLoaderOn(true)
      do{
        if(token){
          goToListTrip(history, 'viagens')
        }
      }while(token)
     

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
      <div></div>
      {loaderOn && <ContainerLoader><Loader></Loader></ContainerLoader>}
    </LoginContainer>
  )
}