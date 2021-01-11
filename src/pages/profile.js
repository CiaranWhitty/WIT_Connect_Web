import React, {  } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"

import { Header, Button, Card, Grid, Image } from 'semantic-ui-react'
//  Icon, Image Container,
import ButnLogOut from '../components/buttons/butnLogOut'
import ProfileContent from '../components/profileContent'

export default function Profile() {
  // const [error, setError] = useState("")
  const { currentUser } = useAuth()

  return (
    <>

    <Grid >
      <Grid.Row textAlign='center'>

        <Grid.Column width={16}>
              
          <Header as='h2'>
            Profile
          </Header>

          <Image src='https://res.cloudinary.com/a20085909/image/upload/v1592601611/nedjkjyve4j8j2gbr8ak.jpg' size='medium' centered circular/>
          <Card centered>
            <Card.Content >
              <Card.Header><strong>Email:</strong> {currentUser.email}</Card.Header>
            </Card.Content>

            <Card.Content>
              <Button 
              as={Link} to="/u/update-profile"  
              size="big"
              color="blue"
              >
              Update Profile
              </Button>
              
            </Card.Content>
            
            <Card.Content>
              <Button 
              as={Link} to="/u/update-password"  
              size="big"
              color="blue"
              >
              Update Password
              </Button>
            </Card.Content>

            <Card.Content>
              <ButnLogOut /> 
            </Card.Content>
              
          </Card>
        </Grid.Column>

      </Grid.Row>
    </Grid>

    <ProfileContent />

    </>
  )
}