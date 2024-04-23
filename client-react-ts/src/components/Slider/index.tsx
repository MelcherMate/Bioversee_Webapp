import "./Slider.css";

function Slider(props) {
  return (
    <>
      <div className="slider">
        <input
          type="range"
          min="0"
          max="100"
          value="0"
          className="slider"
          id={props.name}
        />
        <span>{props.label}</span>
      </div>
    </>
  );
}

Slider.displayName = "Slider";
export default Slider;
