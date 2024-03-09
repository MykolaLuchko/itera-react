import { useState } from "react";
import { createArray } from "../util/array";
import { createWarShip } from "../util/battlefield";
import { CheckedShip, CheckedWater, Ship, Water } from "./cellState";

const matrixLength = 10;
const shipLength = 5;

const createMatrixBattlefield = () =>
  createArray(matrixLength, () => createArray(matrixLength, () => 0));

const createBattleField = () => {
  const matrixBatteField = createMatrixBattlefield();
  const newWarShip = createWarShip(shipLength, matrixLength);

  newWarShip.forEach(({ x, y }) => {
    matrixBatteField[y][x] = Ship;
  });
  return matrixBatteField;
};

export const useGameState = () => {
  const [state, setState] = useState({
    matrix: createBattleField(),
    turn: 0,
    won: false,
  });

  const reset = () => {
    setState({
      matrix: createBattleField(),
      turn: 0,
      won: false,
    });
  };

  const fire = (x, y) => {
    const cell = state.matrix[y][x];
    if (cell === CheckedWater || cell === CheckedShip) {
      return;
    }
    const newState = cell === Water ? CheckedWater : CheckedShip;
    state.matrix[y][x] = newState;
    const won = state.matrix.every((line) => line.every((x) => x !== Ship));

    setState({ ...state, turn: state.turn + 1, won });
    console.log("Clik", "X:", x, "", "Y:", y);
  };

  const { matrix, turn, won } = state;
  return { turn, reset, matrix, fire, won };
};
