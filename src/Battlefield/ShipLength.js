import React from "react";

export default function ShipLength() {
  return (
    <div>
      <label for="tentacles">Number length of ship (1-10):</label>

      <input type="number" id="tentacles" name="tentacles" min="1" max="10" />
    </div>
  );
}
