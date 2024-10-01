import React, { useEffect, useRef, useState } from "react";
import Canvas from "../../components/Canvas";
import Chart from "../../components/Chart/index";
import Slider from "../../components/Slider";
import Switch from "../../components/Switch";
import useDimensions from "../../utils/hooks/useDimensions";
import "./Bioreactor.css";

interface Card {
  id: string;
  coordinates: { x: number; y: number };
  text: string;
}

interface Button {
  id: string;
  label: string;
}

interface BioreactorProps {
  user: any;
}

function Bioreactor({ user }: BioreactorProps) {
  const [canvasRef, canvasSize] = useDimensions();
  const [cards, setCards] = useState<Card[]>([
    {
      id: "bioreactor",
      coordinates: { x: 0, y: 0 },
      text: "",
    },
  ]);

  const [warmWVal, setWarmWVal] = useState(false);
  const [coldWVal, setColdWVal] = useState(false);
  const [acidVal, setAcidVal] = useState(false);
  const [baseVal, setBaseVal] = useState(false);
  const [rotorVal, setRotorVal] = useState(0);
  const [aeratorVal, setAeratorVal] = useState(0);

  // State for device buttons
  const [buttons, setButtons] = useState<Button[]>([]);

  // Context menu state
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({
    x: 0,
    y: 0,
  });
  const [selectedButtonId, setSelectedButtonId] = useState<string | null>(null);

  // State for renaming
  const [isRenaming, setIsRenaming] = useState(false);
  const [newLabel, setNewLabel] = useState("");

  // Ref a context menü div-hez
  const contextMenuRef = useRef<HTMLDivElement | null>(null);

  // Load buttons from local storage on component mount
  useEffect(() => {
    const savedButtons = JSON.parse(
      localStorage.getItem("deviceButtons") || "[]"
    );
    setButtons(savedButtons);
  }, []);

  // Function to add a new button
  const addButton = () => {
    const newButton = {
      id: `button-${buttons.length + 1}`,
      label: `Device ${buttons.length + 1}`,
    };
    const updatedButtons = [...buttons, newButton];
    setButtons(updatedButtons);
    localStorage.setItem("deviceButtons", JSON.stringify(updatedButtons)); // Save to local storage
  };

  // Handle right-click (context menu) on a button
  const handleRightClick = (event: React.MouseEvent, buttonId: string) => {
    event.preventDefault();

    // Get the position of the button relative to the viewport
    const buttonRect = event.currentTarget.getBoundingClientRect();

    setSelectedButtonId(buttonId);
    // Set the context menu position based on the button's position
    setContextMenuPosition({
      x: buttonRect.left,
      y: buttonRect.top - 60, // Position the menu 60px above the button
    });
    setContextMenuVisible(true);
  };

  // Handle renaming a device
  const renameDevice = () => {
    if (selectedButtonId) {
      const updatedButtons = buttons.map((button) =>
        button.id === selectedButtonId ? { ...button, label: newLabel } : button
      );
      setButtons(updatedButtons);
      localStorage.setItem("deviceButtons", JSON.stringify(updatedButtons)); // Save to local storage
      setContextMenuVisible(false);
    }
  };

  // Handle deleting a device
  const deleteDevice = () => {
    if (selectedButtonId) {
      const updatedButtons = buttons.filter(
        (button) => button.id !== selectedButtonId
      );
      setButtons(updatedButtons);
      localStorage.setItem("deviceButtons", JSON.stringify(updatedButtons)); // Save to local storage
      setContextMenuVisible(false);
    }
  };

  useEffect(() => {
    setCards([
      {
        id: "bioreactor",
        coordinates: {
          x: canvasSize.width / 2 - 690 / 2,
          y: canvasSize.height / 2 - 670 / 2,
        },
        text: "",
      },
    ]);
  }, [canvasRef, canvasSize]);

  // Detect clicks outside the context menu to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        contextMenuRef.current &&
        !contextMenuRef.current.contains(event.target as Node)
      ) {
        setContextMenuVisible(false);
      }
    };

    // Add event listener when context menu is open
    if (contextMenuVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener when context menu is closed
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [contextMenuVisible]);

  return (
    <>
      <div className="container">
        <aside id="actuatorSide">
          <div className="switchBox">
            <h4 className="boxTitle">Pump settings</h4>
            <Switch
              name="switchWarmWaterPump"
              setVal={setWarmWVal}
              val={warmWVal}
              label="Warm water pump"
              url="/api/v1/actuator/getswitchesactuators"
              updateUrl="/api/v1/actuator/postswitchactuator"
              user={user}
            />
            <Switch
              name="switchColdWaterPump"
              setVal={setColdWVal}
              val={coldWVal}
              label="Cold water pump"
              url="/api/v1/actuator/getswitchesactuators"
              updateUrl="/api/v1/actuator/postswitchactuator"
              user={user}
            />
            <Switch
              name="switchAcidPump"
              setVal={setAcidVal}
              val={acidVal}
              label="Acid pump"
              url="/api/v1/actuator/getswitchesactuators"
              updateUrl="/api/v1/actuator/postswitchactuator"
              user={user}
            />
            <Switch
              name="switchBasePump"
              setVal={setBaseVal}
              val={baseVal}
              label="Base pump"
              url="/api/v1/actuator/getswitchesactuators"
              updateUrl="/api/v1/actuator/postswitchactuator"
              user={user}
            />
          </div>
          <div className="sliderBox">
            <h4 className="boxTitle">Agitator / Aerator Settings</h4>
            <Slider
              name="rotor"
              setVal={setRotorVal}
              val={rotorVal}
              label="Rotor"
              url="/api/v1/actuator/getslideractuators"
              updateUrl="/api/v1/actuator/postslideractuator"
              user={user}
            />
            <Slider
              name="aerator"
              setVal={setAeratorVal}
              val={aeratorVal}
              label="Aerator"
              url="/api/v1/actuator/getslideractuators"
              updateUrl="/api/v1/actuator/postslideractuator"
              user={user}
            />
          </div>
        </aside>
        <main id="reactorBox" ref={canvasRef}>
          <Canvas cards={cards} rotorVal={rotorVal} />
        </main>
        <aside id="sensorSide">
          <div className="chartBox">
            <Chart
              name="temperature"
              label="Temperature"
              url="/api/v1/sensor/getsensordata"
            />
            <Chart
              name="ph"
              label="pH value"
              url="/api/v1/sensor/getsensordata"
            />
          </div>
        </aside>
      </div>

      {/* Device List */}
      <div className="deviceList">
        {buttons.map((button) => (
          <button
            key={button.id}
            className="deviceButton"
            onContextMenu={(e) => handleRightClick(e, button.id)}
          >
            {button.label}
          </button>
        ))}
        <button
          onClick={addButton}
          style={{ width: "120px", height: "40px" }}
          className="deviceButton"
        >
          Add Device
        </button>
      </div>

      {/* Context Menu */}
      {contextMenuVisible && (
        <div
          className="contextMenu"
          style={{ top: contextMenuPosition.y, left: contextMenuPosition.x }}
          ref={contextMenuRef} // A context menü ref hozzáadása
        >
          <div onClick={() => setIsRenaming(true)}>Rename</div>
          <div onClick={deleteDevice}>Delete</div>
        </div>
      )}

      {/* Rename Modal */}
      {isRenaming && (
        <div className="modal">
          <h4>Rename Device</h4>
          <input
            type="text"
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
            placeholder="New Device Name"
          />
          <button onClick={renameDevice}>Save</button>
          <button onClick={() => setIsRenaming(false)}>Cancel</button>
        </div>
      )}
    </>
  );
}

export default Bioreactor;
