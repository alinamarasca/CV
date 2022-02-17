import React from "react";
import { practising } from "../data/skills";
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
      <Title title={"Current project"} />
      <div className="learning">
        <p>
          I am working on{" "}
          <a href="https://alinamarasca.github.io/zipfs-law/">
            Lingvobutcher app
          </a>{" "}
          inspired by{" "}
          <a href="https://en.wikipedia.org/wiki/Zipf%27s_law">Zipf's law</a>{" "}
          which states that frequency of any word is inversely proportional to
          its rank in the frequency table. I was fascinated with this fact and
          thought it would be a fun idea for a project.{" "}
        </p>
      </div>
    </div>
  );
}
export default Skills;
