import React from "react";
import { Link } from "react-router-dom";
import "./studentsCard.css";
import "../../globals/fontawesome";
import { Card, Image } from "semantic-ui-react";

const StudentsCard = ({ student, action }) => {
  return (
    <>
      <Card>
        <Card.Content>
          <Link to={`/u/students/${student.userEmail}`}>
            <Image
              fluid
              className="card-img-tag center "
              alt={student.name}
              // src={
              //   student.studentImg ? `/u/students/${student.name}` : "/u/students"
              // }
              src={
                "https://res.cloudinary.com/a20085909/image/upload/v1592601611/nedjkjyve4j8j2gbr8ak.jpg"
              }
            />
          </Link>
          {/* 
            Male Image
          "https://res.cloudinary.com/a20085909/image/upload/v1592601611/nedjkjyve4j8j2gbr8ak.jpg" 
            Female Image
          "https://res.cloudinary.com/a20085909/image/upload/v1617227524/profile-placeholder-female_g7lxtq.png" 
          */}
          <Card.Description textAlign={"center"}>
            <Card.Header as={"h2"} centered="true">{student.name}</Card.Header>

            <Card.Meta>
              <span> <b>Email: </b>{student.userEmail}</span>
              <span> <br/>{student.course}</span>
              <span> <br/><b>Join Date: </b> {student.creationDate}</span>
            </Card.Meta>
          </Card.Description>

          {/* <div className="card-footer">{action(student)}</div> */}
        </Card.Content>
      </Card>

    </>
  );
};

export default StudentsCard;
