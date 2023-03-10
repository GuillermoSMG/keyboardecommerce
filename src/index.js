import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDtyxN9_549V_Dzb569g_rNwNSr6lJJ_Is",
  authDomain: "keyboardecommerce.firebaseapp.com",
  projectId: "keyboardecommerce",
  storageBucket: "keyboardecommerce.appspot.com",
  messagingSenderId: "61178848211",
  appId: "1:61178848211:web:7f9c5f140de2958902c526",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
