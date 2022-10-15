import React from "react";
import "./Skills.css";
import { Canvas } from "react-three-fiber";
import { Box } from "../box/Box";


const Skills = () => {
  return (
  <div className="skills">
    <div className="container">
        <svg  viewBox="0 50 500 500" preserveAspectRatio="xMinYMin meet">
          <path d="M0,50 C150,200 350,0 500,100 L500,00 L0,0 Z"></path>
        </svg>
      </div>
    
      <div className="skills-left"></div>
      <div className="skills-right">
        <Canvas className="canvas" style={{width:150,height:150,position:"fixed",top:0,right:0}}>
          <pointLight position={[5, 5, 5]} />
          <Box />
        </Canvas>
      </div>
    </div>
  );
};

export default Skills;
