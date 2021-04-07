import React from "react";
// import PortfolioHeader from "../portfolioHeader";
import "./templatePortfolioPage.css";

const TemplatePortfolioItemPage = ({ portfolioItem, children }) => {
  return (
    <>
      {/* <PortfolioHeader portfolioItem={portfolioItem} /> */}

      <div id="portfolioItemChildren">{children}</div>
    </>
  );
};

export default TemplatePortfolioItemPage;
