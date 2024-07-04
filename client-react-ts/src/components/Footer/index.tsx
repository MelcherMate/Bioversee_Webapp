import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerCopy">
        <p>&copy; 2024 Bioversee &#124; All rights reserved. Mate Melcher.</p>
      </div>
      <div id="linkBox">
        <Link className="footerLink" to="/about">
          &#124; About Project Bioversee
        </Link>
        <a href="https://github.com/MelcherMate" className="footerLink">
          &#124; GitHub Repository
        </a>
      </div>
    </div>
  );
}

export default Footer;
