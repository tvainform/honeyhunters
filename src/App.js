import './App.css';
import {BrowserRouter} from "react-router-dom";
import Messages from "./components/Messages";
import Header from "./components/Header";
import React from "react";

function App() {
  return (
      <BrowserRouter>
          <div className={"container"}>
              <Header/>
          <Messages/>
          </div>
      </BrowserRouter>
  );
}

export default App;
