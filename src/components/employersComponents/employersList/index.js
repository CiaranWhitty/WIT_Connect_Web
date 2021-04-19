import React from "react";
import EmployerCard from "../employersCard";
import "./employersList.css";

import { Card } from "semantic-ui-react";

const EmployersList = ({ employers, action }) => {
  const employersCards = employers.map((e) => (
    <EmployerCard key={e.userEmail} employer={e} action={action} />
  ));
  return (
    <Card.Group id="employersCards" centered stackable doubling itemsPerRow={4}>
      {employersCards}
    </Card.Group>
  );
};

export default EmployersList;
