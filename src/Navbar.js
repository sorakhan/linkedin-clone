import React from "react";
import "./Navbar.css";
import NavbarOption from "./NavbarOption";

import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { getAuth, signOut } from "firebase/auth";

function Navbar() {
  const dispatch = useDispatch();
  const signOutOfApp = () => {
    // Sign out of firebase Auth
    signOut(getAuth()).then(() => {
      // Changes state to logged out. Clears user data in Redux Data Layer
      dispatch(logout());
    });
  };

  return (
    <div className="navbar">
      <div className="navbar__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="Linkedin Icon"
        />
        <div className="navbar__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="navbar__right">
        <NavbarOption Icon={HomeIcon} title="Home" />
        <NavbarOption Icon={SupervisorAccountIcon} title="My Network" />
        <NavbarOption Icon={BusinessCenterIcon} title="Jobs" />
        <NavbarOption Icon={TextsmsIcon} title="Messaging" />
        <NavbarOption Icon={NotificationsIcon} title="Notifications" />
        <NavbarOption title="Me" onClick={signOutOfApp} />
      </div>
    </div>
  );
}

export default Navbar;
