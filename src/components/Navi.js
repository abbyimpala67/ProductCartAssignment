import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const Navi = () => {
  const products = useSelector((state) => state.allProducts.products);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning mb-5">
      <div className="container-fluid">
        <Link to="/">
          <a className="navbar-brand text-white">SHOP</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="navLink" style={{ marginLeft: "-16%" }}>
                Home
              </Link>
              <span className="cartCount"></span>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="navLink">
                Cart items: {products.length}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navi;
