import React from "react";
import "./OuterCard.scss";

const OuterCard = (props) => {
  return (
    <div className="back">
      <div className="contain p-5 d-flex flex-column justify-content-center align-items-center">
        {props.children}
      </div>
    </div>
  );
};

export default OuterCard;
