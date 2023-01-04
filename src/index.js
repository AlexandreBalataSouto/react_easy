import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

//Pages
// import { Auth0Provider } from "@auth0/auth0-react";
// import App from "./Hello_World/App.js";
// import SimpleCounter from "./Simple_Counter/SimpleCounter";
// import Temperature from "./Temperature/Temperature";
// import SearchFilter from "./Search_Filter/SearchFilter";
// import RegistrationForm from "./Registration_Form/RegistrationForm";
// import Quiz from "./Quiz/Quiz";
// import Navbar from "./Navbar/Navbar";
// import Auth from "./Auth/Auth";
// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
import ToDo from "./ToDo/ToDo";
// import Calculator from "./Calculator/Calculator";
// import SimpleContactList from "./SimpleContactList/SimpleContactList";
// import Recipe from "./Recipe/Recipe";
// import ShoppingList from "./ShoppingList/ShoppingList";
// import Weather from "./Weather/Weather";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <Recipe></Recipe>
  // </React.StrictMode>
  <ToDo></ToDo>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
