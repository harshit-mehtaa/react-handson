import React from "react";

function Square(props) {
  return (
    <button className={props.className} onClick={props.onClick} disabled={!props.disabled}>
      {props.value}
    </button>
  );
}

export default Square;
