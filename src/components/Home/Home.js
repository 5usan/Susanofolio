import React from "react";
import userInfo from "../../constants/user-info.json";
import susan from "../../constants/susan.jpg";
import "./Home.scss";

const Home = () => {
  return (
    <div className="background">
      <img src={susan} alt="" className="profile" />
      <div className="d-flex flex-column align-items-center myDetails">
        <div className="d-flex flex-column justify-content-center align-items-center h-50">
          <h2 className="m-0">Hello, I'm</h2>
          <h1 className="m-0">{userInfo.name}</h1>
          <h4 className="m-0">AND THIS IS MY REZUME</h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
