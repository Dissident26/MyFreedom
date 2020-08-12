import React from 'react';

import FacebookButton from "./components/FacebookButton";
import TwitterButton from "./components/TwitterButton";
import IconBar from "./components/IconBar";
import CountAppMain from "./components/CountAppMain";
import NavBar from "./components/NavBar";

import "./main.css";  //только для отступа

function App() {
  return (
    <>

      <div className="btns">
        <FacebookButton />
        <TwitterButton />
      </div>
      <div className="icnbr">
        <IconBar/>
      </div>
      <div className="count">
        <CountAppMain/>
      </div>
      <div className="navbar">
        <NavBar items={['Home', 'Search', 'About', 'Contacts', 'Special']} initActive="Home"/>
      </div>
    </>
  )
}

export default App;
