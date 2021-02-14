import styled from 'styled-components'


export const Titulo = styled.div`
    color: #58ACFA;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    font-family: 'Reggae One', cursive;
    font-size: 25px;
    text-align: center;
    margin-top:10px;
    margin-bottom: 10px;
`

export const TrocaTela = styled.button`
    border: 3px dashed #D8D8D8;
    position: absolute;
    right:200px;
    top:200px;
    width:150px;
    padding-bottom: 10px;

    &:hover{
        box-shadow: 5px 2px 20px red;
    }
`

export const TamanhoMatchs = styled.img`
    width:140px;
`

export const Limpar = styled.button`
    position: absolute;
    right:180px;
    top:100px;
    padding: 10px;
    background-color: #CEECF5;
    border: none;
    border-radius: 50px;
    color:black;

    &:hover{
        box-shadow: 5px 2px 20px #01DFD7;
    }
`

export const Principal = styled.div`
    margin-top: 50px;
    background-color: #282c34;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
`
