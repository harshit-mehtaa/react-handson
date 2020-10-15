import React from "react";

function Square(props) {
  return (
    <div className={props.className} onClick={props.onClick}>
      {props.value}
    </div>
  );
}

export default Square;
