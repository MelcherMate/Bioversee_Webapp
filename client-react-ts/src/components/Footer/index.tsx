import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footerCopy">
        <p>
          &copy; 2024 Bioversee <br></br>All rights reserved. Mate Melcher.
        </p>
      </div>
      <div className="footerLinks">
        <div id="naviAbout">
          <Link className="naviButton" to="/about">
            About Project Bioversee
          </Link>
        </div>
        <a
          href="https://github.com/MelcherMate"
          target="_blank"
          rel="noopener noreferrer"
          className="naviButton"
        >
          GitHub Repository
        </a>
      </div>
    </>
  );
}

export default Footer;
