import "./Toggle.css";

function Toggle(props) {
  return (
    <>
      <div className="toggle">
        <input type="checkbox" id={props.name} />
        <label for={props.name}></label>
        <span>{props.label}</span>
      </div>
    </>
  );
}

Toggle.displayName = "Toggle";
export default Toggle;
