import styled, { keyframes } from 'styled-components'

export const LoginContainer = styled.div`
  border-radius: 50px;
  width: 300px;
  height: 400px;
  margin: 0px 10px;
  background-image: url("https://img.elo7.com.br/product/original/328C273/tecido-galaxia-estampado-universo-microfibra-250-cm-x-150-cm-estamparia-vestidos.jpg");
`

export const ContainerInputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-top: 20px;
`

export const LoginButton = styled.button`
  margin-top: 20px;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const ContainerLoader = styled.div`
  position: absolute;
  top: 110px;
  left: 400px;
  padding: 180px;
  background-color: #0E0127; 
`

export const Loader = styled.div`
  animation: ${rotate} 1s infinite;
  border: 6px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: #51d4db;
  height: 50px;
  width: 50px;
  z-index: 1;
`