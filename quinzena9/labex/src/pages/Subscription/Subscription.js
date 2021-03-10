import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import useProtectedPage from '../../hooks/useProtectedPage'

const RegisterContainer = styled.div`
  border-radius: 50px;
  background-color: white;
  width: 250px;
  height: 200px;
  margin: 50px 10px;
`

const ContainerInputs = styled.div`
  text-align: center;
  margin-top: 20px;
`

export default function Subscription() {
  useProtectedPage()
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  return (
    <RegisterContainer>
      <button onClick={goBack}>voltar para a home</button>
      <h1>Inscrever</h1>
      <ContainerInputs>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="idade" />
        <input type="text" placeholder="motivo" />
        <input type="text" placeholder="profissão" />
        <input type="text" placeholder="país" />
      </ContainerInputs>
      <button>Enviar</button>
    </RegisterContainer>
  )
}