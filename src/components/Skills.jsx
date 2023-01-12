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
      <Title title={"What's up"} />
      <div className="learning">
        <p>
          Now I am working on small{" "}
          <a href="https://github.com/alinamarasca/weather-api">
            weather API project{" "}
          </a>
          using <span>Angular</span> and <span>Observables</span> - I have
          created a basic app, but I would like to:
          <ul>
            <li> change background depending on the weather conditions</li>
            <li> improve responsiveness </li>
            <li> deploy on Github</li>
            <li> add to my portfolio</li>
          </ul>
        </p>
        <p>
          At <a href="https://www.forcit.co/">Forcit </a>was involved in a few
          projects with focus on <span>front-end</span> and <span>UI/UX</span>.
          My main learning objectives were <span>Angular</span>,{" "}
          <span>NX-workspace</span> and <span>SASS</span>.{" "}
        </p>
        {"\n"}
        <p>
          {" "}
          Apart from internship I was helping{" "}
          <a href="https://www.linkedin.com/in/laurentdecraene/?lipi=urn%3Ali%3Apage%3Amessaging_thread%3Bc6ec1b3f-c665-4d10-8ab0-8385256db475">
            Laurent De Craene{" "}
          </a>{" "}
          with <span>UI/UX</span>{" "}
        </p>{" "}
        for 'Creep Alert' app.
        {"\n"}
        <p>
          At <a href="https://www.influo.com/"> Influo</a> I received
          introduction to <span>RxJS</span> and faced more difficult{" "}
          <span>UI/UX</span> challenges.
        </p>
      </div>
    </div>
  );
}
export default Skills;
