import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxWMWqP_PA5zwOQQBf3lOh1v2X_-cHy48",
  authDomain: "david-luque---ecomerce.firebaseapp.com",
  projectId: "david-luque---ecomerce",
  storageBucket: "david-luque---ecomerce.appspot.com",
  messagingSenderId: "745340622759",
  appId: "1:745340622759:web:51406e1c2d0a8176ef8882",
  measurementId: "G-ZB20DVMC7E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
