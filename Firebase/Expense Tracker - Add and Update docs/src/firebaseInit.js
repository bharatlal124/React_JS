// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPD-YtuR4WgQk7z1cR7SpxF3sQ7C2rA6Y",
  authDomain: "expense-48e14.firebaseapp.com",
  projectId: "expense-48e14",
  storageBucket: "expense-48e14.appspot.com",
  messagingSenderId: "977324675554",
  appId: "1:977324675554:web:3d3242c6c043b354f4a9bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};