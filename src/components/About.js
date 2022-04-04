import React from "react";
import { image } from "../data/data";

function About() {
  
  return(
   <div id="about">
     <h2>About Me</h2>
     <p>Mark Bacon is an Actor turned React Dev from NYC.  Looking for his next big move!</p>
     <img src={image} alt="I made this"/>
   </div>
   )
}

export default About;
