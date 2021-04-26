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
              src={
                "https://res.cloudinary.com/a20085909/image/upload/v1617890932/profile-placeholder-genderless_w9v4r5.png"
              }
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
              <Divider />{" "}
              <span>
                {" "}
                {mentor.course}
              </span>
            </Card.Meta>
          </Card.Description>
        </Card.Content>
      </Card>
    </>
  );
}
