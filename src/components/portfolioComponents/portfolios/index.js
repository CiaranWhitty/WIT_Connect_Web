import React from "react";
import Portfolio from "../portfolio";

export default function Portfolios({ portfolioList }) {
  return (
    <>
      {portfolioList.map((portfolio) => (
        <Portfolio key={portfolioList.id} portfolio={portfolio} />
      ))}
    </>
  );
}
