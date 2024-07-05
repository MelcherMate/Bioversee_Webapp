import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ user }) => {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);

  const handleAvatarClick = () => {
    setShowPopup(!showPopup);
  };

  const logout = () => {
    window.open(`${process.env.VITE_AUTH_URL}/auth/logout`, "_self");
  };

  return (
    <div className="naviField">
      <div className="naviButtonBox">
        <div id="mainTitle">
          {user && (
            <Link
              className={`naviButton ${
                location.pathname === "/dashboard" ? "active" : ""
              }`}
              to="/dashboard"
            >
              Dashboard
            </Link>
          )}
        </div>
      </div>
      {user && (
        <ul className="list">
          <Link
            className={`naviButton ${
              location.pathname === "/settings" ? "active" : ""
            }`}
            to="/settings"
          >
            Settings
          </Link>
          <li className="listItem">
            <img
              src={user.photos[0].value}
              alt=""
              id="avatar"
              onClick={handleAvatarClick}
            />
          </li>
          {showPopup && (
            <div id="popup">
              <p id="popupTitle">User information</p>
              <p className="popupList">Family Name:</p>
              <p className="popupItem">{user.name.familyName}</p>
              <p className="popupList">Given Name:</p>
              <p className="popupItem">{user.name.givenName}</p>
              <button className="popupButton" onClick={logout}>
                Logout from Bioversee
              </button>
              <button
                className="popupButton"
                onClick={() => setShowPopup(false)}
              >
                Close Menu
              </button>
            </div>
          )}
          <div id="naviSettings"></div>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
