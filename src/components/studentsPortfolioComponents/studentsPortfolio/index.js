import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Header,
  Item,
} from "semantic-ui-react";
import "./studentsPortfolio.css";

export default function StudentsPortfolio({ portfolio }) {
  return (
    <>
      <div className="portfolio">
        <Header as="h3" textAlign="center" />
        <Container>
          <Item.Group>
            <Item>
              <Item.Image src="https://res.cloudinary.com/a20085909/image/upload/v1570916144/yifz1tahn11luai14fis.png" />

              <Item.Content>
                <Link to={`/u/students/${portfolio.uId}/${portfolio.id}/`}>
                  <Item.Header>{portfolio.title}</Item.Header>
                </Link>
                <Item.Description id="studentsPortfolioDesc">
                  <p>{portfolio.description}</p>
                </Item.Description>
                <Item.Meta>
                  <span>Created By: {portfolio.userEmail}</span>
                </Item.Meta>
              </Item.Content>
            </Item>
          </Item.Group>
        </Container>
      </div>
    </>
  );
}
