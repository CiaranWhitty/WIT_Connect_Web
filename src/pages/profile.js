import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

import { Button, Card, Grid, Segment, Container, Tab } from "semantic-ui-react";
//  Icon, Image Container,
import ButnLogOut from "../components/buttons/butnLogOut";
import ProfileContent from "../components/profile/profileContent";
//import ProfileDetailsList from '../components/profileDetailsList'

import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiOutlineMail,
  AiFillYoutube,
} from "react-icons/ai";

export default function Profile({ Users }) {
  // const [error, setError] = useState("")
  const { currentUser } = useAuth();

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
    { menuItem: "Timeline", render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    {
      menuItem: "Work Experience",
      render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>,
    },
  ];

  return (
    <>

      <div className="profile">
        {/* should be profileCon */}
        <Grid id="portfolioCon">
          <Grid.Row textAlign="center">
            <Grid.Column width={16}>
              <Container fluid>
                <Segment.Group>
                  <Segment>
                    <div id="portfolioHeader">
                      <header>
                        <div>
                          <img
                            alt="Profile_Image"
                            src="https://res.cloudinary.com/a20085909/image/upload/v1592601611/nedjkjyve4j8j2gbr8ak.jpg"
                          />

                          <div>
                            <a href="/u/update-profile">
                              <h1>
                                {currentUser.name || <h1>Ciaran Whitty</h1>}
                              </h1>
                            </a>

                            <small>
                              {currentUser.age || <small>(AGE),</small>}
                            </small>

                            <small>
                              {currentUser.course || <small>(Course)</small>}
                            </small>
                          </div>
                        </div>
                        <nav>
                          <ul>
                            <li>
                              <a
                                href="https://www.youtube.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <AiFillYoutube />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <AiFillGithub />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <AiFillTwitterCircle />
                              </a>
                            </li>
                            <li>
                              <a href={`mailto:${currentUser.email}`}>
                                <AiOutlineMail />
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </header>
                    </div>
                  </Segment>
                </Segment.Group>

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
