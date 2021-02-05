import React from 'react'
import {BlocoNoticias, CardNoticia, ImgNoticia, Descricao} from './estilo'
import { BASE_URL, axiosConfig } from "../constantes/requisicoes";
import axios from 'axios'

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
