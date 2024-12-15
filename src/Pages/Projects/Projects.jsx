import { useEffect,useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        const response = await fetch("https://api.github.com/users/asad-nur/repos");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching GitHub projects:", error);
      }
    };

    fetchGitHubProjects();
  }, []);

    return (
      <>
      <div className="navbar">
      <NavBar />
      </div>
      <div className="projects-page">
        <div className=" inset-0 -z-10 
        items-center px-5 py-24 
        [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
          <h1 className="header">Projects</h1>
          <p className="description">Explore some of my GitHub projects below:</p>

          <div className="projects-list">
            {projects.map((project, index) => (
              <div className="project-item" key={project.id} style={{ "--delay": index }}>
                <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                  <h3 className="project-title">{project.name}</h3>
                </a>
                <p className="project-description">{project.description || "No description provided."}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
    );
  };

  export default Projects;