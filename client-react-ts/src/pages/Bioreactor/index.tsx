import { useEffect, useState } from "react";
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
            {/* <Chart
              name="inlethumidity"
              label="Inlet Humidity"
              url="/api/v1/sensor/getsensordata"
            /> */}
          </div>
        </aside>
      </div>
    </>
  );
}

export default Bioreactor;
