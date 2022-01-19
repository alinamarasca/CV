import ShowImg from "./ShowImg";

const CreateProject = project => {
  const { title, thumbnail, url, tools } = project;

  return (
    <div className="project-card">
      <a href={url} target="_blank" rel="noreferrer">
        {ShowImg(
          "projects",
          thumbnail,
          "jpg",
          "thumbnail",
          "project-thumbnail"
        )}
        <h4 className="project-name">{title}</h4>
      </a>
      <div className="description">
        {tools.map(tool =>
          ShowImg("icons", tool, "svg", "icon", `${tool}-icon`)
        )}
      </div>
    </div>
  );
};

export default CreateProject;
