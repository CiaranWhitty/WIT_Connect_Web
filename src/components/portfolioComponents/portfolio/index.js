import React from "react";
import app from "../../../firebase/firebase";
import "./portfolio.css";
import {
  Button,
  Container,
  Header,
  Icon,
  Item,
  Divider,
  Checkbox,
} from "semantic-ui-react";

export default function Portfolio({ portfolio }) {
  const deletePortfolio = () => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const portfolioRef = app.database().ref("Portfolio").child(portfolio.id);
      portfolioRef.remove();
    }
  };

  const publicPortfolio = () => {
    const portfolioRef = app.database().ref("Portfolio").child(portfolio.id);
    portfolioRef.update({
      publicItem: !portfolio.publicItem,
    });
  };

  return (
    <>
      <div className="portfolio">
        <Header as="h3" textAlign="center" />
        <Container>
          <Item.Group divided>
            <Item>
              <Item.Image src="https://res.cloudinary.com/a20085909/image/upload/v1570916144/yifz1tahn11luai14fis.png" />
              <Item.Content>
                <Item.Header as="a">Title: {portfolio.title}</Item.Header>

                <Item.Description id="studentsPortfolioDesc">
                  {" "}
                  <p>Description: {portfolio.description}</p>
                </Item.Description>

                <Item.Extra>
                  {portfolio.files}
                  <h4>*File*</h4>
                  <h4>*File*</h4>
                  <h4>*File*</h4>
                </Item.Extra>

                <Item.Extra>
                  <Button
                    id="butnDelete"
                    negative
                    floated="right"
                    onClick={deletePortfolio}
                  >
                    <Icon name="delete" size={"large"} />
                  </Button>
                  <Button id="butnEdit" floated="right">
                    <Icon name="edit" size={"large"} />
                  </Button>
                  <Checkbox
                    label="Make public"
                    checked={portfolio.publicItem}
                    onClick={publicPortfolio}
                  />
                </Item.Extra>
              </Item.Content>
            </Item>
              Date Created: {portfolio.creationDate}
            <Divider />
          </Item.Group>
        </Container>
      </div>
    </>
  );
}
