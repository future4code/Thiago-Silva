import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {BASE_URL} from '../requests/Request'
import { useHistory } from 'react-router-dom'
import {goToTravel, goToRegister, goToLoginWindow} from '../routes/Coordinator'

import {Travels, Display, Container, Login, ImageLogin} from '../styles/ListTravelsStyle'

import astronauta from '../img/astronauta.gif'

export default function ListTravels() {
  const [listTravel, setListTravel] = useState([])

  const history = useHistory()

  const viagens = () => {
    axios.get(`${BASE_URL}trips`)
    .then((resposta) => {
      setListTravel(resposta.data.trips)
    })
    .catch((erro) => {
      console.log(erro)
    })
  }
  
  

  useEffect(() => {
    viagens()
  },[])

  return(
    <div>
      <div>
        <button onClick={() => goToTravel(history, "criar")}>Criar Nova Viagem</button>
        <div>
          <button onClick={() => goToTravel(history, "detalhes")}>Destalhes Viagens</button>
          <button onClick={() => goToTravel(history, "lista")}>Lista de Candidatos</button>
        </div>
      </div>
        <Login onClick={() => goToLoginWindow(history)}><ImageLogin src={astronauta}/></Login>
        <Container>
          {listTravel.map((travel) =>{
              return (
                <Travels>
                  <h3>{travel.name}</h3>
                  <Display>
                  <div><img src='https://picsum.photos/110/250' /></div>
                  <div>
                    <h4>Planeta</h4>
                    <p>{travel.planet}</p>
                    <h4>Descrição:</h4>
                    <p>{travel.description}</p>
                    <p>Duração: {travel.durationInDays}</p>
                    <p>Data: {travel.date}</p>
                  </div>
                  </Display>
                  <button onClick={() => goToRegister(history)}>Inscrever-se</button>
                </Travels>
              )
          })}
        </Container>
      </div>
  )
}