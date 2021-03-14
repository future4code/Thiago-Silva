import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { BASE_URL, pontosParaViagens, axiosConfig } from '../../constants/Request'

import { goToListTrip } from '../../routes/Coordinator'

import useProtectedPage from '../../hooks/useProtectedPage'
import { useForm } from '../../hooks/useForm'

import { RegisterContainer, ContainerInputs, SelectCountry, ButtonEnviar, ButtonGoBack } from './SubscriptionStyle'

export default function Subscription() {
  const [country, setCountry] = useState([])

  const idTravel = localStorage.getItem("idTravel")

  useProtectedPage()
  const history = useHistory()


  useEffect(() => {

    axios
      .get(`https://servicodados.ibge.gov.br/api/v1/localidades/paises`)
      .then((resposta) => {
        setCountry(resposta.data)
      })
      .catch((erro) => {
        console.log(erro)
      })

  }, [])

  const FormSubscription = () => {
    const {form, onChange} = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" })

    console.log(form)

    const handleInput = (event) => {
      const { value, name } = event.target
      onChange(value, name)
      console.log(event.target.value)
    };

    const formTrip = (event) => {
      event.preventDefault()
      const body = {
        id: idTravel,
        name: form.name,
        age: form.age,
        applicationText: form.applicationText,
        profession: form.profession,
        country: form.country
      }

      axios
      .post(`${BASE_URL + pontosParaViagens}trips/:${idTravel}/apply`, body, axiosConfig)
      .then((resposta) => {
        console.log(resposta)
        alert("Inscrição Enviada")
        goToListTrip(history, 'viagens')
      })
      .catch((erro) => {
        console.log(erro)
      })


    }

    return (
      <ContainerInputs onSubmit={formTrip}>
        <input 
          type = {"text"}
          placeholder = {"Nome"} 
          value = {form.name}
          onChange = {handleInput}
          name = {"name"}
          minlength="5"
          required  
        />

        <input
          type = {"number"}
          placeholder = {"Idade"}
          value = {form.age}
          onChange = {handleInput}
          name = {"age"}
          min = "18"
          required
        />

        <input
          type = {"text"}
          placeholder = {"motivo"}
          value = {form.applicationText}
          onChange = {handleInput}
          name = {"applicationText"}
          minlength = "30"
          required
        />

        <input
          type={"text"}
          placeholder={"profissão"}
          value = {form.profession}
          onChange = {handleInput}
          name = {"profession"}
          minlength="10"
          required
        />

        <SelectCountry onChange = {handleInput} name = {"country"} id = {"country"}>
          <option selected value="">país</option>
          {country.map((cou) => {
            return (
              <option value = {cou.nome}>{cou.nome}</option>
            )
          })}
        </SelectCountry>

        <ButtonEnviar>Enviar</ButtonEnviar>
      </ContainerInputs>
    )
  }

  return (
    <RegisterContainer>
      
      <ButtonGoBack onClick={() => goToListTrip(history, 'viagens')}>voltar para a home</ButtonGoBack>
      <h1>Inscrever</h1>
      <FormSubscription />
    
    </RegisterContainer>
  )
}