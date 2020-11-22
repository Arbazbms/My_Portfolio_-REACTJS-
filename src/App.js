import React from "react";
import "./App.css";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import { Planets } from "react-preloaders";
import PageProgress from "react-page-progress";

function App() {
     return (
          <div
               className="App"
               onContextMenu={(e) => {
                    e.preventDefault();
                    return false;
               }}
          >
               <PageProgress className="progress" height={5} />

               <BrowserRouter>
                    <Main />
                    <Planets time={1800} />
               </BrowserRouter>
          </div>
     );
}

export default App;
