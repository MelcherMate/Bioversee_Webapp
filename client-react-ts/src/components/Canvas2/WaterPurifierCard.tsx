import { CogOutline } from "react-ionicons";
import "./WaterPurifier.css";

function WaterPurifierCard(props, key) {
  // console.log(props.pump1Val);
  // console.log(props.pump2Val);
  // console.log(props.pump3Val);
  // console.log(props.sensorVal);

  return (
    <>
      <body
        key={key}
        style={{
          position: "absolute",
          width: 690,
          height: 670,
          transform: `translate(${props.translateX}px, ${props.translateY}px) scale(${props.scale})`,
          // border: "1px solid red",
          // cursor: "move",
          userSelect: "none",
        }}
        onMouseDown={(event) => {
          props.onMouseDown(event);
        }}
      >
        <div id="wrapper">
          <div className="tank" id="pufferTank">
            <p>PUFFER</p>
            <div className="sensor wt_lvl">
              <div className="sensor_wt_lvl_base"></div>
              <div className="sensor_wt_lvl_head1"></div>
              <div className="sensor_wt_lvl_head2"></div>
              <div className="signal signal1"></div>
              <div className="signal signal2"></div>
              <div className="signal signal3"></div>
            </div>
          </div>
          <div id="tubePufferToActive">
            <div id="tubePufferToActive1"></div>
            <div id="pumpWrapper">
              <div className="pumpBody">
                <CogOutline
                  color={"#209CF0"}
                  rotate={props.pump1Val}
                  title={"PumpGear"}
                  height="60px"
                  width="60px"
                />
              </div>
              <div className="pumpBase"></div>
            </div>
            <div id="tubePufferToActive2"></div>
          </div>
          <div className="tank" id="activeTank">
            <p>ACTIVE</p>
            <div className="sensor wt_lvl">
              <div className="sensor_wt_lvl_base"></div>
              <div className="sensor_wt_lvl_head1"></div>
              <div className="sensor_wt_lvl_head2"></div>
              <div className="signal signal1"></div>
              <div className="signal signal2"></div>
              <div className="signal signal3"></div>
            </div>
          </div>
          <div className="pipe">
            <div id="tubeAdditiveToActive1"></div>
            <div id="pumpWrapper2">
              <div className="pumpBody">
                <CogOutline
                  color={"#209CF0"}
                  rotate={props.pump2Val}
                  title={"PumpGear"}
                  height="60px"
                  width="60px"
                />
              </div>
              <div className="pumpBase"></div>
            </div>
            <div id="tubeAdditiveToActive2"></div>
          </div>
          <div className="tank" id="additiveTank">
            <p>ADDITIVE</p>
            <div className="sensor wt_lvl">
              <div className="sensor_wt_lvl_base"></div>
              <div className="sensor_wt_lvl_head1"></div>
              <div className="sensor_wt_lvl_head2"></div>
            </div>
          </div>
          <div className="pipe">
            <div id="tubeActiveToClean1"></div>
            <div id="pumpWrapper3">
              <div className="pumpBody">
                <CogOutline
                  color={"#209CF0"}
                  rotate={props.pump3Val}
                  title={"PumpGear"}
                  height="60px"
                  width="60px"
                />
              </div>
              <div className="pumpBase"></div>
            </div>
            <div id="tubeActiveToClean2"></div>
            <div id="tubeActiveToClean3"></div>
            <div id="tubeActiveToClean4"></div>
          </div>
          <div className="tank" id="cleanTank">
            <p>CLEAN</p>
            <div className="sensor wt_lvl">
              <div className="sensor_wt_lvl_base"></div>
              <div className="sensor_wt_lvl_head1"></div>
              <div className="sensor_wt_lvl_head2"></div>
              <div className="signal signal1"></div>
              <div className="signal signal2"></div>
              <div className="signal signal3"></div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default WaterPurifierCard;
