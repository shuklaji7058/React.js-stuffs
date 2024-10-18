// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-7 px-10 bg-emerald-800 text-black flex items-center justify-between">
      <h2 className="text-2xl">Shukla</h2>

      <div className="flex gap-10">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/product">Product</Link>
      </div>
    </div>
  );
};

export default Header;
