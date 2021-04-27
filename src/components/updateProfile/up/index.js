import React from "react";
import { Link } from "react-router-dom";
import app from "../../../firebase/firebase";
import FileUploader from "../../fileUploaderProfile";

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
                  <FileUploader userId={user.uId} user={user} />
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
                    <Checkbox
                      toggle
                      label="Allow Your Account to be Discoverable to Other Students "
                      checked={user.publicAccount}
                      onClick={publicAccount}
                    />
                  </Card.Content>
                  <Card.Content>
                    <Checkbox
                      toggle
                      label="Allow Your Account to be Discoverable to Employers"
                      checked={user.allowEmployers}
                      onClick={allowEmployers}
                    />
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
