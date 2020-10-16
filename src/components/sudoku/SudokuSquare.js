import React from "react";

function SudokuSquare(props) {
  return (
    <div className={props.className} onClick={props.onClick}>
      {props.value}
    </div>
  );
}

export default SudokuSquare;
