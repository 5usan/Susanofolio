import React from "react";
import Portfolio from "../components/Portfolio/Portfolio";
import OuterCard from "../utils/OuterCard";

const PortfolioPage = () => {
  return (
    <OuterCard first="Featured" second="Portfolio">
      <Portfolio />
    </OuterCard>
  );
};

export default PortfolioPage;
