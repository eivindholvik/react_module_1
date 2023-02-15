import "./PrimaryButton.css";

export default function PrimaryButton(props) {
  return (
    <button
      className="btn"
      type={"button" || props.btnType}
      onClick={props.handleClick}
    >
      {props.children}
    </button>
  );
}
