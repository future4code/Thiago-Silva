import React from 'react'
import { useHistory } from 'react-router-dom'

import {RegisterContainer, ContainerInputs} from './CandidateListStyle'

import useProtectedPage from '../../hooks/useProtectedPage'

export default function CandidateList () {
  useProtectedPage()
  
  const history = useHistory()

  const goBack = () => {
      history.goBack()
  }

  return(
    <RegisterContainer>

      <button onClick={goBack}>voltar a home</button>

      <h1>Lista de Candidatos</h1>

      <ContainerInputs>
        <p>Nome</p>
        <p>Descrição</p>
      </ContainerInputs>

      <button>Enviar</button>
      
    </RegisterContainer>
  )
}