import React from "react"
import { useHistory } from "react-router-dom"
import { Button} from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'

export default function ButnSignIn() {
  
  const history = useHistory()
  
  async function handleToLogin() {
    
    history.push("/login")

  }
  return (
            
        <Button 
        variant="link"
        onClick={handleToLogin}
        size="big"
        color="blue"
        >
        Sign In
        </Button>

     );
  }