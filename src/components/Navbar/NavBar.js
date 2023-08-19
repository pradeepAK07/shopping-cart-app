import React from "react";
import "./NavBar.css";
import { navlinks } from "../../MockData/Data";
const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="nav-header-container">
        <p className="header">Daily Shopping</p>
      </div>
      <div className="nav-link">
        {navlinks.map((item, i) => (
          <p key={i} className="links">
            {item.linkName}
          </p>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
