import React, { Fragment } from "react";
import { projects } from "../constants";
import "./css/Woks.css";

const ProjectCard = ({ project }) => {
  const { name, description, image, source_code_link, demo_link } = project;

  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="button-container">
        <a href={demo_link} target="_blank" rel="noopener noreferrer">
          <button>Live</button>
        </a>
        <a href={source_code_link} target="_blank" rel="noopener noreferrer">
          <button>Code</button>
        </a>
      </div>
    </div>
  );
};

const Woks = () => {
  return (
    <Fragment>
      <div className="heading-work">
        <h1>PROJECTS</h1>
        <h2>
          My <span>Past Projects</span>
        </h2>
        <p>
          Hey Folks, I Harshal introducing my some past projects in Frontend as
          well as Backend and this projects gives you nice brief about me that
          how I code's. This projects contain mixtures of many languages such
          as HTML, CSS, REACTJS, EXPRESSJS and many more...
        </p>
      </div>
      <div className="outer-container-works">
        <div className="works-container">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Woks;