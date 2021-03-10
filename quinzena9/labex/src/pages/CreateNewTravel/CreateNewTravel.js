import React from 'react'
import { useHistory } from 'react-router-dom'

import { RegisterContainer, ContainerInputs } from './CreateNewTravelStyle'

import useProtectedPage from '../../hooks/useProtectedPage'

export default function CreateNewTravel() {
  useProtectedPage()

  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  return (
    <RegisterContainer>
      <button onClick={goBack}>Voltar a home</button>
      <h1>Criar Nova Viagem</h1>
      <ContainerInputs>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Planeta" />
        <input type="text" placeholder="Data" />
        <input type="text" placeholder="Descrição" />
        <input type="text" placeholder="Duração" />
      </ContainerInputs>
      <button>Enviar</button>
    </RegisterContainer>
  )
}