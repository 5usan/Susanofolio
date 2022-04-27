import React from "react";
import OuterCard from "../components/OuterCard/OuterCard";
import Resume from "../components/Resume/Resume";

const ResumePage = () => {
  return (
    <OuterCard first="My" second="Resume">
      <Resume />
    </OuterCard>
  );
};

export default ResumePage;
