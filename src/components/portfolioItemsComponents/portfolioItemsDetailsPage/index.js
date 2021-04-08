import React from "react";
import { withRouter } from "react-router-dom";
import usePotfolioItem from "../../../hooks/usePotfolioItem";
import { Grid, Container } from "semantic-ui-react";
import PortfolioItems from "../portfolioItems";
import PortfolioItemHeader from "../portfolioItemHeader";

const PortfolioItemPage = (props) => {
  const { id } = props.match.params;
  const [portfolioList] = usePotfolioItem(id);

  return (
    <>
      {" "}
      {portfolioList ? (
        <>
          {" "}
          <PortfolioItemHeader />
          <div className="profile">
            <Grid id="profileMainCon">
              <Grid.Row textAlign="center" id="profileRow">
                <Grid.Column width={16} id="profileCol">
                  <Container id="profileCon">
                    <PortfolioItems portfolioList={portfolioList} />
                  </Container>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </>
      ) : (
        <p>Waiting for Data</p>
      )}
    </>
  );
};

export default withRouter(PortfolioItemPage);
