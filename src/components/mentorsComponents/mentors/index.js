import React from "react";
import MentorsCard from "../mentorsCard";
import { Card } from "semantic-ui-react";
import "./mentorsList.css";

export default function Mentors({ mentorList }) {
  const mentorsCards = mentorList.map((mentor) => (
    <MentorsCard key={mentorList.userEmail} mentor={mentor} />
  ));

  return (
    <>
      <Card.Group
        id="mentorsCards"
        centered
        stackable
        doubling
        itemsPerRow={4}
      >
        {mentorsCards}
      </Card.Group>
    </>
  );
}
