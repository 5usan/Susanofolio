import React from "react";
import { AiFillGithub } from "react-icons/ai";

import "./ProjectCard.scss";

const Card = (props) => {
  const { name, img, description, github } = props;
  console.log(description);
  return (
    <div
      className={`col-lg-2 d-flex flex-column wrappers ${props.className} m-3 p-0`}
    >
      <img src={img} alt="" className="w-100 m-0 p-0 projectImg" />
      <div className="d-flex flex-column p-4">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="d-flex justify-content-end">
          <a href={github} target="_blank" rel="noreferrer">
            <AiFillGithub size={40} color="black" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
