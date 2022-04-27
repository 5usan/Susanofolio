import React from "react";
import { AiFillGithub } from "react-icons/ai";

import "./ProjectCard.scss";

const Card = (props) => {
  const { name, img, description, github } = props;
  return (
    <div
      className={`col-lg-2 d-flex flex-column wrappers ${props.className} m-3 p-0 justify-content-between`}
    >
      <img src={img} alt="" className="w-100 m-0 p-0 projectImg" />
      <div className="d-flex flex-column p-4">
        <h3>{name}</h3>
        {description ? (
          <p>{description}</p>
        ) : (
          <p>
            This is demo description since your repo doesnot have description
          </p>
        )}
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
