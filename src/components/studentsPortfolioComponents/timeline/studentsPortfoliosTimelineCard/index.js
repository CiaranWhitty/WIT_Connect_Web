import React from "react";
import { Link } from "react-router-dom";
import { Item, Card } from "semantic-ui-react";

export default function StudentsPortfoliosTimelineCard({ portfolio }) {
  return (
    <>
      <Card centered>
        <Card.Content>
          
            <Item>
              <Link to={`/u/students/${portfolio.uId}/${portfolio.id}/`}>
                <Item.Image src="https://res.cloudinary.com/a20085909/image/upload/v1570916144/yifz1tahn11luai14fis.png" />
              </Link>
              <Link to={`/u/students/${portfolio.uId}/${portfolio.id}/`}>
                <Item.Header>{portfolio.title}</Item.Header>
              </Link>
              <Item.Meta>
                <span>Created By: {portfolio.userEmail}</span>
              </Item.Meta>
            </Item>

        </Card.Content>
      </Card>
    </>
  );
}
