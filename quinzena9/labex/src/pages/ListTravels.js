import React from 'react'
import { useHistory } from 'react-router-dom'

import {Travels, Display, Container, Login, ImageLogin} from '../styles/ListTravelsStyle'

import astronauta from '../img/astronauta.gif'

export default function ListTravels() {
  const history = useHistory()

  const goToRegister = () => {
    history.push("/cadastro")
  }

  const goToCreateTravel = () => {
    history.push("/criar-nova-viagem")
  }

  const goToCandidates = () => {
    history.push("/lista-cadidatos")
  }

  const goToDetailsTravel = () => {
    history.push("/viagens")
  }

  const goToLoginWindow = () => {
    history.push("/login")
}

    return(
      <div>
        <div>
        <button onClick={goToCreateTravel}>Criar Nova Viagem</button>
        <div>
          <button onClick={goToDetailsTravel}>Destalhes Viagens</button>
          <button onClick={goToCandidates}>Lista de Candidatos</button>
        </div>
        </div>
        <Login onClick={goToLoginWindow}><ImageLogin src={astronauta}/></Login>
        <Container>
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
        
        <button onClick={goToRegister}>Inscrever-se</button>
        </Travels>
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
        
        <button onClick={goToRegister}>Inscrever-se</button>
        </Travels>
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
        
        <button onClick={goToRegister}>Inscrever-se</button>
        </Travels>
        </Container>
      </div>
    )
}