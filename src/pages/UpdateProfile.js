import React from "react"
import { Link } from "react-router-dom"
import { Header, Button, Card, Grid } from 'semantic-ui-react'

export default function UpdateProfiles() {

  return (
    <>

    <Grid >
      <Grid.Row textAlign='center'>

        <Grid.Column width={16}>
              
          <Header as='h2'>
            Update Profile
          </Header>

          <Card centered>

            <Card.Content>
              <Button 
              as={Link} to="/u/update-details"  
              size="big"
              color="blue"
              >
              Update Details
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
              <Link to="/u/profile">Cancel</Link>     
            </Card.Content>

          </Card>
        </Grid.Column>

      </Grid.Row>
    </Grid>

    </>
  )
}