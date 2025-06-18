// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-modern-estate-959b2.firebaseapp.com",
  projectId: "mern-modern-estate-959b2",
  storageBucket: "mern-modern-estate-959b2.firebasestorage.app",
  messagingSenderId: "354902962468",
  appId: "1:354902962468:web:540a0e15f1f1aeed3cc3b1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
