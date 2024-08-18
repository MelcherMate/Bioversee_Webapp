import { useEffect, useState } from "react";
import Canvas2 from "../../components/Canvas2";
import Chart from "../../components/Chart";
import Slider from "../../components/Slider";
import Switch from "../../components/Switch";
import useDimensions from "../../utils/hooks/useDimensions";
import "./WaterPurifier.css";
Canvas2;
useDimensions;

interface Card {
  id: string;
  coordinates: { x: number; y: number };
  text: string;
}

function WaterPurifier() {
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

  const [masterSwitch, setMasterSwitch] = useState(false);
  const [cleanPump, setCleanPump] = useState(false);
  const [rotorVal, setRotorVal] = useState(0);

  return (
    <>
      <div className="container">
        <aside id="actuatorSide">
          <div className="switchBox">
            <h4 className="boxTitle">Swicth settings</h4>
            <Switch
              name="switchMaster"
              setVal={setMasterSwitch}
              val={masterSwitch}
              label="ON / OFF master switch"
              url="/api/v1/actuator/getswitchesactuators"
              updateUrl="/api/v1/actuator/postswitchactuator"
            />
            <Switch
              name="cleanPump"
              setVal={setCleanPump}
              val={cleanPump}
              label="Clean tank emptying pump"
              url="/api/v1/actuator/getswitchesactuators"
              updateUrl="/api/v1/actuator/postswitchactuator"
            />
          </div>
          <div className="sliderBox">
            <h4 className="boxTitle">Agitator settings</h4>
            <Slider
              name="agitator"
              setVal={setRotorVal}
              val={rotorVal}
              label="Agitator"
              url="/api/v1/actuator/getslideractuators"
              updateUrl="/api/v1/actuator/postslideractuator"
            />
          </div>
        </aside>
        <main id="waterpurifierBox" ref={canvasRef}>
          <Canvas2 cards={cards} rotorVal={rotorVal}></Canvas2>
        </main>
        <aside id="sensorSide">
          <div className="chartBox">
            <Chart
              name="pufferwtlvl"
              label="Puffer Water Level"
              url="/api/v1/sensor/getsensordata"
            />
          </div>
        </aside>
      </div>
    </>
  );
}

export default WaterPurifier;
