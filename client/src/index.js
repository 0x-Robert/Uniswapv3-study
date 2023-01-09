import React from "react";
//import ReactDOM from "react-dom";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import Nav from "./components/Nav";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
//import reportWebVitals from "./reportWebVitals";
//import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
//reportWebVitals();
// ReactDOM.render( // 18버전부터 ReactDom.render 안 씀
//   <React.StrictMode>
//     <BrowserRouter>
//       <Nav />
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
