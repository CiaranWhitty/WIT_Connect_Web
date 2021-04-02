import React from "react";
import { withRouter } from "react-router-dom";
import StudentsDetails from "../studentsDetails";
import PageTemplate from "../templateStudentsPage";
import useStudent from "../../hooks/useStudent";

const StudentsPage = (props) => {
  const { userEmail } = props.match.params;
  const [student] = useStudent(userEmail);
  return (
    <>
      {student ? (
        <>
          <PageTemplate student={student}>
            <StudentsDetails student={student} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for Data</p>
      )}
    </>
  );
};

export default withRouter(StudentsPage);
