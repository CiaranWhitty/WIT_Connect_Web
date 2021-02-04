import React from "react";
import { Segment, Header, Grid } from "semantic-ui-react";

const homePage = () => {
  return (
    <>
      <div id="homePageContainer">
        <Grid id="contentContainer" stackable>
          <Grid.Row columns={1}>
            <Grid.Column>
              <Segment.Group id="segmentContainer">
                <Segment id="segmentBigContent" basic>
                  <Header
                    as="h2"
                    content="Home"
                    subheader="Picuture/Carousel"
                  />
                </Segment>
              </Segment.Group>
            </Grid.Column>
          </Grid.Row>
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
          <Grid.Row columns={1}>
            <Grid.Column>
              <Segment.Group id="segmentContainer">
                <Segment id="segmentBigContent" basic>
                  <Header as="h2" content="Home" subheader="Content 5" />
                </Segment>
              </Segment.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
};

export default homePage;
