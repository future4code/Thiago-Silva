import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { replaceToLogin } from '../routes/Coordinator'

const useProtectedPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token")
    
        if (!token) {
          replaceToLogin(history)
        }
      }, [history])
    
}

export default useProtectedPage