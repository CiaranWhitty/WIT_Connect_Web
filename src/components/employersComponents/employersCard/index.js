import React from "react";
import { Link } from "react-router-dom";
import "./employersCard.css";
import "../../../globals/fontawesome";
import { Card, Image, Divider } from "semantic-ui-react";

const EmployersCard = ({ employer, action }) => {
  return (
    <>
      <Card>
        <Card.Content>
          <Link to={`/u/employers/${employer.name}`}>
            <Image
              fluid
              className="card-img-tag center "
              alt={"employer_Image"}
              src={employer.img}
            />
          </Link>

          <Card.Description>
            <Card.Header as={"h2"} textAlign={"center"}>
              {employer.name}
            </Card.Header>

            <Card.Meta>
              <span>
                {" "}
                <b>Email: </b>
                {employer.userEmail}
              </span>
            </Card.Meta>
          </Card.Description>
        </Card.Content>
      </Card>
    </>
  );
};

export default EmployersCard;
