import styled from 'styled-components'

//App
export const SecaoPrincipal = styled.div`
  display:flex;
  justify-content: row;
  align-items: top;
  margin: 30px;
  border: 1px solid #abb2bf;
  border-radius:10px;
`

export const ReferenciaTitulo = styled.h1`
  margin: 10px 70px;
`

export const SecaoPlaylists = styled.div`
  margin: 10px;
  border: 3px solid #1793d1;
  border-radius:10px;
`
export const Lista = styled.div`
  margin:30px;
`

export const ItemLista = styled.div`
  display:flex;
  justify-content: space-between;
  margin:5px;
  padding:5px;
  border: 1px solid black;
`
export const BotaoDeletar = styled.button`
  background-color: red;
  color: white;
  border:none;
  outline-style: none;
  padding:3px;
  border-radius:50%;
`

export const Cabecalho = styled.header`
  width:100vw;
  height:60px;
  background-color: #1793d1;
  display:flex;
  justify-content: center;
  align-items: center;
`

export const Voltar = styled.button`
  background-color: #1793d1;
  color: white;
  border:none;
  outline-style: none;
  font-size: 50px;
`
export const Paravoltar = styled.p`
  left: 35px;
  position: absolute;
  font-size:15px;
  padding:10px;
`

export const IrPlaylist = styled.div`
    display:flex;
    justify-content: column;
    align-items: center;
    margin:20px 50px;
    padding:10px;
`

//CriarPlaylist
export const CriaNovaLista = styled.div`
    margin:50px;
`

export const BotaoCriar = styled.button`
    background-color: #1793d1;
    margin:20px;
    border:none;
    border-radius:5px;
    padding:5px;
`

//DetalhesPlaylist
export const BlocoListagem = styled.div`
    border: 3px solid black;
    margin: 50px;
`

export const Listagem = styled.div`
    margin:40px;
    padding: 10px;
    border: 2px solid gray;
`

export const BolinhaImg = styled.img`
border-radius: 50%;
`

//Musicas
export const ListagemMusicas = styled.div`
    display:flex;
    justify-content: column;
    align-items: center;
    justify-content: space-between;
    margin:40px;
    padding: 20px;
    border: 2px solid gray;
    border-radius:70px;
`

export const EscolherPlaylist = styled.div`
    display:flex;
    justify-content: column;
    align-items: center;
    margin:20px 200px;
    padding:10px;
`

export const BotaoAdicionar = styled.button`
    padding:5px;
    background-color: green;
    color:white;
    border-radius: 50px;
    font-size: 30px;
    border:none;
    outline-style: none;
`

