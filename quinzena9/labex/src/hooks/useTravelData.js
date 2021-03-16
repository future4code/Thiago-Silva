import { useState } from 'react'
import axios from  'axios'
import { BASE_URL, pontosParaViagens, axiosConfig} from '../constants/Request'

const useTravelData = () => {
    const [listTravel, setListTravel] = useState([])
  
    axios
    .get(`${BASE_URL + pontosParaViagens}trips`, axiosConfig)
    .then((resposta) => {
      setListTravel(resposta.data.trips)
    })
    .catch((erro) => {
      console.log(erro)
    })

    return listTravel
}

export default useTravelData