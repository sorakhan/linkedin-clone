import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./NavbarOption.css";

function NavbarOption({ Icon, title, onClick }) {
  const user = useSelector(selectUser);
  // Icon is capital because we are passing in a component
  return (
    <div className="navbarOption" onClick={onClick}>
      {Icon && <Icon />}

      {!Icon && (
        <Avatar alt="profile picture" sx={{ width: 25, height: 25 }}>
          {/* Shows name's initial if no images */}
          {user?.displayName[0].toUpperCase()}
        </Avatar>
      )}
      <p className="navbarOption__title">{title}</p>
    </div>
  );
}

export default NavbarOption;
