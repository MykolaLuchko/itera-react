import { random } from "./random";
import { createArray } from "./array";

export const createWarShip = (shipLength, maxSize) => {
  const position = random(0, 2) % 2 === 0 ? "horizontal" : "vertikal";
  return position === "horizontal"
    ? createHorizontalWarShip(shipLength, maxSize)
    : createVerticalWarShip(shipLength, maxSize);
};

const createHorizontalWarShip = (length, maxSize) => {
  const maxX = maxSize - length - 1;
  const maxY = maxSize - 1;

  const headX = random(0, maxX);
  const headY = random(0, maxY);

  return createArray(length, (i) => {
    return { y: headY, x: headX + i };
  });
};

const createVerticalWarShip = (length, maxSize) => {
  const maxX = maxSize - 1;
  const maxY = maxSize - length - 1;

  const headX = random(0, maxX);
  const headY = random(0, maxY);

  return createArray(length, (i) => {
    return { y: headY + i, x: headX };
  });
};
