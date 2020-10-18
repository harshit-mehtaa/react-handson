// import React from "react";

function generateSudoku(sudoku) {
  solve(sudoku);
}

function find_empty_cell(sudoku) {
  for (const row of [...Array(9).keys()]) {
    for (const col of [...Array(9).keys()]) {
      if (sudoku[row][col] === 0) {
        return { row, col };
      }
    }
  }
  return null;
}

function exists_in_row(sudoku, row, number) {
  return sudoku[row].includes(number);
}

function exists_in_col(sudoku, col, number) {
  const temp = [];
  // return number in [row[col] for row in self.sudoku]
  for (const row of sudoku) {
    temp.push(row[col]);
  }

  return temp.includes(number);
}

function exists_in_mini_grid(sudoku, row, col, number) {
  const box_x = Math.floor(col / 3);
  const box_y = Math.floor(row / 3);

  for (const i of [...Array(box_y * 3 + 3).keys()].slice(
    box_y * 3
  ) /*range(box_y * 3, box_y * 3 + 3)*/) {
    for (const j of [...Array(box_x * 3 + 3).keys()].slice(
      box_x * 3
    ) /*range(box_x * 3, box_x * 3 + 3)*/) {
      if (sudoku[i][j] === number && (i, j) !== (row, col)) {
        return true;
      }
    }
  }
  return false;
}

function cell_is_safe(sudoku, row, col, number) {
  return (
    !exists_in_row(sudoku, row, number) &&
    !exists_in_col(sudoku, col, number) &&
    !exists_in_mini_grid(sudoku, row, col, number)
  );
}

function solve(sudoku) {
  const cell = find_empty_cell(sudoku);

  if (!cell) {
    return true;
  }
  const { row, col } = cell;

  for (const number in [...Array(10).keys()].slice(1)) {
    if (cell_is_safe(sudoku, row, col, number)) {
      sudoku[row][col] = number;

      if (solve(sudoku)) {
        return true;
      }
      sudoku[row][col] = 0;
    }
    return false;
  }
}

function SudokuSolver() {
  const sudoku = new Array(9).fill(0).map(() => new Array(9).fill(0));
  sudoku[0][0] = Math.floor(Math.random * 8) + 1;
  console.log(sudoku[0][0])
  generateSudoku(sudoku);

  console.log(sudoku);
  return sudoku;
}

export default SudokuSolver;
