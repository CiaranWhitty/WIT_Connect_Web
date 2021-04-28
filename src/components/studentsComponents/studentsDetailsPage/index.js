import React from "react";
import { withRouter } from "react-router-dom";
import { Grid, Container, Tab } from "semantic-ui-react";
import StudentsDetails from "../studentsDetails";
import PageTemplate from "../studentsTemplatePage";
import useStudent from "../../../hooks/useStudent";
import StudentContent from "../studentContent";
import StudentTimeline from "../studentTimeline";

const StudentsPage = (props) => {
  const { uId } = props.match.params;
  const [student] = useStudent(uId);

  const panes = [
    {
      menuItem: "Portfolio Items",
      render: () => (
        <Tab.Pane>
          <StudentContent studentuId={uId} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Timeline",
      render: () => (
        <Tab.Pane>
          <StudentTimeline studentuId={uId} />
        </Tab.Pane>
      ),
    },
  ];

  return (
    <>
      {student ? (
        <>
          <div className="profile">
            <Grid id="profileMainCon">
              <Grid.Row textAlign="center" id="profileRow">
                <Grid.Column width={4} id="profileCol1"></Grid.Column>
                <Grid.Column width={8} id="profileCol2">
                  <Container id="profileCon">
                    <PageTemplate student={student}>
                      <StudentsDetails student={student} studentuId={uId} />
                    </PageTemplate>
                    <Tab panes={panes} />
                  </Container>
                </Grid.Column>
                <Grid.Column width={4} id="profileCol3"></Grid.Column>
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

export default withRouter(StudentsPage);
