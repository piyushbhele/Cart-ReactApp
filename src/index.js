import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa9Q6fdX3--cy2tBOkQA2L28XMLuKz7nc",
  authDomain: "cart-f0b9c.firebaseapp.com",
  projectId: "cart-f0b9c",
  storageBucket: "cart-f0b9c.appspot.com",
  messagingSenderId: "90819099936",
  appId: "1:90819099936:web:c2b25cf5655477823f6b45"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

