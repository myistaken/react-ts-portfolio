import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div> 
    <div className="projects">
      <div className="container">
        <svg viewBox="0 50 500 500" preserveAspectRatio="xMinYMin meet">
          <path d="M0,50 C150,200 350,0 500,100 L500,00 L0,0 Z"></path>
        </svg>
      </div>
      <div className="title">Projeler</div>
      <div className="project-list">
        <div className="wrapper">
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <div>Item 6</div>
            <div>Item 7</div>
            <div>Item 8</div>
            <div>Item 9</div>

        </div>
      </div>
     </div>
    </div>
  );
};

export default Projects;
