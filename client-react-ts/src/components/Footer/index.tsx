import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footerCopy">
        <p>
          &copy; 2024 Bioversee <br></br>All rights reserved
        </p>
      </div>
      <div className="footerLinks">
        <a
          href="https://www.linkedin.com/in/mate-melcher-5a16601bb/"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          About me
        </a>
        <br></br>
        <a
          href="https://github.com/MelcherMate"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          GitHub Repository
        </a>
      </div>
    </>
  );
}

export default Footer;
