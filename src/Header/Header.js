import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/">
      <header>
        <div className="top_menu">
          <h1>Swedish Radio</h1>
        </div>
      </header>
    </Link>
  );
};

export default Header;
