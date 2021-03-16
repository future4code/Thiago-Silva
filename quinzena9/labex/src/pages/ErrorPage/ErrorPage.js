import React from "react"
import useProtectedPage from '../../hooks/useProtectedPage'

export default function ErrorPage() {
  useProtectedPage()

  return <div>Error Page</div>
}


