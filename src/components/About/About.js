import React from "react";
import "./About.scss";
import userInfo from "../../constants/user-info.json";

const About = () => {

  return (
    <div className="row justify-content-center about">
      <img src={userInfo.image} alt="" className="col-lg-4 col-md-4 aboutImg" />

      <div className="pt-4 col-lg-4 col-md-4 d-flex flex-column text-justify">
        {userInfo.description.map((desc, index) => {
          return <p className={index > 0 && "oddPara"}>{desc}</p>;
        })}
      </div>
    </div>
  );
};

export default About;
