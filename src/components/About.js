import React from "react";
import Links from "./Links.js";

function About(prop) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{prop.bio ? prop.bio : ""}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={prop.github} linkedin= {prop.linkedin}/>
    </div>
  );
}

export default About;
