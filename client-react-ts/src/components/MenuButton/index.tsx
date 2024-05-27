import React, { useState } from "react";
import "./MenuButton.css";

const MenuButton: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleStyles = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div
      id="circle"
      className={isToggled ? "toggled" : ""}
      onClick={toggleStyles}
    >
      <div id="horizontal_line1" className="line"></div>
      <div id="horizontal_line2" className="line"></div>
      <div id="horizontal_line3" className="line"></div>
      <div id="horizontal_line4" className="line"></div>
      <div id="horizontal_line5" className="line"></div>
      <div id="horizontal_line6" className="line"></div>
    </div>
  );
};

export default MenuButton;
