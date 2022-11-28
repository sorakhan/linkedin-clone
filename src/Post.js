import React from "react";
import "./Post.css";
import FeedOption from "./FeedOption";
import { Avatar } from "@mui/material";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import RepeatIcon from "@mui/icons-material/Repeat";
import SendIcon from "@mui/icons-material/Send";

function Post({ name, profilePic, message }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          src={profilePic}
          alt="profile picture"
          sx={{ width: 50, height: 50 }}
        />
        <div className="post__userInfo">
          <h2>{name}</h2>
          <p className="subtitle">Recruitment Consultant</p>
          <p className="feed__postSubtitle subtitle">
            11m • <PublicOutlinedIcon className="smallIcon" />
          </p>
        </div>
      </div>
      <div className="post__content">
        <p>{message}</p>
      </div>
      <div className="post__icons">
        <FeedOption Icon={ThumbUpAltOutlinedIcon} color="grey" title="Like" />
        <FeedOption
          Icon={InsertCommentOutlinedIcon}
          color="grey"
          title="Comment"
        />
        <FeedOption Icon={RepeatIcon} color="grey" title="Repost" />
        <FeedOption Icon={SendIcon} color="grey" title="Send" />
      </div>
    </div>
  );
}

export default Post;
