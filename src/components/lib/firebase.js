// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-37533.firebaseapp.com",
  projectId: "reactchat-37533",
  storageBucket: "reactchat-37533.appspot.com",
  messagingSenderId: "584755839397",
  appId: "1:584755839397:web:4e2535d98b4eda4670284c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage(app);