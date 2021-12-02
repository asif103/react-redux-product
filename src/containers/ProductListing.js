import axios, { Axios } from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "./../redux/actions/productActions";

function ProductListing() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Product fetch error: ", err);
      });
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <div>
      <h1>Listing Page</h1>

      <div className="ui grid container">
        <ProductComponent />
      </div>
    </div>
  );
}

export default ProductListing;
