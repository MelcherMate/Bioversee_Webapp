import "./WaterPurifier.css";

function WaterPurifierCard() {
  return (
    <>
      <body>
        <div id="wrapper">
          <div className="tank" id="pufferTank">
            <p>PUFFER</p>
          </div>
          <div id="tubePufferToActive1"></div>
          <div id="tubePufferToActive2"></div>
          <div className="tank" id="activeTank">
            <p>ACTIVE</p>
          </div>
          <div id="tubeAdditiveToActive1"></div>
          <div id="tubeAdditiveToActive2"></div>
          <div id="tubeAdditiveToActive3"></div>
          <div className="tank" id="additiveTank">
            <p>ADDITIVE</p>
          </div>
          <div id="tubeActiveToClean1"></div>
          <div id="tubeActiveToClean2"></div>
          <div className="tank" id="cleanTank">
            <p>CLEAN</p>
          </div>
        </div>
      </body>
    </>
  );
}

export default WaterPurifierCard;
