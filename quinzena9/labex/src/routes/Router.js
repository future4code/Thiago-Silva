import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import CadidateList from '../pages/CandidateList/CandidateList'
import CreateNewTravel from '../pages/CreateNewTravel/CreateNewTravel'
import DetailsTravel from '../pages/DetailsTravel/DetailsTravel'
import ListTravels from '../pages/ListTravels/ListTravels'
import LoginWindow from '../pages/LoginWindow/LoginWindow'
import Register from '../pages/Register/Register'
import Subscription from '../pages/Subscription/Subscription'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Home from '../pages/Home/Home'
import ListReviewer from '../pages/ListReviewer/ListReviewer'

import '../styles/style.css'
import {Container} from '../pages/Home/HomeStyle'

export default function Router() {
    
  return (
   

      
      <BrowserRouter>
      <Home/>
      <Container>
          <Switch>

            <Route exact path="/viagens">
              <ListTravels />
            </Route>

            <Route exact path="/viagens/detalhes">
              <DetailsTravel />
            </Route>

            <Route exact path="/cadastro">
              <Subscription />
            </Route>

            <Route exact path="/">
              <LoginWindow />
            </Route>

            <Route exact path="/login">
              <LoginWindow />
            </Route>

            <Route exact path="/viagens/criar">
              <CreateNewTravel />
            </Route>

            <Route exact path="/viagens/lista">
              <CadidateList />
            </Route>

            <Route exact path="/viagens/revisor">
              <ListReviewer />
            </Route>

            <Route exact path="/erro">
              <ErrorPage />
            </Route>

          </Switch>
          </Container>
      </BrowserRouter>
    
  )
}