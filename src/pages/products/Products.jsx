import React from "react";
import AddProduct from './../../components/products/AddProduct';
import ProductsList from "../../components/products/ProductsList";
import { useState, useEffect } from "react";
import axios from 'axios';


export default function Products() {


  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () =>{
    axios.get("http://localhost:3000/api/products")
    .then((responce) => {
      setAllProducts(responce.data)
    })
  }
  // const getProducts = () => {
  //   fetch("http://localhost:3000/api/products")
  //     .then((res) => res.json())
  //     .then((products) => setAllProducts(products));
  // };


  return (
    <div className="content">
      <main>
        <AddProduct />
        <ProductsList allProducts={allProducts} getProducts={getProducts}/>
        
      </main>
    </div>
  );
}
