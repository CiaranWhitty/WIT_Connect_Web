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
                  <Item.Image src={portfolio.portfolioImage} />
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
                      <a href={portfolio.portfolioFile}>Download File</a>
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
