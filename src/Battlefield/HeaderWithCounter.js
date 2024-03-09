import React from "react";

export default function HeaderWithCounter(props) {
  return (
    <div>
      <h1>Потопи Москву!</h1>
      <h2>{props.turn}</h2>
    </div>
  );
}
