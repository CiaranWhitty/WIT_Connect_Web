import React from "react";
import {
  Container,
  Header,
  Item,
  Divider,
} from "semantic-ui-react";

export default function StudentsPortfolio({ portfolio }) {
 
  return (
    <>
      <div className="portfolio">
        <Header as="h3" textAlign="center" />
        <Container>
          <Item.Group divided>
            <Item>
              <Item.Image src="https://res.cloudinary.com/a20085909/image/upload/v1570916144/yifz1tahn11luai14fis.png" />
              <Item.Content>
                <Item.Header as="a">{portfolio.title}</Item.Header>

                <Item.Meta>
                  <span>{portfolio.data}</span>
                </Item.Meta>

                <Item.Description>{portfolio.description}</Item.Description>

                <Item.Description>
                  Created By: {portfolio.userEmail}
                </Item.Description>
              </Item.Content>
            </Item>

            <Divider />
          </Item.Group>
        </Container>
      </div>
    </>
  );
}
