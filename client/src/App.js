import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import swap from "./pages/Swap";
import nft from "./pages/Nfts";
import token from "./pages/Token";
import pools from "./pages/Pools";
import SearchPage from "./pages/SearchPage";
import "./App.css";
import React from "react";
import SwapTemplate from "./components/SwapTemplate";
import { createGlobalStyle } from "styled-components";
import SwaTemplate from "./components/SwapTemplate";
import styled from "styled-components";
import TodoTemplate from "./pages/TodoTemplate";
import { BrowserRouter } from "react-router-dom";
import Swap from "./pages/Swap"
const GlobalStyle = createGlobalStyle`

  body {
    background: rgb(142, 118, 255);
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Swap/>
      {/* <Routes>
        <Route path="/swap" component={swap} title="token 선택"></Route>
        <Route path="/swap" component={swap} title="token 선택"></Route>
        <Route path="/token" component={token} />
        <Route path="/nft" component={nft} />
        <Route path="/pools" component={pools} />
      </Routes> */}
    </div>
  );
}

export default App;
