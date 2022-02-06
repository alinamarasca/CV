import React from "react";
import ShowImg from "./ShowImg.jsx";
import { BsLink45Deg, BsGithub } from "react-icons/bs";

const CreateProject = (project, index) => {
  const { title, thumbnail, url, repo, tools } = project;
  return (
    <div className="project-card" key={index}>
      <div className="preview">
        <div className="control">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <BsLink45Deg />
          </a>
          <a href={repo} target="_blank" rel="noopener noreferrer">
            {" "}
            <BsGithub />
          </a>
        </div>

        {ShowImg(
          "projects",
          thumbnail,
          "jpg",
          "thumbnail",
          "project-thumbnail"
        )}
        <h4 className="project-name">{title}</h4>
      </div>
      <div className="description">
        {tools.map((tool, index) =>
          ShowImg("icons", tool, "svg", "icon", `${tool}-icon`, index)
        )}
      </div>
    </div>
  );
};

export default CreateProject;
