import React from "react";
import projects from "../data/projects";
import CreateProject from "./CreateProject";
import Title from "./Title.js";

function Projects() {
  return (
    <div className="projects">
      <Title title="Projects" />
      <div className="project-cards">
        {projects.map(project => {
          return CreateProject(project);
        })}
      </div>
    </div>
  );
}

export default Projects;
