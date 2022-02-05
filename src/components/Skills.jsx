import React from "react";
import { practising, learning } from "../data/skills";
import Title from "../components/Title";
import CreateSkill from "./CreateSkill";

function Skills() {
  return (
    <div className="skills">
      <Title title={"Skills"} />
      <div className="practising">
        {practising.map((skill, index) => {
          return CreateSkill(skill, index);
        })}
      </div>
      <Title title={"Learning"} />
      <div className="learning">
        {learning.map((skill, index) => {
          return CreateSkill(skill, index);
        })}
      </div>
    </div>
  );
}
export default Skills;
