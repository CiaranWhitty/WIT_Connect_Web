import React, { useState, useEffect } from "react";
import app from "../../../../firebase/firebase";

import StudentsPortfoliosTimeline from "../../timeline/studentsPortfoliosTimeline";

export default function StudentsPortfolioTimelineMain({ year, studentuId }) {
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
            .filter((portfolio) => portfolio.publicItem === true)
        );
      });
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      <StudentsPortfoliosTimeline portfolioList={portfolioList} />
    </>
  );
}
