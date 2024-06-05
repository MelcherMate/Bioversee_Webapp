import { useEffect, useState } from "react";
import Canvas from "../../components/Canvas";
import Chart from "../../components/Chart/index";
import Menu from "../../components/Menu";
import Slider from "../../components/Slider";
import Switch from "../../components/Switch";
import useDimensions from "../../utils/hooks/useDimensions";
import "./Dasboard.css";

interface Card {
  id: string;
  coordinates: { x: number; y: number };
  text: string;
}

function Dashboard() {
  const [canvasRef, canvasSize] = useDimensions();
  const [cards, setCards] = useState<Card[]>([
    {
      id: "bioreactor",
      coordinates: { x: 0, y: 0 },
      text: "",
    },
  ]);

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

  const [warmWVal, setWarmWVal] = useState(false);
  const [coldWVal, setColdWVal] = useState(false);
  const [acidVal, setAcidVal] = useState(false);
  const [baseVal, setBaseVal] = useState(false);
  const [rotorVal, setRotorVal] = useState(0);
  const [aeratorVal, setAeratorVal] = useState(0);

  return (
    <>
      <div className="grid">
        <header>
          <div className="title">Bioversee</div>
          <div className="menu">
            <Menu></Menu>
          </div>
        </header>
        <div className="container">
          <aside>
            <div className="switchBox">
              <Switch
                name="switchWarmWaterPump"
                setVal={setWarmWVal}
                val={warmWVal}
                label="Warm water pump"
                url="/api/v1/actuator/getswitchesactuators"
                updateUrl="/api/v1/actuator/postswitchactuator"
              />
              <Switch
                name="switchColdWaterPump"
                setVal={setColdWVal}
                val={coldWVal}
                label="Cold water pump"
                url="/api/v1/actuator/getswitchesactuators"
                updateUrl="/api/v1/actuator/postswitchactuator"
              />
              <Switch
                name="switchAcidPump"
                setVal={setAcidVal}
                val={acidVal}
                label="Acid pump"
                url="/api/v1/actuator/getswitchesactuators"
                updateUrl="/api/v1/actuator/postswitchactuator"
              />
              <Switch
                name="switchBasePump"
                setVal={setBaseVal}
                val={baseVal}
                label="Base pump"
                url="/api/v1/actuator/getswitchesactuators"
                updateUrl="/api/v1/actuator/postswitchactuator"
              />
            </div>
            <div className="sliderBox">
              <Slider
                name="rotor"
                setVal={setRotorVal}
                val={rotorVal}
                label="Rotor"
                url="/api/v1/actuator/getslideractuators"
                updateUrl="/api/v1/actuator/postslideractuator"
              />
              <Slider
                name="aerator"
                setVal={setAeratorVal}
                val={aeratorVal}
                label="Aerator"
                url="/api/v1/actuator/getslideractuators"
                updateUrl="/api/v1/actuator/postslideractuator"
              />
            </div>
          </aside>
          <main className="reactorBox" ref={canvasRef}>
            <Canvas cards={cards} rotorVal={rotorVal} />
          </main>
          <aside>
            <div className="chartBox">
              <Chart
                name="temperature"
                label="Temperature value"
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
        <footer>
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
            >
              About me
            </a>
            <br></br>
            <a
              href="https://github.com/MelcherMate"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Dashboard;
