import React from 'react'
import { useHistory } from 'react-router-dom'

import { BASE_URL, pontosParaViagens, axiosConfig} from '../../constants/Request'

import { RegisterContainer, ContainerForm } from './CreateNewTravelStyle'

import useProtectedPage from '../../hooks/useProtectedPage'
import { useForm } from '../../hooks/useForm'
import axios from 'axios'

export default function CreateNewTravel() {
  useProtectedPage()
  useForm()
  const history = useHistory()
  

  const goBack = () => {
    history.goBack()
  }

  const date = new Date()
  const day = date.getDate() + 1
  const month = date.getMonth()+1
  const year = date.getFullYear()
  let dateTomorrow = ""
  if(month > 9){
    dateTomorrow = `${year}-${month}-${day}`
  }else{
    dateTomorrow = `${year}-0${month}-${day}`
  }
  

  const FormCreateNewTravel = () => {
    const {form, onChange} = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })

    console.log(form)

    const handleInput = (event) => {
      const { value, name } = event.target
      onChange(value, name)
      console.log(event.target.value)
    };

    const formTrip = (event) => {
      event.preventDefault()
      const body = {
        name: form.name,
        planet: form.planet,
        date: form.date,
        description: form.description,
        durationInDays: form.durationInDays
      }

      axios
      .post(`${BASE_URL + pontosParaViagens}trips`, body, axiosConfig)
      .then((resposta) => {
        console.log(resposta)
        alert("Viagem Criada com sucesso")
      })
      .catch((erro) => {
        console.log(erro)
      })
    }

    return (
      <ContainerForm onSubmit={formTrip}>
        <input 
          type = {"text"}
          placeholder = {"Nome"} 
          value = {form.name}
          onChange = {handleInput}
          name = {"name"}
          minlength="5"
          required  
        />
  
        <select onChange = {handleInput} name = {"planet"} id = {"planet"}>
          <option value = {""} selected required>Escolha o planeta</option>
          <option value = "Vênus" >Vênus</option>
          <option value = "Mercúrio" >Mercúrio</option>
          <option value = "Marte" >Marte</option>
          <option value = "Júpiter" >Júpiter</option>
          <option value = "Saturno" >Saturno</option>
          <option value = "Urano" >Urano</option>
          <option value = "Netuno" >Netuno</option>
          <option value = "Plutão" >Plutão</option>
        </select>

        <input 
          type={"date"}
          value = {form.date}
          onChange = {handleInput}
          name = {"date"}
          min={dateTomorrow}  
          required 
        />

        <input 
          type={"text"} 
          placeholder="Descrição" 
          value = {form.description}
          onChange = {handleInput}
          name = {"description"}
          minlength="30"
          required 
        />

         <input 
          type={"number"} 
          placeholder="Duração" 
          value = {form.durationInDays}
          onChange = {handleInput}
          name = {"durationInDays"}
          min="50"
          required 
        />
      
        <button>Enviar</button>
      </ContainerForm>
    )
  }


  return (
    <RegisterContainer>
      <button onClick={goBack}>Voltar a home</button>
      <h1>Criar Nova Viagem</h1>
      <FormCreateNewTravel />
    </RegisterContainer>
  )
}