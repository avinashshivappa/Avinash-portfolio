import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Avinash</h2>
        <div className="prompt">
          <p>A web developer with a passion for learning and creating.</p>

          <LinkedInIcon
            onClick={() => openInNewTab("https://www.linkedin.com/")}
          />
          <GithubIcon
            onClick={() => openInNewTab("https://github.com/avinashshivappa")}
          />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>Basics of NodeJS, ExpressJS, MongoDB</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
