import React from  'react'
import styled from 'styled-components'
import { BASE_URL, axiosConfig } from "../constants/requisicoes";
import axios from "axios";

const Itens = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid rgb(49, 52, 62);
  padding:10px;
  margin:10px;
  width:50%;
`

const BotaoExcluir = styled.button`
  font-size:20px;
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
  margin-left: 30%;
  padding: 20px;

`


class ListaUsuarios extends React.Component{
    state = {
        usuarios: []
      }
    
    componentDidMount() {
        this.pegarUsuarios()
      }
    
    pegarUsuarios = async () => {
        try {
          const resposta = await axios.get(`${BASE_URL}/users`, axiosConfig)
    
          this.setState({ usuarios: resposta.data })
        } catch (erro) {
          alert(erro.message);
        }
      }
    
    deletar = (id) => {
        axios
        .delete(`${BASE_URL}/users/${id}`, axiosConfig)
        .then(() => {
            alert("Usuário deletado com sucesso!")
            this.pegarUsuarios()
        })
        .catch(erro => {
          alert(erro)
        }) 
        
      }
    render() {
        const listaDosUsuarios = this.state.usuarios.map((user) => {
            return (
                <Itens>
                    <label>
                      <ItemLista key={user.id}>{user.name}</ItemLista>
                    </label>
                    <BotaoExcluir onClick={() => { this.deletar(user.id) }}>X</BotaoExcluir>
                </Itens>
                )
              })
        
        return <BlocoLista>{listaDosUsuarios}</BlocoLista>
    }
}

export default ListaUsuarios