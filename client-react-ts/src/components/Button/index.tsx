import "./Button.css";

function Button(props) {
  return (
    <>
      <button id={props.name}>{props.label}</button>
    </>
  );
}

Button.displayName = "Button";
export default Button;
