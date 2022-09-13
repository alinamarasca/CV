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
      <Title title={"What's up?"} />
      <div className="learning">
        <p>
          Currently I am employed as analyst-developer intern at{" "}
          <a href="https://www.forcit.co/">Forcit</a>. During the internship I
          have been involved in a few projects with focus on{" "}
          <span>front-end</span> and <span>UI/UX</span>. My main learning
          objectives are <span>Angular</span>, <span>NX-workspace</span> and{" "}
          <span>SASS</span>.{" "}
        </p>
        {"\n"}
        <p>
          {" "}
          Apart from internship I am helping{" "}
          <a href="https://www.linkedin.com/in/laurentdecraene/?lipi=urn%3Ali%3Apage%3Amessaging_thread%3Bc6ec1b3f-c665-4d10-8ab0-8385256db475">
            Laurent De Craene{" "}
          </a>{" "}
          with his application 'Creep Alert' as <span>UI/UX designer</span>.
        </p>
        {"\n"}
        <p>
          Since 11th September I am following <span>Typescript course</span>{" "}
          organized by{" "}
          <a href="https://hackyourfuture.be/digitalents/"> HackYourFuture</a>.
        </p>
      </div>
    </div>
  );
}
export default Skills;
