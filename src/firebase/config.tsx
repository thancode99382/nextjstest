// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, FacebookAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK7b_IHzBHtwh-uWbKrUKuqTMpLsQcRCM",
  authDomain: "nextjsnha.firebaseapp.com",
  projectId: "nextjsnha",
  storageBucket: "nextjsnha.appspot.com",
  messagingSenderId: "617304791842",
  appId: "1:617304791842:web:35441086b5bdc7ec57e37b",
  measurementId: "G-370CVH1VZ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics
// const analytics = getAnalytics(app);

// Set up Firebase Auth with Facebook provider
const auth = getAuth(app);
const provider = new FacebookAuthProvider();

export { auth, provider, signInWithPopup };
