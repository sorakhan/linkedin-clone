import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Feed.css";
import PhotoIcon from "@mui/icons-material/Photo";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ArticleIcon from "@mui/icons-material/Article";
import Post from "./Post";
import FeedOption from "./FeedOption";
import { app } from "./firebaseConfig";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

function Feed({ profilePic }) {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([<Post />]);

  useEffect(() => {
    const postsCollection = collection(getFirestore(app), "posts");
    async function fetchData() {
      // We can set posts this way, but you won't see realtime updates
      // const snapshot = await getDocs(postsCollection);
      // setPosts(
      //   snapshot.docs.map((doc) => ({
      //     id: doc.id,
      //     data: doc.data(),
      //   }))
      // );

      // Use snapshot to get realtime data
      const q = query(postsCollection, orderBy("timestamp", "desc"));
      onSnapshot(q, (snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    }

    fetchData();
  }, []);

  const createPost = async (e) => {
    e.preventDefault();
    try {
      const postsCollection = collection(getFirestore(app), "posts");
      const docRef = await addDoc(postsCollection, {
        author: "Sora Khan",
        message: input,
        photoUrl: "",
        timestamp: serverTimestamp(),
      });
      setInput("");
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <form onSubmit={createPost}>
          <Avatar
            src={profilePic}
            alt="profile picture"
            sx={{ width: 50, height: 50 }}
          />
          <input
            type="text"
            placeholder="Start a post"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>

        <div className="feed__options">
          <FeedOption Icon={PhotoIcon} color="#0099ff" title="Photo" />
          <FeedOption Icon={SmartDisplayIcon} color="#63961a" title="Video" />
          <FeedOption Icon={EventNoteIcon} color="#bc900c" title="Event" />
          <FeedOption
            Icon={ArticleIcon}
            color="#d8700e"
            title="Write article"
          />
        </div>
      </div>

      <div className="feed__post">
        {posts.map(
          ({ id, data }) =>
            id && ( // no longer have errors by adding this line.. basically ensures everything is loaded first
              <Post
                key={id}
                name={data?.author}
                message={data?.message}
                photoUrl={data?.photoUrl}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Feed;
