import React from "react";
import SearchBarra from "../SearchBarra/SearchBarra.jsx";
import CartButton from "../CartButton/CartButton.jsx";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <SearchBarra />
        <CartButton />
      </div>
    </header>
  );
}

export default Header;
