import React from "react";
import Routes from "./Routes";
import { ContextProvider } from "./Context/Context";
import "./styles.css";

export default function App() {
  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  );
}
