import React from 'react'
import styled from 'styled-components'

import foguete from '../img/foguete.PNG'

const Travels = styled.div`
  border-radius: 50px;
  background-color: white;
  width: 250px;
  height: 400px;
  margin: 50px 10px;
` 

const Display = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: right;
  font-size: 12px;
  margin:10px;
`

export default function ListTravels() {
    return(
        <Travels>
            <h1>Viagem 1</h1>
            <Display>
              <div><img src='https://picsum.photos/110/250' /></div>
              <div>
              <h3>Planeta:</h3>
              <p>Plutão</p>
              <h3>Descrição:</h3>
              <p>Único tour que fazemos em planeta anão no sistema solar! Levem casacos que a previsão é de −230 °C</p>
              <p>Duração: 980</p>
              <p>Data: 21/12/2021</p>
              </div>
            </Display>
            <button>Inscrever-se</button>
        </Travels>
    )
}