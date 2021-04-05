import React from "react";
import { Link } from "react-router-dom";
import app from "../../../firebase/firebase";

import {
  Header,
  Button,
  Card,
  Grid,
  Container,
  Checkbox,
} from "semantic-ui-react";

export default function Up({ user }) {
  const publicAccount = () => {
    const userRef = app.database().ref("Users").child(user.id);
    userRef.update({
      publicAccount: !user.publicAccount,
    });
  };

  const allowEmployers = () => {
    const userRef = app.database().ref("Users").child(user.id);
    userRef.update({
      allowEmployers: !user.allowEmployers,
    });
  };

  return (
    <>
      {" "}
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
                  <Checkbox
                    toggle
                    label="Allow Other Students to see your Profile"
                    checked={user.publicAccount}
                    onClick={publicAccount}
                  />
                  <Checkbox
                    toggle
                    label="Allow Employers to see your Profile"
                    checked={user.allowEmployers}
                    onClick={allowEmployers}
                  />
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
