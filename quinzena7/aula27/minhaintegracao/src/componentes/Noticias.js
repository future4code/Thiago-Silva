import React from 'react'
import styled from 'styled-components'
import { BASE_URL, axiosConfig } from "../constantes/requisicoes";
import axios from 'axios'

const BlocoNoticias = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap: wrap;
  margin-top:50px;
  margin-left:10%;
`

const CardNoticia = styled.div`
    margin:15px;
    border:1px solid gray;
    border-radius: 10%;
    text-align:center;
    width:300px;
`
const ImgNoticia = styled.img`
  width: 200px;
  height: 100px;
  margin:5px;
`

const Descricao = styled.p`
  text-align: center;
  margin:10px;
`

class Noticias extends React.Component {
  state = {
      noticias: []
  }

  componentDidMount() {
    this.listaNoticias()
  }

  listaNoticias = async () => {
      try {
        const resposta = await axios.get(`${BASE_URL}`, axiosConfig)
        console.log(resposta.data.articles)
        this.setState({noticias:resposta.data.articles})
      } catch (erro) {
        alert(erro.message);
      }
    }
  render(){
    
    const listaNoticias = this.state.noticias.map((item) => {
      return (
        <CardNoticia>
          <ImgNoticia alt="noticia" src={item.urlToImage}/>
          <h3>{item.title}</h3>
          <Descricao>{item.description}</Descricao>
        </CardNoticia>
      )
    })
    
   
      
   
        return(<BlocoNoticias>{listaNoticias}</BlocoNoticias>)
         
    
     
      
  }
}

export default Noticias;
