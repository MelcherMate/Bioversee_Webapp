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
          border: "1px solid red",
          cursor: "move",
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
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
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
