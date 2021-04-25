import React, { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";

const Data = () => {
  const [auth, setAuth] = useLocalStorage("sign-up", "");

  console.log(auth);

  async function logoutUser() {
    localStorage.removeItem("sign-up");
  }

  async function isLoggedIn() {
    const loginToken = localStorage.getItem("sign-up");

    if (!loginToken) return;

    return setAuth((prevAuth) => !prevAuth);
  }

  async function verify() {
    return;
  }

  return {
    auth
  };
};

export default Data;
