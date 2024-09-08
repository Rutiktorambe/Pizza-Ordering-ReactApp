import React, { useContext } from "react";
import LOGO from "../images/logo.png";
import CART from "../images/cart.png";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

const Navigation = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link to="/">
          <img style={{ height: 45 }} src={LOGO} alt="logo" />
        </Link>
        <ul className="flex items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="ml-6">
            <Link to="/products">Products</Link>
          </li>
          <li className="ml-6">
            <Link to="/cart">
              <div className="flex pr-2 pl-2 pt-1 pb-1 bg-orange-500 rounded-3xl">
                <span>{cart.totalItems || 0}</span>
                <img src={CART} alt="cart" />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
