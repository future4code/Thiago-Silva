import React, { useEffect } from 'react'
import { useHistory } from 'react-router'


import { goToListTrip } from '../../routes/Coordinator'

import {
    Title,
    Header,
    Search,
    BorderSearch
} from './HomeStyle'

export default function Home() {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            goToListTrip(history, 'viagens')
        }
    }, [history])
    
    return (
        <div>

            <Title>
                LabeX
            </Title>

            <Header>
                <Search>
                    <BorderSearch type="text" placeholder="Pesquisar" />
                </Search>
            </Header>

        </div>
    )
}