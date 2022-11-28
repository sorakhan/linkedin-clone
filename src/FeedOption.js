import React from "react";
import "./FeedOption.css";

function FeedOption({ Icon, color, title }) {
  return (
    <div className="feedOption">
      <div className="feedOption__icon" style={{ color: color }}>
        <Icon />
      </div>
      <p>{title}</p>
    </div>
  );
}

export default FeedOption;
