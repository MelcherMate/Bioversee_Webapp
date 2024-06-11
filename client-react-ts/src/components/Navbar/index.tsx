import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  return (
    <div className="naviField">
      <div className="naviButtonBox">
        <div id="mainTitle">
          <Link className="naviButton" to="/dashboard">
            Bioversee
          </Link>
        </div>
        <div id="naviAbout">
          <Link className="naviButton" to="/about">
            About
          </Link>
        </div>
        <div id="naviSettings">
          <Link className="naviButton" to="/settings">
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
        <Link className="link" to="/">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
