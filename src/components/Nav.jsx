import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [activeNav, setActiveNav] = useState(1);
  return (
    <nav className="wrapper">
      <Link to="/swap" className="nav-link" onClick={() => setActiveNav(1)}>
        <div className={activeNav === 1 ? "nav-item active" : "nav-item"}>
          swap
        </div>
      </Link>

      <Link to="/token" className="nav-link" onClick={() => setActiveNav(2)}>
        {" "}
        <div className={activeNav === 2 ? "nav-item active" : "nav-item"}>
          token
        </div>
      </Link>

      <Link to="/nft" className="nav-link" onClick={() => setActiveNav(3)}>
        {" "}
        <div className={activeNav === 3 ? "nav-item active" : "nav-item"}>
          nft
        </div>
      </Link>

      <Link to="/pools" className="nav-link" onClick={() => setActiveNav(4)}>
        {" "}
        <div className={activeNav === 4 ? "nav-item active" : "nav-item"}>
          pools
        </div>
      </Link>
    </nav>
  );
};

export default Nav;
