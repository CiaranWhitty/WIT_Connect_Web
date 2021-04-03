import React from "react";
import StudentsHeader from "../studentsHeader";
import "./templateStudentsPage.css";

const TemplateStudentsPage = ({ student, children }) => {
  return (
    <>
      <StudentsHeader student={student} />

      <div id="studentChildren">{children}</div>
    </>
  );
};

export default TemplateStudentsPage;
