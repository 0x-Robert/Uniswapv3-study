import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [activeNav, setActiveNav] = useState(1);
  return (
    <nav className="wrapper">
      <Link to="/home" className="nav-link" onClick={() => setActiveNav(1)}>
        <div className={activeNav === 1 ? "nav-item active" : "nav-item"}>
          홈
        </div>
      </Link>
      <Link to="/swap" className="nav-link" onClick={() => setActiveNav(1)}>
        <div className={activeNav === 2 ? "nav-item active" : "nav-item"}>
          스왑
        </div>
      </Link>

      <Link to="/token" className="nav-link" onClick={() => setActiveNav(2)}>
        {" "}
        <div className={activeNav === 3 ? "nav-item active" : "nav-item"}>
          토큰
        </div>
      </Link>

      <Link to="/nft" className="nav-link" onClick={() => setActiveNav(3)}>
        {" "}
        <div className={activeNav === 4 ? "nav-item active" : "nav-item"}>
          NFT
        </div>
      </Link>

      <Link to="/pools" className="nav-link" onClick={() => setActiveNav(4)}>
        {" "}
        <div className={activeNav === 5 ? "nav-item active" : "nav-item"}>
          POOL
        </div>
      </Link>
    </nav>
  );
};

export default Nav;
