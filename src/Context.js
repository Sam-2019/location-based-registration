import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";
import Data from "./contextData";

export const Context = createContext();

export const useData = () => {
  return useContext(Context);
};

export const ContextProvider = ({ children }) => {
  const appData = Data();
  return <Context.Provider value={appData}>{children}</Context.Provider>;
};

export default Context;

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};
