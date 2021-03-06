import React from "react";
import StudentsPortfoliosTimelineCard from "../studentsPortfoliosTimelineCard";
import { Header, Card } from "semantic-ui-react";

export default function StudentsPortfoliosTimeline({ portfolioList }) {
  const studentsPortfoliosCards = portfolioList.map((portfolio) => (
    <StudentsPortfoliosTimelineCard
      key={portfolioList.id}
      portfolio={portfolio}
    />
  ));

  return <>{studentsPortfoliosCards}</>;
}
