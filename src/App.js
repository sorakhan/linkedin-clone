import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { selectUser } from "./features/userSlice";
import Feed from "./Feed";
import Login from "./Login";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SideInfo from "./SideInfo";

function App() {
  const user = useSelector(selectUser);
  const profilePic =
    "https://www.sorakhan.com/static/4836a448a98a0d70358f2839834bd95e/907bc/sora.webp";
  return (
    <div className="app">
      <Navbar profilePic={profilePic} />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar profilePic={profilePic} />
          <Feed profilePic={profilePic} />
          <SideInfo />
        </div>
      )}
    </div>
  );
}

export default App;
