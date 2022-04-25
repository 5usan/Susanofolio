import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.scss";
import userInfo from "../../constants/user-info.json";
import Button from "../Button/Button";

const About = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    console.log("Inside clickHandler");
    navigate("/contact");
  };

  return (
    <div className="row justify-content-center about">
      <img src={userInfo.image} alt="" className="col-lg-4 col-md-4 aboutImg" />

      <div className="pt-4 col-lg-4 col-md-4 d-flex flex-column text-justify justify-content-around">
        {userInfo.description.map((desc, index) => {
          return (
            <p className={index === 0 ? "firstPara" : "restPara"}>{desc}</p>
          );
        })}
        <div>
          <Button onClick={clickHandler}>Hire Me</Button>
          <Button className="mx-2 bg-secondary">Download CV</Button>
        </div>
      </div>
    </div>
  );
};

export default About;
