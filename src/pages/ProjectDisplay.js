import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import PreviewIcon from "@mui/icons-material/Preview";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="pic" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <div>
        <GitHubIcon onClick={() => openInNewTab(project.github)} />

        <PreviewIcon onClick={() => openInNewTab(project.live)} />
      </div>
    </div>
  );
}

export default ProjectDisplay;
