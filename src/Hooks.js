import { useContext, useState } from "react";
import React from "react";
import { UserDataContext } from "./HookEffect";

export default function HookState() {
  const [user, setUser] = useState({ name: "Olga", isAdmin: false });
  const { isAdmin } = user;
  const changeAdmin = () => {
    setUser({ ...user, isAdmin: true }); //!!!!!!!!!!!!!!!!!
  };

  const { email } = useContext(UserDataContext);
  return (
    <div>
      <h1>Hello user, you is {isAdmin ? "Super admin" : "standart user"}</h1>
      <button onClick={changeAdmin}>Clic me to change admin</button>
      {email}
    </div>
  );
}
