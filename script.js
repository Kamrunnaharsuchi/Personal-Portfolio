// script.js

// Fetch skills and projects from JSON file
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Load Skills
    const skillsList = document.getElementById("skills-list");
    data.skills.forEach(skill => {
      const skillItem = document.createElement("div");
      skillItem.className = "skill-item";
      skillItem.textContent = skill;
      skillsList.appendChild(skillItem);
    });

    // Load Projects
    const projectsList = document.getElementById("projects-list");
    data.projects.forEach(project => {
      const projectItem = document.createElement("div");
      projectItem.className = "project-item";
      projectItem.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
      `;
      projectsList.appendChild(projectItem);
    });
  })
  .catch(error => console.error("Error loading JSON:", error));
