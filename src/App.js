import "./App.css";
import React from "react";
import { Actually, Simple, Team,Paget, ThemeProvider } from "./components";

const App = () => {
  return (
    <ThemeProvider>
      <Paget />
    </ThemeProvider>
  );
};
export default App;
