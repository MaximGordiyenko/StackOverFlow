import React from "react";
import Main from "./components/Main";
import Header from "./components/Header";

require('dotenv').config();

function App() {
  return (
    <div className={`wrapper`}>
      <Header/>
      <Main/>
    </div>
  );
}

export default (App);
