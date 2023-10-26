import React from "react";
import './Header.css';
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="header-logo">
      <nav>
        <ul>
      <li>
      <Link to="/home">
        <img src="/images/logo.jpeg" alt="my logo img"  height={80}/>
      </Link>
      </li>
      </ul>
      </nav>
    </header>
  );
};
export default Header;