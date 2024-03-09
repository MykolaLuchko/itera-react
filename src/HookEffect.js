import { createContext, useEffect, useState } from "react";

export default function HookEffect() {
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
    console.log("Change", count2);
  });
  useEffect(() => {
    console.log("HendlCount");
  }, []);

  useEffect(() => {
    return () => {
      console.log("Remote");
    };
  }, []);

  return (
    <>
      <h2>{count2}</h2>
      <button onClick={hendelCount2}>+ </button>
      <button onClick={hendelCount0}>reset </button>
      <button onClick={hendelCount1}>- </button>
    </>
  );
}
//------------------------------------------createContext
export const userData = {
  tel: +30971111111,
  email: "gmail@.com.ua",
};

export const UserDataContext = createContext(userData);
