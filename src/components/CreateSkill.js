import React from "react";
import ShowImg from "./ShowImg.jsx";

function CreateSkill(skill, index) {
  return (
    <div className="skill" key={index}>
      {ShowImg("icons", skill.skill, "svg", "icon", `${skill}-icon`)}
      <p className="skill-name">{skill.name}</p>
    </div>
  );
}

export default CreateSkill;
