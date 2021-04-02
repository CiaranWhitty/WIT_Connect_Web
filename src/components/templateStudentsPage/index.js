import React from "react";
import StudentsHeader from "../studentsHeader";
import { Grid, Segment } from "semantic-ui-react";
import "./templateStudentsPage.css";

const TemplateStudentsPage = ({ student, children }) => {
  return (
    <>
      <StudentsHeader student={student} />

      <Grid id="studentGrid" columns="equal" padded>
        <Grid.Row>
          <Grid.Column id="studentGridColumn">
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
