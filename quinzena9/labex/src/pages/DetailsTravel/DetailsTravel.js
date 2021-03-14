import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { goToRegister, goToListTrip } from '../../routes/Coordinator'

import useProtectedPage from '../../hooks/useProtectedPage'
import useTravelData from '../../hooks/useTravelData'
import { Travels, Display, Container, InfoTrip } from '../ListTravels/ListTravelsStyle'

export default function DetailsTravel() {
  const travels = useTravelData()
  const idTravel = localStorage.getItem("idTravel")
  useProtectedPage()

  const history = useHistory()

  const goBack = () => {
    localStorage.removeItem("idTravel")
    goToListTrip(history)
  }

  


  return (
    <div>
      <button onClick={goBack}>voltar para home</button>
        <Container>
        {travels.map((travel) =>{
          if(idTravel === travel.id){
            return (
              <Travels>
                <h3>{travel.name}</h3>
                <Display>
                <div><img src='https://picsum.photos/110/250' /></div>
                <InfoTrip>
                  <h4>Planeta</h4>
                  <p>{travel.planet}</p>
                  <h4>Descrição:</h4>
                  <p>{travel.description}</p>
                  <p>Duração: {travel.durationInDays}</p>
                  <p>Data: {travel.date}</p>
                </InfoTrip>
                </Display>
                <button onClick={() => goToRegister(history)}>Inscrever-se</button>
              </Travels>
            )
          } 
        })}
      </Container>
      
      
    </div>
  )
}