import React from  'react'
import styled from 'styled-components'

class Perguntas extends React.Component {
    render (){
        return(
            <div>
                <p>{this.props.pergunta}</p>
            </div>
        )
    }
}

export default Perguntas;