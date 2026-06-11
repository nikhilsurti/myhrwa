// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdGc9bESxkHQWyjVq9PpdxbuswIywJv5w",
  authDomain: "resumebuilder-23659.firebaseapp.com",
  projectId: "resumebuilder-23659",
  storageBucket: "resumebuilder-23659.firebasestorage.app",
  messagingSenderId: "576620428842",
  appId: "1:576620428842:web:8a5039aed75e040ef10d53",
  measurementId: "G-F3HNHHCCMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();