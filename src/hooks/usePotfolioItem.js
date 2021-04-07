import { useEffect, useState } from "react";
import app from "../firebase/firebase";

const usePotfolioItem = (id) => {
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
          portfolioList.filter((portfolio) => portfolio.id === id)
        );
      });
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return [portfolioList, setPortfolioList];
};

export default usePotfolioItem;
