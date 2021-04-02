import React from "react";
import StudentsHeader from "../studentsHeader";
import { Grid, Segment } from "semantic-ui-react";

const TemplateStudentsPage = ({ student, children }) => {
  return (
    <>
      <StudentsHeader student={student} />

      <Grid columns="equal" padded>
        <Grid.Row>
          <Grid.Column>
            <Segment inverted padded color={"blue"}>
              {children}
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default TemplateStudentsPage;
