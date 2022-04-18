import React from "react";
import About from "../components/About/About";
import OuterCard from "../components/OuterCard/OuterCard";

const AboutPage = () => {
  return (
    <OuterCard first="About" second="Me">
      <About />
    </OuterCard>
  );
};

export default AboutPage;
