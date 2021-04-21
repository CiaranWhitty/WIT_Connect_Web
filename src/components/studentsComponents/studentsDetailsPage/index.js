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

    // {
    //   menuItem: "Work Experience",
    //   render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>,
    // },
  ];

  return (
    <>
      {student ? (
        <>
          <div className="profile">
            <Grid id="profileMainCon">
              <Grid.Row textAlign="center" id="profileRow">
                <Grid.Column width={16} id="profileCol">
                  <Container id="profileCon">
                    <PageTemplate student={student}>
                      <StudentsDetails student={student} />
                    </PageTemplate>

                    <Tab panes={panes} />
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

export default withRouter(StudentsPage);
