import ShowImg from "./ShowImg";
import { BsLink45Deg, BsGithub } from "react-icons/bs";

const CreateProject = project => {
  const { title, thumbnail, url, repo, tools } = project;
  return (
    <div className="project-card">
      <div className="preview">
        <div className="control">
          <a href={url} target="_blank" rel="noreferrer">
            <BsLink45Deg />
          </a>
          <a href={repo} target="_blank" rel="noreferrer">
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
        {tools.map(tool =>
          ShowImg("icons", tool, "svg", "icon", `${tool}-icon`)
        )}
      </div>
    </div>
  );
};

export default CreateProject;
