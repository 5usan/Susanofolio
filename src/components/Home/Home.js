import React from "react";
import userInfo from "../../assets/user-info.json";
import "./Home.scss";

const Home = () => {
  return (
    <div className="background">
      <img src={userInfo.image} alt="" className="profile" />
      <div className="d-flex flex-column justify-content-center align-items-center myDetails">
        <h2 className="m-0">Hello, I'm</h2>
        <h1 className="m-0">Susan Shrestha</h1>
        <h4 className="m-0">AND THIS IS MY REZUME</h4>
      </div>
    </div>
  );
};

export default Home;
