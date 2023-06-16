import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div className="footer">
      <div className="socialMedia">
       
        <LinkedInIcon  onClick={() => openInNewTab("https://www.linkedin.com/")} />
        <GitHubIcon onClick={() => openInNewTab("https://github.com/avinashshivappa")} />
      </div>

      <p class="copy">&copy; Copyright 2023</p>
      <p class="copy">Built with &#x2661; by Avinash S</p>
    </div>
  );
}

export default Footer;
