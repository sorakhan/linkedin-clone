import { getAuth } from "firebase/auth";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { selectUser, login, logout } from "./features/userSlice";
import Feed from "./Feed";
import Login from "./Login";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SideInfo from "./SideInfo";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  // const profilePic =
  //   "https://www.sorakhan.com/static/4836a448a98a0d70358f2839834bd95e/907bc/sora.webp";

  useEffect(() => {
    const auth = getAuth();

    // Checks the auth state so that user is logged into app if already logged in
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(
          login({
            email: userAuth.email,
            userId: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__container">
          <Navbar />
          <div className="body__container">
            <div className="app__body">
              <div className="app__sidebar">
                <Sidebar />
              </div>
              <div className="app__feed">
                <Feed />
              </div>
              <div className="app__side">
                <SideInfo />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
