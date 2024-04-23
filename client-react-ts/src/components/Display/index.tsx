import "./Display.css";

function Display(props) {
  return (
    <>
      <div className="display" id={props.name}>
        <span>
          {props.label} {props.value}
        </span>
      </div>
    </>
  );
}

Display.displayName = "Display";
export default Display;
