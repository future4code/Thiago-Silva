import styled from 'styled-components'

export const Cabecalho = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 3px black;
`
export const Titulo = styled.h1`
   color: #4A93F8;
`

export const Menu = styled.div`
  width:500px;
  margin-left:30%;
  color: blue;
`
export const CorpoMenu = styled.ul`
  margin:50px;
  border:1px solid #EDEDED;
  list-style:none;
`
export const ItemMenu = styled.li`
  display:inline;
  margin-left:50px;
`