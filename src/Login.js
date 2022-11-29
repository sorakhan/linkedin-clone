import React, { useState } from "react";
import "./Login.css";
import LinkedinLogo from "./assets/logo.png";
// import LinkedInLoginImage from "./assets/linkedin-image.svg";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

function Login() {
  const [isLoginForm, setLoginForm] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const auth = getAuth();

  const toggleForm = (e) => {
    e.preventDefault();
    setLoginForm(!isLoginForm);
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        // Push user data to redux data layer store
        dispatch(
          login({
            email: userAuth.user.email,
            userId: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        );
      })
      .catch((e) => {
        alert(`${e.message}`);
      });
  };

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        updateProfile(userAuth.user, { displayName: userName }).then(() => {
          // Push user data to redux data layer store
          dispatch(
            login({
              email: userAuth.user.email,
              userId: userAuth.user.uid,
              displayName: userAuth.user.displayName,
            })
          );
        });
      })
      .catch((e) => {
        alert(`${e.message}`);
      });
  };

  return (
    <div className="login">
      <div className="login__navbar">
        <img
          src={LinkedinLogo}
          alt="linkedin logo"
          className="linkedin__logo"
        />
      </div>
      <div className="login__form">
        <h1>{isLoginForm ? "Sign in" : "Sign up"}</h1>
        <p>
          {isLoginForm
            ? "Stay updated on your professional world"
            : "Make the most of your professional life"}
        </p>
        <form>
          {!isLoginForm && (
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          )}

          {isLoginForm ? (
            <input
              type="text"
              id="emailOrPhone"
              name="emailOrPhone"
              placeholder="Email or Phone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          ) : (
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          )}

          {isLoginForm ? (
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          ) : (
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password (6 or more characters)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          )}

          {isLoginForm && <a href="">Forgot password?</a>}
          <input
            type="submit"
            value={isLoginForm ? "Sign in" : "Agree & Join"}
            className="submit__button"
            onClick={isLoginForm ? signIn : signUp}
          />
        </form>
      </div>
      {isLoginForm ? (
        <p className="">
          New to LinkedIn?{" "}
          <a href="" onClick={toggleForm}>
            Join now
          </a>
        </p>
      ) : (
        <p className="">
          Already on LinkedIn?{" "}
          <a href="" onClick={toggleForm}>
            Sign in
          </a>
        </p>
      )}

      {/* New kind of navbar */}
      {/* <div className="login__navbar">
        <img src={LinkedinLogo} alt="linkedin logo" className="linkedin__logo"/>
        <a href="">Join now</a>
        
      </div>
      <div className="login__container">
        <div className="login__form">
          <form>
            <h1 className="form__title">
              Welcome to your professional community
            </h1>
            <input
              type="text"
              id="emailOrPhone"
              name="emailOrPhone"
              placeholder="Email or phone number"
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <a href="">Forgot password?</a>
            <input type="submit" value="Sign in" />
          </form>
        </div>
        <div className="login__image">
          <img src={LinkedInLoginImage} alt="login image" />
        </div>
      </div> */}
    </div>
  );
}

export default Login;
