import React from 'react'
import { useHistory } from "react-router-dom"

export function DetailsTravel() {
    const history = useHistory()

    const goToHome = () => {
        history.push("/")
    }
    return (
        <div>
            <button onClick={goToHome}>voltar para home</button>
            Detalhes da Viagem
        </div>
    )
}