import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {BASE_URL, axiosConfig} from '../constantes/requisicoes'

const BlocoListagem = styled.div`
    border: 3px solid black;
    margin: 50px;
`

const Listagem = styled.div`
    margin:40px;
    padding: 10px;
    border: 2px solid gray;
`

class DetalhesPlaylist extends React.Component {
  state = {
    playLists: [],
    idPlaylist:""
  }

  componentDidMount() {
    this.listaPlayLists()
    this.setState({idPlaylist: this.props.id})
  }

  componentDidUpdate() {
    this.listaPlayLists()
  }

  listaPlayLists = async () => {
      try {
        const resposta = await axios.get(`${BASE_URL}`, axiosConfig)
        this.setState({playLists:resposta.data.result.list})
      } catch (erro) {
        alert(erro.message);
      }
    }

    OnClickDelmusica = (id) => {
        axios
        .delete(`${BASE_URL}/${id}`, axiosConfig)
        .then((resposta) => {
            alert(`Playlist Deletada com sucesso!`)
        })
        .catch((erro) => {
            alert("erro no cadastro")
        })

    }

    listaPlayLists = async () => {
        try {
          const resposta = await axios.get(`${BASE_URL}`, axiosConfig)
          this.setState({playLists:resposta.data.result.list})
        } catch (erro) {
          alert(erro.message);
        }
      }

  render(){
    // const lista = this.state.playLists.map((play) =>{
    //   return(
    //       <div>
    //           <p>{play.name}</p>
    //           <button onClick={() => {this.OnClickDel(play.id)}}>X</button>
    //       </div>
    //   )
    // })

    return (
        <BlocoListagem>
            <Listagem>
                <h1>{this.state.idPlaylist}</h1>
                <p>Musicas</p>
            </Listagem>
        </BlocoListagem>
    )
  }
    
}

export default DetalhesPlaylist;
