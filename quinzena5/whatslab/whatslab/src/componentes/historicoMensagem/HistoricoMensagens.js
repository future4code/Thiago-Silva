import React from 'react'
import styled from 'styled-components'

const Mensagens = styled.div`
    display: flex;
    flex-direction: column-reverse;
    height: 90vh;
    width: 30vw;
    overflow: auto
`
const Msg = styled.p`
  background-color: #15202B;
  border: solid #848484 1px;
  border-radius: 10px;
  margin: 10px;
  padding: 5px;
  text-align: right;
`
const MsgAmigo = styled.p`
  background-color: #15202B;
  border-radius: 10px;
  margin: 10px;
  padding: 5px;
  text-align: left;
`

const Campos = styled.form`
  display: flex;
  margin: 10px;
`
const Remetente = styled.input`
  width: 100px;
  height: 30px;
  border-radius:10px;
  border-style: none;
  margin-right: 5px;
`
const Mensagem = styled.input`
  width: 220px;
  height: 30px;
  border-radius: 10px;
  border-style: none;
  margin-right: 2px;
`
const BotaoEnviar = styled.button`
  background-color: #1A91DA;
  color: white;
  border-radius: 30px;
  border-style: none;
`
const Deletar = styled.button`
  background-color: #FF0040;
  color: white;
  border-radius: 50px;
  border-style: none;
  margin: 10px;
`

export class HistoricoMensagens extends React.Component{
    state = {
      postagens: [
        
      ],

      valorInputRemetente: "",
      valorInputMensagem: ""
    }

    onChangeInputRemetente = (event) => {
      this.setState({valorInputRemetente: event.target.value})
    }

    onChangeInputMensagem = (event) => {
      this.setState({valorInputMensagem: event.target.value})
    }

    adicionaMensagem = () => {
      const novaMensagem = {
        remetente: this.state.valorInputRemetente,
        msg: this.state.valorInputMensagem
      }
      
      const novasMensagens = [...this.state.postagens, novaMensagem]
      this.setState({postagens: novasMensagens})
      this.setState({valorInputRemetente: ""})
      this.setState({valorInputMensagem: ""})
    }

    deletaDuploClique = (mensagemParaDeletar) => {
      const deletar = this.state.postagens.filter((postagem) => {
        if (postagem.msg === mensagemParaDeletar){
          return false
        }
        return true
      })

      this.setState({postagens:deletar})
    }

    onFormSubmit = (event) => {
      const novaMensagem = {
        remetente: this.state.valorInputRemetente,
        msg: this.state.valorInputMensagem
      }
      
      const novasMensagens = [...this.state.postagens, novaMensagem]
      this.setState({postagens: novasMensagens})
      this.setState({valorInputRemetente: ""})
      this.setState({valorInputMensagem: ""})

      event.preventDefault();
    }

    render() {

    const lista = this.state.postagens.map((postagem)=>{
      if(postagem.remetente !== "" || postagem.msg !== ""){
        if(postagem.remetente === "eu"){
          return(
          <Msg onDoubleClick={() => this.deletaDuploClique(postagem.msg)}>{postagem.msg}</Msg>
        )
        }else{
          return(
          <MsgAmigo onDoubleClick={() => this.deletaDuploClique(postagem.msg)}>{postagem.remetente}: {postagem.msg}</MsgAmigo>
        )
        }
        
      }
      
    })
  

    return (
      <header>

        <Mensagens>{lista}</Mensagens>

        <Campos onSubmit={this.onFormSubmit}>
          <Remetente
            value={this.state.valorInputRemetente}
            onChange={this.onChangeInputRemetente}
            placeholder={"remetente"}
          />
          <Mensagem
            value={this.state.valorInputMensagem}
            onChange={this.onChangeInputMensagem}
            placeholder={"Digite uma mensagem"}
          />
          <BotaoEnviar onClick={this.adicionaMensagem}>Enviar</BotaoEnviar>
        </Campos>

      </header>
          
    )
  }
}


export default HistoricoMensagens;
