import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Paget } from "./components";
import { Pageh } from "./components";
import {Team } from "./components"
import { ThemeProvider } from "./providers/ThemeProvider";
import { Face } from "./components";
const App = () => {
  return (
    <>
      <Team />
    </>
  );
};
export default App;
