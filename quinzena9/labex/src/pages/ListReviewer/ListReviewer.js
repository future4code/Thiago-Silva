import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { goToTravel, replaceToLogin } from '../../routes/Coordinator'

import { Login, ImageLogin, BotaoSair } from '../ListTravels/ListTravelsStyle'

import astronauta from '../../img/astronauta.gif'
import useProtectedPage from '../../hooks/useProtectedPage'
import useTravelData from '../../hooks/useTravelData'
import styled from 'styled-components'

const ListaViagens = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid white;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  background-image: url("https://img.elo7.com.br/product/original/328C273/tecido-galaxia-estampado-universo-microfibra-250-cm-x-150-cm-estamparia-vestidos.jpg");
  color: white;
`

export default function ListTravels() {
  const travels = useTravelData()
  const history = useHistory()
  useProtectedPage()

  const goBack = () => {
    history.goBack()
  }

  const deslogar = () => {
    localStorage.removeItem("token")
    replaceToLogin(history)
  }

  const details = (id) => {
    localStorage.setItem("idTravel", id)
    goToTravel(history, "lista")
  }

  useEffect(() => {

  }, [])

  return (
    <div>
      <button onClick={goBack}>voltar a home</button>
      <BotaoSair onClick={deslogar}>Sair</BotaoSair>
      <Login onClick={() => replaceToLogin(history)}><ImageLogin src={astronauta} /></Login>
     
        {travels.map((travel) => {

          return (
            <ListaViagens>
              <h3>{travel.name}</h3>
              <button onClick={() => details(travel.id)}>Verificar Candidatos</button>
            </ListaViagens>
          )
        })}
     
    </div>
  )
}