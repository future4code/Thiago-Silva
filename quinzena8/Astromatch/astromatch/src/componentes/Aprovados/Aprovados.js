import React, {useState, useEffect} from 'react'

import axios from 'axios'
import { BASE_URL } from '../../constantes/requisicoes'

import {Principal} from '../../styledApp'
import {ListaAprovados, ImagemLista} from './estiloAprovados'

function Card() {
    const [aprovados, setAprovados] = useState([])

    const pegarMatches = async () => {
        try {
            const resposta = await axios.get(`${BASE_URL}matches`)
            setAprovados(resposta.data.matches)
        }catch(erro) {
            console.log(erro)
        }
    }

    useEffect(()=>{
        pegarMatches()
    },[pegarMatches])



  return (
    <Principal>
      
        {aprovados.map((match) => {
            return(
                <ListaAprovados>
                    <ImagemLista src={match.photo} alt="foto do match"/>
                    <p>{match.name}</p>
                </ListaAprovados>
            )
        })}
      
    </Principal>
  );
}

export default Card;
