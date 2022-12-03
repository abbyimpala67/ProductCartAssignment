import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {

    // destructuring
    const { id, title, image, price, category } = product;

    return (
      <div className="col-4" key={id}>
     
        <div className="card" style={{ width: "18rem" }}>
        <Link to={`/product/${id}`}>
          <img src={image} style={{maxHeight: "300px"}} className="card-img-top" alt={title} />
          
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{category}</p>
            <div className="d-flex justify-content-between align-items-center">
              <h2><span className="badge bg-success">{price}</span></h2>  
            </div>
          </div>
          </Link>
        </div>
        
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
