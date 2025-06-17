// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-modern-estate.firebaseapp.com",
  projectId: "mern-modern-estate",
  storageBucket: "mern-modern-estate.firebasestorage.app",
  messagingSenderId: "453848663453",
  appId: "1:453848663453:web:b7a1af33994bd6c9e85b74",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
