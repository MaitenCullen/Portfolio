
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiDsoPJtXR71bLf8ggwHh1yDLJFvyLhzg",
  authDomain: "portfolio-967fc.firebaseapp.com",
  projectId: "portfolio-967fc",
  storageBucket: "portfolio-967fc.appspot.com",
  messagingSenderId: "702694144907",
  appId: "1:702694144907:web:2f5e7b4b3bb5b956f9cd8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);