import React from "react";
import Warning from "./../../components/warnings/Warning";
import AddProduct from './../../components/products/AddProduct';


export default function Products() {
  return (
    <div className="content">
      <main>
        <AddProduct />
        <Warning msg={"pruduts is empy"} />
      </main>
    </div>
  );
}
