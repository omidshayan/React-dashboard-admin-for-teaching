import React from "react";
import Warning from "./../../components/warnings/Warning";
import AddProduct from './../../components/products/AddProduct';
import ProductsList from "../../components/products/ProductsList";

export default function Products() {
  return (
    <div className="content">
      <main>
        <AddProduct />
        <ProductsList />
        <Warning msg={"pruduts is empy"} />
      </main>
    </div>
  );
}
