import React from 'react'
import { useHistory } from "react-router-dom"

export function DetailsTravel() {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }
    return (
        <div>
            <button onClick={goBack}>voltar para home</button>
            Detalhes da Viagem
        </div>
    )
}