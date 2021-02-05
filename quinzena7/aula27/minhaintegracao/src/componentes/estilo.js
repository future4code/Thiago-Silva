import styled from 'styled-components'

export const BlocoNoticias = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap: wrap;
  margin-top:50px;
  margin-left:10%;
`

export const CardNoticia = styled.div`
    margin:15px;
    border:1px solid gray;
    border-radius: 10%;
    text-align:center;
    width:300px;
`
export const ImgNoticia = styled.img`
  width: 200px;
  height: 100px;
  margin:5px;
`

export const Descricao = styled.p`
  text-align: center;
  margin:10px;
`