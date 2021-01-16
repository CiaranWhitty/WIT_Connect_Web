import React, { useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import { Button} from 'semantic-ui-react'

export default function ButnLogOut() {
 
  // eslint-disable-next-line
  const [error, setError] = useState("")

  const {logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      
      <Button 
          variant="link"
          onClick={handleLogout}
          size="big"
          color="red"
          >
        Sign Out
      </Button>
            

        
    </>
  )
}
