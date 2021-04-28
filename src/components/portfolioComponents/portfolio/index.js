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
import PortfolioEditForm from "../portfolioEditForm";

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
              <Item.Image src={portfolio.portfolioImage} />
              <Item.Content>
                <Item.Header>Title: {portfolio.title}</Item.Header>

                <Item.Description id="studentsPortfolioDesc">
                  {" "}
                  <p>Description: {portfolio.description}</p>
                </Item.Description>

                <Item.Extra>
                  <a href={portfolio.portfolioFile}>Download File</a>
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

                  <PortfolioEditForm portfolio={portfolio} />

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
