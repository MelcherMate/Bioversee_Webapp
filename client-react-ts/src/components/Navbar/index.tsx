import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ user }) => {
  const location = useLocation();

  const logout = () => {
    window.open(`${process.env.VITE_CLIENT_URL}/auth/logout`, "_self");
  };

  return (
    <div className="naviField">
      <div className="naviButtonBox">
        <div id="mainTitle">
          <Link
            className={`naviButton ${
              location.pathname === "/dashboard" ? "active" : ""
            }`}
            to="/dashboard"
          >
            Dashboard
          </Link>
        </div>
        <div id="naviSettings">
          <Link
            className={`naviButton ${
              location.pathname === "/settings" ? "active" : ""
            }`}
            to="/settings"
          >
            Settings
          </Link>
        </div>
      </div>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img src={user.photos[0].value} alt="" id="avatar" />
          </li>
          <li className="listItem">{user.displayName}</li>
          <li className="naviButton" onClick={logout}>
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
