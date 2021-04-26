import React from "react";
import { Link } from "react-router-dom";
import { Item, Card } from "semantic-ui-react";

export default function StudentsPortfoliosCard({ portfolio }) {
  return (
    <>
      <Card centered>
        <Card.Content>
          
            <Item>
              <Link to={`/u/students/${portfolio.uId}/${portfolio.id}/`}>
                <Item.Image src={portfolio.portfolioImage} />
              </Link>
              <Link to={`/u/students/${portfolio.uId}/${portfolio.id}/`}>
                <Item.Header>{portfolio.title}</Item.Header>
              </Link>
              <Item.Meta>
                <span>Created By: {portfolio.userEmail}</span>
              </Item.Meta>
            </Item>
            {portfolio.creationDate}

        </Card.Content>
      </Card>
    </>
  );
}
