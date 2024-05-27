import "./Bioreactor.css";

function BioreactorCard(props, key) {
  return (
    <>
      <div
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
        <div className="wrapper">
          {/* <!--   TEMPERATURE CONTROL WATER SYSTEM --> */}
          <div className="cooling_water_supply_pipe"></div>
          <div className="cooling_water_discharge_pipe"></div>
          <div className="thermal_jacket"></div>
          <div className="thermal_jacket_lower_cap"></div>
          <div className="cooling_water_supply_pipe-text">
            Cooling water supply
          </div>
          <div className="cooling_water_discharge_pipe-text">
            Cooling water discharge
          </div>
          {/* <!--   REACTOR BODY --> */}
          <div className="reaction_chamber"></div>
          {/* <!--   WATER WAVE --> */}
          <div className="reaction_medium_waves">
            <svg
              className="wave"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="100%"
              height="100%"
              viewBox="0 0 1600 900"
            >
              <defs>
                <linearGradient id="bg" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#7b9fe2" }}></stop>
                  <stop
                    offset="100%"
                    style={{ stopColor: "rgba(38, 89, 190, 0.06)" }}
                  ></stop>
                </linearGradient>
                <path
                  id="wave"
                  fill="url(#bg)"
                  d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
  s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
                />
              </defs>
              <g>
                <use xlinkHref="#wave" opacity=".3">
                  <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="translate"
                    dur="8s"
                    calcMode="spline"
                    values="270 230; -334 180; 270 230"
                    keyTimes="0; .5; 1"
                    keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                    repeatCount="indefinite"
                  />
                </use>
                <use xlinkHref="#wave" opacity=".6">
                  <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="translate"
                    dur="6s"
                    calcMode="spline"
                    values="-270 230;243 220;-270 230"
                    keyTimes="0; .6; 1"
                    keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                    repeatCount="indefinite"
                  />
                </use>
                <use xlinkHref="#wave" opacity=".9">
                  <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="translate"
                    dur="4s"
                    calcMode="spline"
                    values="0 230;-140 200;0 230"
                    keyTimes="0; .4; 1"
                    keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                    repeatCount="indefinite"
                  />
                </use>
              </g>
            </svg>
          </div>
          <div className="reaction_medium"></div>
          <div className="reaction_medium_lower_cap"></div>
          {/* <!--   SENSORS --> */}
          <div className="sensor sensor1">
            <div className="sensor_base"></div>
            <div className="sensor_stem"></div>
            <div className="sensor_head"></div>
          </div>
          <div className="sensor sensor2">
            <div className="sensor_base"></div>
            <div className="sensor_stem"></div>
            <div className="sensor_head"></div>
          </div>
          <div className="sensor-text">Temperature and pH sensor</div>
          {/* <!--   AGIGATOR --> */}
          <div className="agitator">
            <div className="agitator_stem"></div>
            <div className="agitator_blade0 agitator_blade1"></div>
            <div className="agitator_stem2"></div>
            <div className="agitator_blade90 agitator_blade2"></div>
          </div>
          <div className="agitator-text">Agitator</div>
          {/* <!--   BASE-ACID SUPPLY PIPE --> */}
          <div className="base_acid_supply_pipe_h"></div>
          <div className="base_acid_supply_pipe_v"></div>
          <div className="base_acid_supply_pipe-text">Base/Acid supply</div>
          {/* <!--   AERATOR SUPPLY PIPE --> */}
          <div className="aerator_submerged"></div>
          <div className="aerator_supply_pipe_h"></div>
          <div className="aerator_supply_pipe_v"></div>
          <div className="aerator_supply_pipe-text">Air supply</div>
          {/* <!--   BUBBLES --> */}
          <div className="bubble_frame">
            <div className="bubble-1 bubble-container anim bubble-animation-x">
              <div className="bubble bubble-animation-y"></div>
            </div>
            <div className="bubble-2 bubble-container anim bubble-animation-x">
              <div className="bubble bubble-animation-y"></div>
            </div>
            <div className="bubble-3 bubble-container anim bubble-animation-x">
              <div className="bubble bubble-animation-y"></div>
            </div>
            <div className="bubble-4 bubble-container anim bubble-animation-x">
              <div className="bubble bubble-animation-y"></div>
            </div>
            <div className="bubble-5 bubble-container anim bubble-animation-x">
              <div className="bubble bubble-animation-y"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

BioreactorCard.displayName = "BioreactorCard";
export default BioreactorCard;
