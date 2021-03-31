import React from "react";
import StudentCard from "../studentsCard/";
import "./studentsList.css";

import { Card } from "semantic-ui-react";

const StudentsList = ({ students, action }) => {
  const studentsCards = students.map((s) => (
    <StudentCard key={s.userEmail} student={s} action={action} />
  ));
  return (
    <Card.Group centered stackable doubling itemsPerRow={4}>
      {studentsCards}
    </Card.Group>
  );
};

export default StudentsList;
