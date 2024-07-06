import { useEffect, useRef, useState } from "react";
import { SettingsOutline } from "react-ionicons";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ user }) => {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  const handleAvatarClick = () => {
    setShowPopup(!showPopup);
  };

  const logout = () => {
    window.open(`${process.env.VITE_AUTH_URL}/auth/logout`, "_self");
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]);

  return (
    <div className="naviField">
      <div id="naviFieldLeft">
        <p id="navbarTitle">Bioversee</p>
        <div>
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
      <div id="naviFieldRight">
        {user && (
          <ul className="list">
            <Link
              id="settingsButton"
              className={`naviButton ${
                location.pathname === "/settings" ? "active" : ""
              }`}
              to="/settings"
            >
              <SettingsOutline
                color={"#00000"}
                title={"Settings"}
                height="40px"
                width="33px"
              />
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
              <div id="popup" ref={popupRef}>
                <p className="popupList">Family Name:</p>
                <p className="popupItem">{user.name.familyName}</p>
                <p className="popupList">Given Name:</p>
                <p className="popupItem">{user.name.givenName}</p>
                <button className="popupButton" onClick={logout}>
                  Logout
                </button>
              </div>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
