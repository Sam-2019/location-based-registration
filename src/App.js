import React from "react";
import "bootstrap/dist/css/bootstrap.css";
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
