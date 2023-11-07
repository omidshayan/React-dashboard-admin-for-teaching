import React from "react";
import AddProduct from './../../components/products/AddProduct';
import ProductsList from "../../components/products/ProductsList";

export default function Products() {
  return (
    <div className="content">
      <main>
        <AddProduct />
        <ProductsList />
        
      </main>
    </div>
  );
}
