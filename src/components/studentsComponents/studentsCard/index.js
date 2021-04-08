import React from "react";
import { Link } from "react-router-dom";
import "./studentsCard.css";
import "../../../globals/fontawesome";
import { Card, Image, Divider } from "semantic-ui-react";

const StudentsCard = ({ student, action }) => {
  return (
    <>
      <Card>
        <Card.Content>
          <Link to={`/u/students/${student.uId}`}>
            <Image
              fluid
              className="card-img-tag center "
              alt={student.name}
              // src={
              //   student.studentImg ? `/u/students/${student.name}` : "/u/students"
              // }
              src={
                "https://res.cloudinary.com/a20085909/image/upload/v1617890932/profile-placeholder-genderless_w9v4r5.png"
              }
            />
          </Link>
          {/* 
            Male Image
          "https://res.cloudinary.com/a20085909/image/upload/v1592601611/nedjkjyve4j8j2gbr8ak.jpg" 
            Female Image
          "https://res.cloudinary.com/a20085909/image/upload/v1617227524/profile-placeholder-female_g7lxtq.png" 
          */}
          <Card.Description>
            <Card.Header as={"h2"} textAlign={"center"}>
              {student.name}
            </Card.Header>

            <Card.Meta>
              <span>
                {" "}
                <b>Email: </b>
                {student.userEmail}
              </span>
              <span>
                {" "}
                <br />
                <b>Join Date: </b> {student.creationDate}
              </span>
              <Divider />{" "}
              <span>
                {" "}
                {student.course}
              </span>
            </Card.Meta>
          </Card.Description>

          {/* <div className="card-footer">{action(student)}</div> */}
        </Card.Content>
      </Card>
    </>
  );
};

export default StudentsCard;
