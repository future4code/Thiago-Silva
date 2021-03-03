import React from 'react'
import styled from 'styled-components'

const LoginContainer = styled.div`
  border-radius: 50px;
  background-color: white;
  width: 250px;
  height: 200px;
  margin: 50px 10px;
`

const ContainerInputs = styled.div`
  text-align: center;
  margin-top: 20px;
`

const LoginButton = styled.button`
  margin-top: 20px;
`

export default function LoginWindow() {
    return(
        <LoginContainer>
            <h1>Logar</h1>
            <ContainerInputs>
              <input type="email" placeholder="e-mail"/>
              <input type="password" placeholder="senha"/>
            </ContainerInputs>
            <LoginButton>Login</LoginButton>
        </LoginContainer>
    )
}