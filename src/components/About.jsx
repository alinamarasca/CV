import React from "react";
import Title from "./Title.js";
import Skills from "./Skills";

function About() {
  return (
    <>
      <div className="about">
        <Title title={"Summary"} />
        <div className="motivation">
          <p>
            I am passionate about <span>user experience</span> and looking for
            an opportunity to make users' navigation in a{" "}
            <span>digital world comfortable</span> and <span>accessible</span>{" "}
            for everyone.
            <br></br> I am a <span>curiosity driven</span> person, who{" "}
            <span>enjoys learning</span> and using their skills. I{" "}
            <span>love challenges</span>, I like <span>working in a team</span>{" "}
            and it's important for me to deliver an{" "}
            <span>efficient product</span>.
          </p>
        </div>
        <Skills />
      </div>
    </>
  );
}

export default About;
