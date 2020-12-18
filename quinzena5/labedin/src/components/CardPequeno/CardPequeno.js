import React from  'react';
import './CardPequeno.css';

function CardPequeno (props) {
    return(
        <div className="smallcard-container">
            <img src={ props.imagem } />
            <div>
                <p><strong>{ props.tipo}</strong>{ props.contato }</p>
            </div>
        </div>
    )
}

export default CardPequeno;