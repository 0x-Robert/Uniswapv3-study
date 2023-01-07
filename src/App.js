import { Route, Routes } from "react-router-dom";
import swap from "./pages/swap";
import nft from "./pages/nft";
import token from "./pages/token";
import pools from "./pages/pools";
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
    </div>
  );
}

export default App;
