import React from 'react'

import {
    Title, 
    Header, 
    Search
}from '../styles/HomeStyle'

export default function Home() {
  return (
    <div>

      <Title>
        LabeX
      </Title>
      
      <Header>
      <Search><input type="text" placeholder="Pesquisar"/></Search>
      </Header>
       
      </div>
  )
}