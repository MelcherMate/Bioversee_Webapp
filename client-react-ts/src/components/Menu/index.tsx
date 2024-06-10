import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div id="menu" className={isOpen ? "toggled" : ""}>
        <div id="openTab" className={isOpen ? "toggled" : ""}>
          <div
            id="circle"
            className={isOpen ? "toggled" : ""}
            onClick={toggleMenu}
          >
            <div id="horizontal_line1" className="line"></div>
            <div id="horizontal_line2" className="line"></div>
            <div id="horizontal_line3" className="line"></div>
            <div id="horizontal_line4" className="line"></div>
            <div id="horizontal_line5" className="line"></div>
            <div id="horizontal_line6" className="line"></div>
          </div>
        </div>
        <div id="mainTab">
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
      </div>
    </>
  );
};

export default Menu;
