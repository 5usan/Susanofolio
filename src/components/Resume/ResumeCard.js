import React from "react";
import "./ResumeCard.scss";
const ResumeCard = ({ date, name, instituteName, desc }) => {
  return (
    <>
      <div className="resumeWrapper d-flex flex-column justify-content-between">
        <h5>{date}</h5>
        <h4>{name}</h4>
        <p className="darkColor">{desc}</p>
        <h5 className="darkColor">{instituteName}</h5>
      </div>
    </>
  );
};

export default ResumeCard;
