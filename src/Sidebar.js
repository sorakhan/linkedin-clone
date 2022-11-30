import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import SquareIcon from "@mui/icons-material/Square";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

function Sidebar({ profilePic }) {
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className="sidebar__item">
      <div className="sidebar__icon">#</div>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          alt="sidebar background"
          className="sidebar__image"
        />
        <div className="sidebar__header">
          <Avatar
            className="sidebar__avatar"
            src={user.profilePic}
            alt="profile picture"
            sx={{ width: 70, height: 70 }}
          >
            {/* Shows name's initial if no images */}
            {user.displayName[0].toUpperCase()}
          </Avatar>
          <h2>{user.displayName}</h2>
          <p className="sidebar__position subtitle">
            Full Stack Developer and UI/UX Designer for Web &amp; Mobile
          </p>
        </div>

        <div className="sidebar__stats">
          <p className="sidebar__stat">
            Who's viewed your profile <span className="right">80</span>
          </p>
          <p className="sidebar__stat">
            Impressions of your post <span className="right">230</span>
          </p>
        </div>

        {/* <div className="sidebar__plan">
          <p className="subtitle">Achieve your goals faster</p>
          <div className="icon-link">
            <SquareIcon />
            <a href="http://google.com">Upgrade my plan</a>
          </div>
        </div> */}

        <div className="sidebar__bookmarks">
          <div className="icon-link">
            <BookmarkIcon />
            <p>My items</p>
          </div>
        </div>
      </div>

      <div className="sidebar__bottom">
        <div className="sidebar__recent">
          <h3>Recent</h3>
          {recentItem("computerscience")}
          {recentItem("programming")}
          {recentItem("softwareengineering")}
          {recentItem("design")}
          {recentItem("uiux")}
        </div>

        <div className="sidebar__groups">
          <h3 className="blue">Groups</h3>
          {recentItem("Premium Career Group")}
          {recentItem("TED: Ideas Worth Spreading")}
          {recentItem("Tech Crunch")}
        </div>

        <div className="sidebar__discover">
          <h2>Discover more</h2>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
