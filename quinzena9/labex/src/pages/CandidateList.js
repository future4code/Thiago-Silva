import React from 'react'
import { useHistory } from 'react-router-dom'

import {RegisterContainer, ContainerInputs} from '../styles/CandidateListStyle'

export default function CandidateList () {
  const history = useHistory()

  const goToHome = () => {
      history.push("/")
  }
  return(
    <RegisterContainer>

      <button onClick={goToHome}>voltar a home</button>

      <h1>Lista de Candidatos</h1>

      <ContainerInputs>
        <p>Nome</p>
        <p>Descrição</p>
      </ContainerInputs>

      <button>Enviar</button>
      
    </RegisterContainer>
  )
}