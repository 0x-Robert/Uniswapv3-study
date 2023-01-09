import { Route, Routes } from "react-router-dom";
import swap from "./pages/Swap";
import nft from "./pages/Nfts";
import token from "./pages/Token";
import pools from "./pages/Pools";
import SearchPage from "./pages/SearchPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/swap" component={swap} />
        <Route path="/token" component={token} />
        <Route path="/nft" component={nft} />
        <Route path="/pools" component={pools} />
      </Routes>
      <SearchPage />
    </div>
  );
}

export default App;
