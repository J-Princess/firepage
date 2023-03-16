import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./style.css";

import {
  auth,
  signInWithRedirect,
  provider,
  getRedirectResult,
} from "../components/config/index";
const Home = () => {
  const signIn = (event) => {
    event.preventDefault();
    console.log("Signing out");
    signInWithRedirect(auth, provider);
    setTimeout(() => {
      nav("/users");
    }, 2000);
  };
  // Redirect
  // useEffect(() => {
  //   getRedirectResult(auth)
  //     .then((result) => {
  //       // This gives you a Google Access Token. You can use it to access Google APIs.
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;

  //       // The signed-in user info.
  //       const user = result.user;
  //     })
  //     .catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.customData.email;
  //       // The AuthCredential type that was used.
  //       const credential = GoogleAuthProvider.credentialFromError(error);
  //       // ...
  //     });
  // }, []);
  // useEffect(()=>{
  //   const nav = useNavigate();

  // }, [])
  const nav = useNavigate();
  return (
    <div className="home">
      <Helmet>
        <title>2nd Semester Exam Project</title>
        <meta name="description" content="Firebase React Hosting." />
        <meta
          name="keywords"
          content="React, Pagination, Altschool, Project, Firebase hosting, ErrorBoundary"
        />
      </Helmet>
      <div className="robots">
        <div className="android">
          <div className="head">
            <div className="eyes">
              <div className="left_eye"></div>
              <div className="right_eye"></div>
            </div>
          </div>
          <div className="upper_body">
            <div className="left_arm"></div>
            <div className="torso"></div>
            <div className="right_arm"></div>
          </div>
          <div className="lower_body">
            <div className="left_leg"></div>
            <div className="right_leg"></div>
          </div>
        </div>
      </div>
      <p>
        Hello there, I am Oyibo Ufuoma Princess and this is my Project developed
        and submitted <br></br>
        for the Altschool School of Engineering, Front-end track 2nd Semester
        Exams.<br></br> That is if you couldn't already tell from the logo
        above. Thank you
      </p>
      <button className="mutton" onClick={signIn}>
        Sign In for access to view Users
      </button>
    </div>
  );
};
export default Home;
