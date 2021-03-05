import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import CadidateList from '../pages/CandidateList'
import CreateNewTravel from '../pages/CreateNewTravel'
import { DetailsTravel } from '../pages/DetailsTravel'
import Home from '../pages/Home'
import ListTravels from '../pages/ListTravels'
import LoginWindow from '../pages/LoginWindow'
import Register from '../pages/Register'
import Subscription from '../pages/Subscription'
import ErrorPage from '../pages/ErrorPage'

import '../styles/style.css'
import {Container} from '../styles/HomeStyle'

export default function Router() {
    
  return (
    <div>

      <Home/>
      <Container>
      <BrowserRouter>
          <Switch>

            <Route exact path="/">
              <ListTravels />
            </Route>

            <Route exact path="/viagens/detalhes">
              <DetailsTravel />
            </Route>

            <Route exact path="/cadastro">
              <Subscription />
            </Route>

            <Route exact path="/login">
              <LoginWindow />
              <Register />
            </Route>

            <Route exact path="/viagens/criar">
              <CreateNewTravel />
            </Route>

            <Route exact path="/viagens/lista">
              <CadidateList />
            </Route>

            <Route exact path="/erro">
              <ErrorPage />
            </Route>

          </Switch>
      </BrowserRouter>
      </Container>
    </div>
  );
}