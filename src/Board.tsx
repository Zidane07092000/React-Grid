import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import "./Board.css";

const BOARD_SIZE = 10;

const createBoard = () => {
  let counter = 1;
  const board = [];
  for (let row = 0; row < BOARD_SIZE; row++) {
    const currentRow = [];
    for (let col = 0; col < BOARD_SIZE; col++) {
      currentRow.push(counter++);
    }
    board.push(currentRow);
  }
  return board;
};

export default function Board() {
  const [board, setBoard] = useState(createBoard());

  const handleClick = (x: number, y: number, val: number) => {
    console.log("Clicked");
    console.log(x, y, val);
  };

  return (
    <div className="board">
      {board.map((row, rowIdx) => (
        <div key={rowIdx} className="row">
          {row.map((cellValue, cellIdx) => (
            <div
              onClick={() => handleClick(cellIdx, rowIdx, cellValue)}
              key={cellIdx}
              className="cell"
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}
