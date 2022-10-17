import React from "react";
import "./Skills.css";
import { Canvas } from "react-three-fiber";
import { Box } from "../box/Box";

const Skills = () => {
  return (
  <div className="skills">
   
    
      <div className="skills-left"></div>
      <div className="skills-right">
        <Canvas className="canvas" style={{width:150,height:150,position:"fixed",top:"1rem",right:0}}>
          <pointLight position={[5, 5, 5]} />
          <Box />
        </Canvas>
      </div>
    </div>
  );
};

export default Skills;
