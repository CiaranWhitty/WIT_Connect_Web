import React from "react";
import { Link } from "react-router-dom";
import { Header, Button, Card, Grid, Container, Tab } from "semantic-ui-react";

export default function UpdateProfiles() {
  return (
    <>
      <div className="updateProfile">
        {/* should be profileCon */}
        <Grid id="updateProfileMainCon">
          <Grid.Row textAlign="center" id="updateProfileRow">
            <Grid.Column width={16} id="updateProfileCol">
              <Container id="updateProfileCon">
                <Header as="h2">Profile Settings</Header>

                <Card centered>
                  {/* <Card.Content>
                    <Button
                      as={Link}
                      to="/u/update-details"
                      size="big"
                      color="blue"
                    >
                      Update Details
                    </Button>
                  </Card.Content> */}

                  <Card.Content>
                    <Button
                      as={Link}
                      to="/u/update-password"
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
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
}
