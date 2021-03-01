import React from 'react'
import styled from 'styled-components'
import axios from 'axios'


const Principal = styled.div`
  color:blue;
`
const Bloco = styled.header`
  display:grid;
  width:15%;
  margin-left:40%;
  margin-top:5%;
  border: 1px solid black;
  border-radius:10%;
  padding: 20px;
`
const CampoInput = styled.input`
  margin: 10px;
`
const BotaoEnviar = styled.button`
  background-color: green;
  color:white;
`

const Itens = styled.form`
  display:flex;
  margin: 10px 500px;
`

const BotaoExcluir = styled.button`
  color:red;
  padding-left:5px;
  border:none;
  background-color:transparent;
`

const ItemLista = styled.li`
  list-style:none;
  padding:5px;
  
`
const BlocoLista = styled.header`
  display:grid;
  margin-top:5%;
  padding: 20px;
`

const ControleBotao = styled.button`
  width:50px;
  position:absolute;
  left:15px;
  top:15px;
`

class App extends React.Component {
  state = {
    listaUsuarios: [
      {
        name: "",
        email: "",
      }
    ],
    nomeAtualUsuario: "",
    emailAtualUsuario: "",
    voltar: false
  }

  componentDidMount() {
    this.usuariosLista()
  }

  usuariosLista = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",{
        headers: {
          Authorization: "Thiago-Silva-Muyembe"
        }
      }
    ).then((resposta) =>{
      this.setState({listaUsuarios: resposta.data})
    }).catch((erro) => {
      alert(erro)
    })
  }

  criarUsuario = () => {
    const body = {
      name: this.state.nomeAtualUsuario,
      email: this.state.emailAtualUsuario
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body,{
        headers: {
          Authorization: "Thiago-Silva-Muyembe"
        }
      }
    ).then((resposta) => {
      console.log(resposta.config.data)
      alert("cadastro realizado com sucesso")
    }).catch((erro) => {
      console.log(erro)
      alert("erro no cadastro")
    })
    this.setState({nomeAtualUsuario:""})
    this.setState({emailAtualUsuario:""})
    this.setState({voltar:false})
    this.usuariosLista()
  }

  pegaId = (idUser) => {
    this.setState({voltar:false})
    alert(idUser)
    axios.delete("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/"+idUser,{
      headers: {
        Authorization: "Thiago-Silva-Muyembe"
      }
    })
    .then(resposta => {
      alert(resposta)
    })
    .catch(erro => {
      alert(erro)
    }) 
    
  }

  onChageNomeValue = (event) => {
    this.setState({nomeAtualUsuario: event.target.value})
    console.log(this.state.nomeAtualUsuario)
  }

  onChangeEmailValue = (event) => {
    this.setState({emailAtualUsuario: event.target.value})
    console.log(this.state.emailAtualUsuario)
  }

  botaoVoltar = () => {
    this.setState({voltar: !this.state.voltar})
  }
  
  render () {
    document.title = "LabenUsers"

    const listaDosUsuarios = this.state.listaUsuarios.map((user) => {
      return (
        <Itens>
                
          <label>
            <ItemLista key={user.id}>{user.name}</ItemLista>
          </label>
          <BotaoExcluir onClick={() => { this.pegaId(user.id) }}>excluir</BotaoExcluir>
        
        </Itens>
      )
    })

    return (
      <Principal>
        
        {this.state.voltar ? (
          <Bloco>
            <button onClick={this.botaoVoltar}>Lista de usuarios</button>
            <label>Nome:</label>
            
            <CampoInput
              placeholder="nome"
              value={this.state.nomeAtualUsuario}
              onChange={this.onChageNomeValue}/>

            <label>E-mail:</label>

            <CampoInput 
              placeholder="e-mail"
              value={this.state.emailAtualUsuario}
              onChange={this.onChangeEmailValue}/>

            <BotaoEnviar onClick={this.criarUsuario}>Enviar</BotaoEnviar>
        </Bloco>
        ):(
          <BlocoLista>
            <ControleBotao onClick={this.botaoVoltar}>voltar</ControleBotao>
            <ul>{listaDosUsuarios}</ul>
          </BlocoLista>
        )}
        
        
        
      </Principal>
    )
  }
}

export default App;
