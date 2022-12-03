import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { remove } from "../features/cartSlice";
import {
  remove
} from "../redux/actions/productActions";
const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products.map((product) => (
          <div className="cartCard" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h5>{product.title}</h5>
            <h5>${product.price}</h5>
            <button className="btn" onClick={() => handleRemove(product.id)}>
              Remove Product
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
