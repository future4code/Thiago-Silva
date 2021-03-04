import React from 'react'
import { useHistory } from 'react-router-dom'

import {RegisterContainer, ContainerInputs} from '../styles/CreateNewTravelStyle'

export default function CreateNewTravel () {
    const history = useHistory()

    const goToHome = () => {
      history.push("/")
    }
    return(
        <RegisterContainer>
            <button onClick={goToHome}>Voltar a home</button>
            <h1>Criar Nova Viagem</h1>
            <ContainerInputs>
              <input type="text" placeholder="Nome"/>
              <input type="text" placeholder="Planeta"/>
              <input type="text" placeholder="Data"/>
              <input type="text" placeholder="Descrição"/>
              <input type="text" placeholder="Duração"/>
            </ContainerInputs>
            <button>Enviar</button>
        </RegisterContainer>
    )
}