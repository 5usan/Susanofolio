import React from "react";
import resume from "../../constants/resume.json";
import ResumeCard from "./ResumeCard";
import "./Resume.scss";

const Resume = () => {
  return (
    <div className="row wrapper justify-content-center">
      <div className="col-lg-5">
        <div className="d-flex flex-column">
          <h2 className="text-center">Education</h2>
          {resume.education.map((edu) => (
            <ResumeCard
              date={edu.completionData}
              name={edu.name}
              instituteName={edu.instituteName}
              desc={edu.description}
            />
          ))}
        </div>
      </div>
      {/* <div className="col-lg-4">
        <div className="d-flex flex-column">
          <h2>Skills</h2>
          {resume.skills.map((skill) => (
            <ResumeCard skill={skill} />
          ))}
        </div>
      </div> */}
      <div className="col-lg-5">
        <div className="d-flex flex-column">
          <h2 className="text-center">Experience</h2>
          {resume.workExperience.map((exp) => (
            <ResumeCard
              date={exp.expreienceData}
              name={exp.name}
              instituteName={exp.instituteName}
              desc={exp.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
