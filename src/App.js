import React from "react";
import "./App.css";
import Feed from "./Feed";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SideInfo from "./SideInfo";

function App() {
  const profilePic =
    "https://www.sorakhan.com/static/4836a448a98a0d70358f2839834bd95e/907bc/sora.webp";
  return (
    <div className="app">
      <Navbar profilePic={profilePic} />
      <div className="app__body">
        <Sidebar profilePic={profilePic} />
        <Feed profilePic={profilePic} />
        <SideInfo />
      </div>
    </div>
  );
}

export default App;
