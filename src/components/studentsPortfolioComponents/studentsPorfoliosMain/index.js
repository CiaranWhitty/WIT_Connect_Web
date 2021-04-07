import React, { useState, useEffect } from "react";
import app from "../../../firebase/firebase";

import StudentsPortfolios from "../studentsPorfolios";

export default function StudentsPortfolioMain({ year, studentuId }) {
  const [portfolioList, setPortfolioList] = useState([]);

  useEffect(
    () => {
      const portfolioRef = app.database().ref("Portfolio");

      portfolioRef.on("value", (snapshot) => {
        const portfolios = snapshot.val();
        const portfolioList = [];
        for (let id in portfolios) {
          portfolioList.push({ id, ...portfolios[id] });
        }

        setPortfolioList(
          portfolioList
            .filter((portfolio) => portfolio.uId === studentuId)
            .filter((portfolio) => portfolio.year === year)
            .filter((portfolio) => portfolio.publicItem === true)
        );
      });
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      <StudentsPortfolios portfolioList={portfolioList} />
    </>
  );
}
