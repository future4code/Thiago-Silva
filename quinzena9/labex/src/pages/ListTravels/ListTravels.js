import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { goToTravel, replaceToLogin } from '../../routes/Coordinator'

import { Travels, Container, ImgTravel, Login, ImageLogin, BotaoSair } from './ListTravelsStyle'

import astronauta from '../../img/astronauta.gif'
import useProtectedPage from '../../hooks/useProtectedPage'
import useTravelData from '../../hooks/useTravelData'


export default function ListTravels() {
  const travels = useTravelData()
  const history = useHistory()
  useProtectedPage()
  
  const deslogar = () => {
    localStorage.removeItem("token")
    replaceToLogin(history)
  }

  const details = (id) => {
    localStorage.setItem("idTravel", id)
    goToTravel(history, "detalhes")
  }

  useEffect(() => {
    
  },[])
  
  return(
    <div>
      <BotaoSair onClick={deslogar}>Sair</BotaoSair>
      <div>
        <button onClick={() => goToTravel(history, "criar")}>Criar Nova Viagem</button>
        <button onClick={() => goToTravel(history, "revisor")}>Lista de Candidatos</button>
      </div>
        <Login onClick={() => replaceToLogin(history)}><ImageLogin src={astronauta}/></Login>
        <Container>
          {travels.map((travel) =>{
              
              return (
                <Travels>
                  <h3>{travel.name}</h3>
                  <ImgTravel>
                  <div><img src='https://picsum.photos/200/250' /></div>
                  
                  </ImgTravel>
                  <button onClick={() => details(travel.id)}>Detalhes</button>
                </Travels>
              )
          })}
        </Container>
      </div>
  )
}