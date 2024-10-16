import React, { useState, useEffect } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/.netlify/functions/getProjects")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div>
      <h2>My Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            {project.name} - {project.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
