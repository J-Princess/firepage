// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY2ez0sDkoi-3VjuLN98e1EZRsHHX2RqM",
  authDomain: "altschool-exam-project-a516d.firebaseapp.com",
  projectId: "altschool-exam-project-a516d",
  storageBucket: "altschool-exam-project-a516d.appspot.com",
  messagingSenderId: "989051653363",
  appId: "1:989051653363:web:2e703da25c794645debb86",
  measurementId: "G-CKSZZLEYL3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// set up Provider
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth, signInWithRedirect, getRedirectResult };
