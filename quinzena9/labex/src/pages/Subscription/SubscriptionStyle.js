import styled from 'styled-components'

export const RegisterContainer = styled.div`
  border-radius: 50px;
  color: white;
  width: 250px;
  height: 300px;
  margin: 50px 10px;
  background-image: url("https://img.elo7.com.br/product/original/328C273/tecido-galaxia-estampado-universo-microfibra-250-cm-x-150-cm-estamparia-vestidos.jpg");
`

export const ContainerInputs = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-top: 20px;
`

export const SelectCountry = styled.select`
    width: 11rem;
`

export const ButtonEnviar = styled.button`
    border: none;
    border-radius: 5px;
    margin-top: 25px;
    background-color: green;
    color: white;
`

export const ButtonGoBack = styled.button`
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    background-color: white;
    color: blue;
`