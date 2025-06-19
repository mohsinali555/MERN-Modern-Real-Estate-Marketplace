// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dermlocksol.firebaseapp.com",
  projectId: "dermlocksol",
  storageBucket: "dermlocksol.appspot.com",
  messagingSenderId: "1049324715708",
  appId: "1:1049324715708:web:0c56b0386ab9bf074d5ab9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
