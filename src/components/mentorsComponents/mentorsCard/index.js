import React from "react";
import { Link } from "react-router-dom";
import { Card, Image, Divider } from "semantic-ui-react";

export default function MentorsCard({ mentor }) {
  return (
    <>
      <Card centered>
        <Card.Content>
          <Image
            fluid
            className="card-img-tag center "
            alt={mentor.name}
            // src={
            //   student.studentImg ? `/u/students/${student.name}` : "/u/students"
            // }
            src={mentor.profileImage}
          />
          <Card.Description>
            <Card.Header id="nameCap" as={"h2"} textAlign={"center"}>
              {mentor.name}
            </Card.Header>

            <Card.Meta>
              <span>
                {" "}
                <b>Email: </b>
                {mentor.userEmail}
              </span>
              <Divider /> <span> {mentor.course}</span>
            </Card.Meta>
          </Card.Description>
        </Card.Content>
      </Card>
    </>
  );
}
