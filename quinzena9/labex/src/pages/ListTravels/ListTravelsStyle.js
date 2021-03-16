import styled from 'styled-components'

export const Travels = styled.div`
  border-radius: 50px;
  color: white;
  width: 300px;
  height: 400px;
  margin: 50px 10px;
  background-image: url("https://img.elo7.com.br/product/original/328C273/tecido-galaxia-estampado-universo-microfibra-250-cm-x-150-cm-estamparia-vestidos.jpg");
` 

export const Display = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: right;
  font-size: 12px;
  margin:10px;
  opacity: 1;
`

export const ImgTravel = styled.div`
  text-align: center;
  margin: 30px;
`

export const Container = styled.div`
display:flex;
flex-direction: row;
align-items: center;
justify-content: center;
flex-wrap: wrap;

width:1000px;

margin-left: 30px;
`
export const InfoTrip = styled.div`
  background-color: rgba(15,17,17,0.6);
  backdrop-filter: blur(30px);
  padding: 10px;
`

export const Login = styled.button` 
position: absolute;
top: 5px;
right: 25px;
background-color: #0E0127;
border-radius: 100%;
border: none;
outline: thin dotted;
outline: 0px auto -webkit-focus-ring-color;
outline-offset: 0px;
`

export const ImageLogin = styled.img`
width: 200px;
height: 200px;
border-radius: 100%;
`

export const BotaoSair = styled.button`
  border: none;
  position:absolute;
  right: 115px;
  top: 45px;
  z-index: 1;
  background-color: #0B0024;
  color: #0797DF;
  width: 100px;
  height: 45px;
  text-decoration: underline;
`
