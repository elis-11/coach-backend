import React from "react";
import "./App.scss";
import Router from "./Router";
import axios from "axios";

axios.defaults.withCredentials = true;

const App = () => {
  return (
    <div className="App">
      <Router />
    </div>
  );
};

export default App;
