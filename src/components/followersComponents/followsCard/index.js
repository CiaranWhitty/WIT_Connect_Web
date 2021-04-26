import React from "react";
import { Card, Image, Divider } from "semantic-ui-react";

export default function MentorsCard({ followers }) {
  return (
    <>
      <Card centered>
        <Card.Content>
          <a href={`/u/students/${followers.studentFollowedId}`}>
            <Card.Header  as={"h2"} textAlign={"center"}>
              {followers.studentFollowedEmail}
            </Card.Header>
          </a>
        </Card.Content>
      </Card>
    </>
  );
}
