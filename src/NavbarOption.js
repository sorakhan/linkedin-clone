import { Avatar } from "@mui/material";
import React from "react";
import "./NavbarOption.css";

function NavbarOption({ avatar, Icon, title }) {
  // Icon is capital because we are passing in a component
  return (
    <div className="navbarOption">
      {Icon && <Icon />}
      {avatar && (
        <Avatar
          src={avatar}
          alt="profile picture"
          sx={{ width: 25, height: 25 }}
        />
      )}
      <p className="navbarOption__title">{title}</p>
    </div>
  );
}

export default NavbarOption;
