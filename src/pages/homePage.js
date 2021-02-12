import React from "react";
import {
  Segment,
  Header,
  Grid,
  Container,
  Button,
  Card,
} from "semantic-ui-react";

const homePage = () => {
  return (
    <>
      <div className="bgimg-1">
        <div className="bgimg-2">
          <Card id="pictureCenterContent" centered fluid >
            <Card.Content>
              <Card.Header>WIT Connect</Card.Header>
              <Card.Description>
                Welcome to WIT Connect, Enjoy your stay.
              </Card.Description>
              <Button         
              variant="link"
              size="big"
              color="green"
              >Learn More Here
              </Button>
            </Card.Content>
          </Card>
        </div>
      </div>

      <Container id="homePageContainer">
        <Grid id="contentContainer" stackable>
          <Grid.Row columns={2} id="segmentSmallContainer">
            <Grid.Column>
              <Segment.Group id="segmentContainer">
                <Segment id="segmentSmallContent" basic>
                  <Header as="h2" content="Home" subheader="Content 1" />
                </Segment>
              </Segment.Group>
            </Grid.Column>
            <Grid.Column>
              <Segment.Group id="segmentContainer">
                <Segment id="segmentSmallContent" basic>
                  <Header as="h2" content="Home" subheader="Content 2" />
                </Segment>
              </Segment.Group>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2} id="segmentSmallContainer">
            <Grid.Column>
              <Segment.Group id="segmentContainer">
                <Segment id="segmentSmallContent" basic>
                  <Header as="h2" content="Home" subheader="Content 3" />
                </Segment>
              </Segment.Group>
            </Grid.Column>
            <Grid.Column>
              <Segment.Group id="segmentContainer">
                <Segment id="segmentSmallContent" basic>
                  <Header as="h2" content="Home" subheader="Content 4" />
                </Segment>
              </Segment.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
};

export default homePage;
