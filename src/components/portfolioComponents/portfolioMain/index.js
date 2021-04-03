import React, { useState, useEffect } from "react";
import app from "../../../firebase/firebase";
import { useAuth } from "../../../contexts/AuthContext";

import Portfolios from "../portfolios";

export default function PortfolioMain({ year }) {
  const [portfolioList, setPortfolioList] = useState([]);

  const { currentUser } = useAuth();
  const currentUserEmail = currentUser.email;

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
            .filter((portfolio) => portfolio.userEmail === currentUserEmail)
            .filter((portfolio) => portfolio.year === year)
            // .filter((portfolio) => portfolio.publicItem === true)
        );
      });
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      <Portfolios portfolioList={portfolioList} />
    </>
  );
}
