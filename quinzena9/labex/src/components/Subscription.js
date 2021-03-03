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

export default function Subscription() {
    return(
        <RegisterContainer>
            <h1>Inscrever</h1>
            <ContainerInputs>
              <input type="text" placeholder="Nome"/>
              <input type="text" placeholder="idade"/>
              <input type="text" placeholder="motivo"/>
              <input type="text" placeholder="profissão"/>
              <input type="text" placeholder="país"/>
            </ContainerInputs>
            <button>Enviar</button>
        </RegisterContainer>
    )
}