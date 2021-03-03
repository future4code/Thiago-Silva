import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import ListTravels from './components/ListTravels'
import Register from './components/Register'
import LoginWindow from './components/LoginWindow'

import './styles/style.css'
import {
        Title, 
        Header, 
        Login, 
        ImageLogin, 
        Search, 
        ContainerTravels 
}from './styles/AppStyle'

import astronauta from './img/astronauta.gif'


function App() {
  return (
    <div>

      <Title>
        LabeX
      </Title>
      
      <Header>
      <Search><input type="text"/></Search>
      <Login><ImageLogin src={astronauta}/></Login>
      </Header>

      <ContainerTravels>
        {/* <ListTravels/>
        <ListTravels/>
        <ListTravels/> */}
        <Register/>
        <LoginWindow/>
      </ContainerTravels>
    </div>
  );
}

export default App;
