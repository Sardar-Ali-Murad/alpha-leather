import React from "react";
import { Link } from "react-router-dom";

const Header = ( ) => {
  return (
    <header className="header">
      <section className="flex">
        <Link to="/" className="logo">
          Alpha<span>Leather</span>
        </Link>

        <nav className="navbar">
          <Link to="/">home</Link>
        </nav>
      </section>
    </header>
  );
};

export default Header;
