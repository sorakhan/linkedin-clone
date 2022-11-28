import React from "react";
import "./Navbar.css";
import NavbarOption from "./NavbarOption";

import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Navbar({profilePic}) {
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
        <NavbarOption
          avatar={profilePic}
          title="Me"
        />
      </div>
    </div>
  );
}

export default Navbar;
