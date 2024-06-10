import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  return (
    <div className="naviField">
      <div className="left-box">
        <div id="mainTitle">
          <Link className="link" to="/">
            Bioversee
          </Link>
        </div>
        <div id="naviAbout">
          <Link className="link" to="/about">
            About
          </Link>
        </div>
        <div id="naviSettings">
          <Link className="link" to="/settings">
            Settings
          </Link>
        </div>
      </div>
      {user ? (
        <ul className="list">
          <li className="listItem"></li>
          <li className="listItem">{user.displayName}</li>
          <li className="listItem" onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        <Link className="link" to="login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
