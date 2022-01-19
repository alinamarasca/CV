import React from "react";
import { practising, learning } from "../data/skills";
import Title from "../components/Title";
import CreateSkill from "./CreateSkill";

function Skills() {
  return (
    <div className="skills">
      <Title title={"Practising"} />
      <div className="practising">
        {practising.map(skill => {
          return CreateSkill(skill);
        })}
      </div>
      <Title title={"Learning"} />
      <div className="learning">
        {learning.map(skill => {
          return CreateSkill(skill);
        })}
      </div>
    </div>
  );
}
export default Skills;
