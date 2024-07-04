// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzsdUL7_beILzNulMJENAm0H0IAyqd320",
  authDomain: "coffee-app-25ae9.firebaseapp.com",
  projectId: "coffee-app-25ae9",
  storageBucket: "coffee-app-25ae9.appspot.com",
  messagingSenderId: "340945608627",
  appId: "1:340945608627:web:deac247006849bf29375c6",
  measurementId: "G-5Z17PCD24Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);