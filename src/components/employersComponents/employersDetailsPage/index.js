import React from "react";
import { withRouter } from "react-router-dom";
import { Grid, Container, Tab } from "semantic-ui-react";
import EmployersDetails from "../employersDetails";
import PageTemplate from "../employersTemplatePage";
import useEmployer from "../../../hooks/useEmployer";
import EmployersContent from "../employersContent";

const EmployersPage = (props) => {
  const { name } = props.match.params;
  const [employer] = useEmployer(name);

  return (
    <>
      {employer ? (
        <>
          <div className="profile">
            <Grid id="profileMainCon">
              <Grid.Row textAlign="center" id="profileRow">
                <Grid.Column width={16} id="profileCol">
                  <Container id="profileCon">
                    <PageTemplate>
                      <EmployersDetails employer={employer} />
                      <EmployersContent />
                      {/* Add jobs Component Here */}
                    </PageTemplate>
                  </Container>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </>
      ) : (
        <p>Waiting for Data</p>
      )}
    </>
  );
};

export default withRouter(EmployersPage);
