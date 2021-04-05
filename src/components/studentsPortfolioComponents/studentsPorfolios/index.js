import React from "react";
import StudentsPortfolio from "../studentsPortfolio";

export default function StudentsPortfolios({ portfolioList }) {
  return (
    <>
      {portfolioList.map((portfolio) => (
        <StudentsPortfolio key={portfolioList.id} portfolio={portfolio} />
      ))}
    </>
  );
}
