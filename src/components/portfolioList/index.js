import React, { useState, useEffect } from 'react';
import app from "../../firebase/firebase"
import Portfolio from '../portfolios'

export default function PortfolioList() {
  
  const [portfolioList, setPortfolioList] = useState();

  useEffect(() => {
    const portfolioRef = app.database().ref('Portfolio');
    portfolioRef.on('value', (snapshot) => {
      const portfolios = snapshot.val();
      const portfolioList = [];
      for (let id in portfolios) {
        portfolioList.push({ id, ...portfolios[id] });
      }
      setPortfolioList(portfolioList);
    });
  }, []);

  return (
    <div>
      {portfolioList
        ? portfolioList.map((portfolio, index) => <Portfolio portfolio={portfolio} key={index} />)
        : ''}
    </div>
  );
}