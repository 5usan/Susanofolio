import React from "react";
import Portfolio from "../components/Portfolio/Portfolio";
import OuterCard from "../utils/OuterCard";
import "./PortfolioPage.scss";

const PortfolioPage = () => {
  return (
    <OuterCard>
      <div className="wrapper d-flex justify-content-center align-items-center">
        <h4>Featured</h4>
        <h4 className="portfolio">Portfolio</h4>
      </div>
      <Portfolio />
    </OuterCard>
  );
};

export default PortfolioPage;
