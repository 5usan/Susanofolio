// import { Button } from "@material-ui/core";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
import Card from "../../utils/Card";
import "./Portfolio.scss";
import projectsInfo from "../../assets/projects.json";

const Portfolio = () => {
  // const userGitLink = "https://api.github.com/users/5usan/repos?per_pages=6";
  // const [repoInfo, setRepoInfo] = useState(null);
  // const sendGetRequest = async () => {
  //   try {
  //     const resp = await axios.get(userGitLink);
  //     setRepoInfo(resp.data);
  //   } catch (err) {
  //     console.error(err, "error");
  //   }
  // };
  // useEffect(() => {
  //   sendGetRequest();
  // }, []);

  return (
    <div className="row justify-content-center align-items-center">
      {projectsInfo.map((data, index) => {
        return (
          <Card
            key={index}
            className=""
            img={data.image}
            name={data.name}
            description={data.description}
            github={data.github}
          />
        );
      })}
    </div>
  );
};

export default Portfolio;
