// create firebase config here and export the db object
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJWuVlZOzY0gMoGrIUU4rCgXtFo4dSRPo",
  authDomain: "test-5e9b2.firebaseapp.com",
  projectId: "test-5e9b2",
  storageBucket: "test-5e9b2.appspot.com",
  messagingSenderId: "40764544360",
  appId: "1:40764544360:web:e8bdb1c427b59f1764f2dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);