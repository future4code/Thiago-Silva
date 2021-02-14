import React, {useState, useEffect} from 'react'

import axios from 'axios'
import { BASE_URL } from '../../constantes/requisicoes'

import {Principal} from '../../styledApp'
import {CardTotal, TamanhoImagem, ImagemCoracao, BotaoAprovar, BotaoReprovar, ComCoracao} from './EstiloCard'

import imagemCoracao from '../../img/coracao.jpg'
import ImagemX from '../../img/reprovar1.jpg'
import colecaoCoracoes from '../../img/colecao-de-coracao.png'
import colecaoCoracoes2 from '../../img/colecao-de-coracao2.png'



function Card() {
    let [idM, setIdM] = useState([])
    let [nome, setNome] = useState("")
    let [idade, setIdade] = useState("")
    let [descricao, setDescricao] = useState("")
    let [foto, setFoto] = useState("")

    const personalidades = () => {
        axios.get(`${BASE_URL}person`)
        .then((resposta)=>{
            setIdM(resposta.data.profile.id)
            setFoto(resposta.data.profile.photo)
            setNome(resposta.data.profile.name)
            setIdade(resposta.data.profile.age)
            setDescricao(resposta.data.profile.bio)
        })
        .catch((erro) => {
            console.log(erro)
        })
    }

    useEffect(() => {
        personalidades()
    },[])

    const aprovar = (idAtual) => {
        
        setIdM(idAtual)

        const body = {
            id: idAtual,
            choice: true 
        }
        axios.post(`${BASE_URL}choose-person`, body)
        .then((resposta)=>{
            console.logo(resposta.data)
        })
        .catch((erro) => {
            console.log(erro)
        })

        personalidades()
    }

    const reprovar = (idAtual) => {
        setIdM(idAtual)
        const body = {
            id: idAtual,
            choice: false
        }
        axios.post(`${BASE_URL}choose-person`, body)
        .then((resposta)=>{
            console.logo(resposta.data)
        })
        .catch((erro) => {
            console.log(erro)
        })

        personalidades()
    }



  return (
    <Principal>
        
        <CardTotal>
            <TamanhoImagem src={foto} alt="foto"/>
            <p>{nome}</p>
            <p>Idade: {idade}</p>
            <p>Descrição: {descricao}</p>
        </CardTotal>

        <BotaoReprovar onClick={() => {reprovar(idM)}}>
            <ImagemCoracao src={ImagemX} alt="reprovar"/>
        </BotaoReprovar>

        <div>
        <BotaoAprovar onClick={() => {aprovar(idM)}}>
            <ImagemCoracao src={imagemCoracao} alt="coração"/>
        </BotaoAprovar>
        </div>
        
    </Principal>
  );
}

export default Card;
