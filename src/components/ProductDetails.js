import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
  add,
} from "../redux/actions/productActions";

const ProductDetails = () => {
  const { productId } = useParams();

  let product = useSelector((state) => state.product);
  console.log(product);

  const dispatch = useDispatch();

  // destructuring
  const { image, title, price, category, description } = product;

  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("error", err);
      });
    dispatch(selectedProduct(response.data));
  };
  const handleAdd = (product) => {
    dispatch(add(product));
    alert(`${product.title} added to cart`);
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div className="container">
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="row">
          <div className="col-4">
            <img width="300" src={image} alt={title} />
          </div>
          <div className="col-8">
            <h1>{title}</h1>
            <h2>Category: {category}</h2>
            <h4>Product Details</h4>
            <div>{description}</div>
            <h3>{price}</h3>
          </div>
          <button
            className="mt-3 btn btn-primary"
            onClick={() => handleAdd(product)}
          >
            Add to cart
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
