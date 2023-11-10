// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "filmfetch-46816.firebaseapp.com",
  projectId: "filmfetch-46816",
  storageBucket: "filmfetch-46816.appspot.com",
  messagingSenderId: "682376710468",
  appId: "1:682376710468:web:848522315393cecc8c6f11",
  measurementId: "G-DBB8WEPX85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
