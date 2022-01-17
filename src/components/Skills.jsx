import React from "react";
import ShowImg from "./ShowImg";
import skillSet from "../data/skills";
import Title from "../components/Title";

function Skills() {
  const { practising, learning } = skillSet;
  return (
    <div className="skills">
      <div className="practising">
        <Title title={"Practising"} />
        {practising.map(icon => {
          return ShowImg("icons", icon, "svg", "icon", `${icon}-icon`);
        })}
      </div>
      <div className="learning">
        <Title title={"Learning"} />
        {learning.map(icon => {
          return ShowImg("icons", icon, "svg", "icon", `${icon}-icon`);
        })}
      </div>
    </div>
  );
}
export default Skills;
