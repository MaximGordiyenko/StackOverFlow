import React from "react";
import Main from "./components/Main";
import Header from "./components/Header";
// import OptionProvider from "./components/OptinalContext";

function App() {
  return (
    <div className={`wrapper`}>
      <Header/>
      {/*<OptionProvider>*/}
        <Main/>
      {/*</OptionProvider>*/}
    </div>
  );
}

export default (App);
