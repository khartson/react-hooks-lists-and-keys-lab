import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const renderedProject = projects.map((project) => {
    const {name, about, id, technologies } = project; 
    return <ProjectItem name={name} about={about} key={id} technologies={technologies}  />
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{renderedProject}</div>
    </div>
  );
}

export default ProjectList;
