import "./App.css";
import React, { Component, useEffect } from "react";
import { useState } from "react";
import HookState from "./Hooks";
import HookEffect, { userData, UserDataContext } from "./HookEffect";
import Battlefield from "./Battlefield/Battlefield";
import ResetBatton from "./Battlefield/ResetBatton";
import HeaderWithCounter from "./Battlefield/HeaderWithCounter";
import { useGameState } from "./state/useGameState";
//------------------------------------------------------
const team = {
  name: "Kol",
  derector: "Vitali",
};
//------------------------------------------------------
const Footer = (p) => {
  return (
    <h1>
      Football {p.value} {team.derector}{" "}
    </h1>
  );
};

//------------------------------------------------------
class Footerst extends Component {
  render() {
    return <div>{this.props.der}</div>;
  }
}
//------------------------------------------------------
function Count2() {
  let [count2, setcount2] = useState(0);

  function hendelCount2() {
    setcount2(count2 + 1);
  }
  function hendelCount1() {
    setcount2(count2 - 1);
  }
  function hendelCount0() {
    setcount2((count2 = 0));
  }
  useEffect(() => {
    console.log("update");
  });
  return (
    <>
      <h2>{count2}</h2>
      <button onClick={hendelCount2}>+ </button>
      <button onClick={hendelCount0}>reset </button>
      <button onClick={hendelCount1}>- </button>
    </>
  );
}
//------------------------------------------------------
function App() {
  const { turn, reset, matrix, fire, won } = useGameState();
  if (won) {
    alert("YOU  WIN!!!MOSCOW DOWN!!!");
  }
  return (
    <div className="App">
      {/* <Footer value={team.name} />
      <Footerst der={team.derector} />
      <Footer />
      <Count2 />
      <HookEffect />
      <UserDataContext.Provider value={userData}>
        <HookState />
      </UserDataContext.Provider> */}
      <HeaderWithCounter turn={turn} />
      <Battlefield matrix={matrix} fire={fire} />
      <ResetBatton reset={reset} />
      {/* <ShipLength /> */}
    </div>
  );
}

export default App;
