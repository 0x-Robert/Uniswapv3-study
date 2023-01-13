import { Route, Routes } from "react-router-dom";
import swap from "./pages/Swap";
import nft from "./pages/Nfts";
import token from "./pages/Token";
import pools from "./pages/Pools";
import SearchPage from "./pages/SearchPage";
import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/swap" component={swap} title="token 선택">
          {/* <Button
            title="선택 완료"
            padding="20px"
            width="100%"
            background="#FFFFFF"
            marginTop="40px"
            textSize="30px"
            textColor="#000000"
            fontWeight="bold"
            border="1px solid #5F5F5F"
            radius="13px"
          ></Button> */}
        </Route>
        <Route path="/token" component={token} />
        <Route path="/nft" component={nft} />
        <Route path="/pools" component={pools} />
      </Routes>

      {/* <SearchPage /> */}
    </div>
  );
}

export default App;
