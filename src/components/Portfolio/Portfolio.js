// import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import projectsInfo from "../../constants/projects.json";

const Portfolio = () => {
  const userGitLink = "https://susanofolio-backend.herokuapp.com//api/portfolio/";
  const [repoInfo, setRepoInfo] = useState(null);
  const sendGetRequest = async () => {
    try {
      const resp = await axios.get(userGitLink);
      setRepoInfo(resp.data.allRepos);
    } catch (err) {
      console.error(err, "error");
    }
  };
  useEffect(() => {
    sendGetRequest();
  }, []);

  return (
    <div className="row justify-content-center align-items-center">
      {repoInfo ? (
        repoInfo.map((data, index) => {
          return (
            <ProjectCard
              key={index}
              className=""
              img={
                index % 2 === 0 ? projectsInfo[0].image : projectsInfo[1].image
              }
              name={data.name}
              description={data.description}
              github={data.link}
            />
          );
        })
      ) : (
        <h4 className="text-white text-center">LOADING...</h4>
      )}
    </div>
  );
};

export default Portfolio;
