import React from "react";
import { withRouter } from "react-router-dom";
import { Grid, Button } from "semantic-ui-react";

const EmployerHeader = ({ history }) => {
  return (
    <>
      <Grid columns={2} padded centered>
        <Grid.Row>
          <Grid.Column>
            <Button
              id="buttonRemove"
              size={"big"}
              onClick={() => history.goBack()}
            >
              <Button.Content hidden>Back</Button.Content>
            </Button>
          </Grid.Column>

          <Grid.Column></Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default withRouter(EmployerHeader);
