import React from "react";
import StudentsPortfoliosCard from "../studentsPortfoliosCard";
import { Header, Card } from "semantic-ui-react";

export default function StudentsPortfolios({ portfolioList }) {
  const studentsPortfoliosCards = portfolioList.map((portfolio) => (
    <StudentsPortfoliosCard key={portfolioList.id} portfolio={portfolio} />
  ));

  return (
    <>
      <Card.Group
        id="studentsCards"
        centered
        stackable
        doubling
        itemsPerRow={2}
      >
        
          {studentsPortfoliosCards}
      </Card.Group>
    </>
  );
}
