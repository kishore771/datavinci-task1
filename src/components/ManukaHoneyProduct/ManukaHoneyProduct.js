import React from "react";
import ProductImages from "../ProductImages/ProductImages";
import ProductDetails from "../ProductDetails/ProductDetails";

import "./ManukaHoneyProduct.css";

const ManukaHoneyProduct = () => {
  return (
    <div className="product-page">
        <ProductImages />
        <ProductDetails />
      </div>
  );
};
export default ManukaHoneyProduct;
