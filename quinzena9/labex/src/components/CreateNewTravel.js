import React from 'react'
import styled from 'styled-components'

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

export default function Register() {
    return(
        <RegisterContainer>
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