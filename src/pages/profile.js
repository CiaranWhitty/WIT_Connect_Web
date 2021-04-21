import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Grid, Container, Tab } from "semantic-ui-react";
import UserDetails from "../components/profileComponents/userDetails";

import ProfileContent from "../components/profileComponents/profileContent";

export default function Profile() {
  // const [error, setError] = useState("")
  const { currentUser, logout } = useAuth();

  const panes = [
    {
      menuItem: "Portfolio Items",
      render: () => (
        <Tab.Pane>
          {" "}
          <ProfileContent />{" "}
        </Tab.Pane>
      ),
    },
    // { menuItem: "Timeline", render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    // {
    //   menuItem: "Work Experience",
    //   render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>,
    // },
  ];

  if (currentUser.emailVerified) {
    console.log("So True");
  } else {
    console.log("So False");
    logout();
  }

  return (
    <>
      <div className="profile">
        {/* should be profileCon */}
        <Grid id="profileMainCon">
          <Grid.Row textAlign="center" id="profileRow">
            <Grid.Column width={16} id="profileCol">
              <Container id="profileCon">
                <UserDetails />

                <Tab panes={panes} />
              </Container>

              {/* <Card centered>
                <Card.Content>
                  <Button
                    as={Link}
                    to="/u/update-profile"
                    size="big"
                    color="blue"
                  >
                    Update Profile
                  </Button>
                </Card.Content>

                <Card.Content>
                  <ButnLogOut />
                </Card.Content>
              </Card> */}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
}
