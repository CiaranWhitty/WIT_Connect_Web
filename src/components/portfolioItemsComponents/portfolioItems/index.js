import React from "react";
import { Container, Header, Item, Divider } from "semantic-ui-react";
import "./portfolio.css";

// import PortfolioItem from "../portfolioItem";

export default function portfolioItem({ portfolioList }) {
  return (
    <>
      {portfolioList.map((portfolio) => (
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

                    <Item.Description id="studentsPortfolioDesc">
                      {" "}
                      <p>{portfolio.description}</p>
                    </Item.Description>

                    <Item.Extra>
                      {portfolio.files}
                      <h4>*File*</h4>
                      <h4>*File*</h4>
                      <h4>*File*</h4>
                    </Item.Extra>

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
      ))}
    </>
  );
}
