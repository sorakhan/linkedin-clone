import React from "react";
import "./SideInfo.css";
import InfoIcon from "@mui/icons-material/Info";

function SideInfo() {
  const listItem = ({ title, daysAgo, readerAmout }) => (
    //  TODO: daysAgo should be a date or so
    <li className="sideInfo__listItem">
      <div className="sideInfo__title">{title}</div>
      <p className="sideInfo__info subtitle">
        {daysAgo} • {readerAmout} readers
      </p>
    </li>
  );
  return (
    <div className="sideInfo">
      <div className="sideInfo__news">
        <div className="sideInfo__header">
          <h2>LinkedIn News</h2>
          <InfoIcon />
        </div>
        <ul className="sideInfo__list">
          {listItem({
            title: "The 25 startups to watch",
            daysAgo: "Top news",
            readerAmout: "8,522",
          })}
          {listItem({
            title: "Aussie house prices fall again",
            daysAgo: "1d ago",
            readerAmout: "1,280",
          })}
          {listItem({
            title: "Deloitte to review Optus breach",
            daysAgo: "1d ago",
            readerAmout: "13,262",
          })}
          {listItem({
            title: "Quit before you get the next job?",
            daysAgo: "1d ago",
            readerAmout: "3,294",
          })}
        </ul>
      </div>

      <div className="sideInfo__ads"></div>

      <div className="sideInfo__extra"></div>
    </div>
  );
}

export default SideInfo;
