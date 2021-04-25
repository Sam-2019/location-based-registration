import React from "react";
import Routes from "./Routes";
import { ContextProvider } from "./Context";

export default function App() {
  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  );
}
