import React from "react";
import "./App.css";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import { Planets } from "react-preloaders";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main />
        <Planets time={1800} />
      </BrowserRouter>
    </div>
  );
}

export default App;
