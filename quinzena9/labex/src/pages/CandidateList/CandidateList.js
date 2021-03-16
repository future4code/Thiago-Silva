import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from  'axios'
import { BASE_URL, pontosParaViagens, axiosConfig} from '../../constants/Request'

import {RegisterContainer} from './CandidateListStyle'

import useProtectedPage from '../../hooks/useProtectedPage'

export default function CandidateList () {
  const [listCandidates, setListCandidates] = useState([])
  const [travel, setTravel] = useState([])
  const idTravel = localStorage.getItem("idTravel")
  useProtectedPage()
  
  const history = useHistory()

  const goBack = () => {
    localStorage.removeItem("idTravel")
      history.goBack()
  }

  useEffect(()=>{
    axios
    .get(`${BASE_URL + pontosParaViagens}trip/:${idTravel}`, axiosConfig)
    .then((resposta) => {
      setListCandidates(resposta.data.trip.candidates)
      console.log(listCandidates)
      setTravel(resposta.data.trip)
      console.log(travel)
    })
    .catch((erro) => {
      console.log(erro)
    })
  },[])

  return(
    <RegisterContainer>

      <button onClick={goBack}>voltar a home</button>

      
      {travel.map((trip) =>{
              
              return (
                <div>
                  <h1>{trip.name}</h1>
                  
                </div>
              )
      })}
      <h3>Lista de Candidatos</h3>
      {listCandidates.map((candidate) =>{
              
              return (
                <div>
                  <h3>{candidate.name} | {candidate.country}</h3>
                  <p>idade: {candidate.age} | profissão:{candidate.profession}</p>
                  <p>{candidate.applicationText}</p>
                </div>
              )
      })}
      
    </RegisterContainer>
  )
}