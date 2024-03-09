import React from "react";
import { CheckedShip, CheckedWater, Ship, Water } from "../state/cellState";

const cellStateMap = {
  [Water]: "",
  [Ship]: "",
  [CheckedWater]: "🌊",
  [CheckedShip]: "🔥",
};

const Cell = (p) => {
  return (
    <button className={"cell"} onClick={() => p.handleClick(p.x, p.y)}>
      {cellStateMap[p.value]}
    </button>
  );
};

export default function Battlefield(p) {
  return (
    <div className="mainDiv">
      {p.matrix.map((line, lineNamber) => (
        <div key={lineNamber}>
          <div className={"line"}>
            {line.map((v, i) => (
              <Cell
                key={`${lineNamber} ${i}`}
                value={v}
                y={lineNamber}
                x={i}
                handleClick={p.fire}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
