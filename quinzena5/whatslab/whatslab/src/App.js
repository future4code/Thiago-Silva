import React from  'react'
import styled from 'styled-components'
import './componentes/historicoMensagem/HistoricoMensagens'
import HistoricoMensagens from './componentes/historicoMensagem/HistoricoMensagens';


const Principal = styled.div`
  margin-left:30%;
  border: solid #5882FA 1px;
  height: 100vh;
  width: 40vw;
`

const Alinhamento = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  overflow: auto;
  height:50px; 
`

function App() {
  return (
    <Principal>
      <Alinhamento>
        <HistoricoMensagens/>
      </Alinhamento>
    </Principal>
  );
}

export default App;
