import React, { useState } from "react";

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [count, setCoutn] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  const productInfo = {
    title: title,
    price: price,
    count: count,
    img: img,
    popularity: '33',
    sale: '4545',
    colors: 'dfd',
  }

  const addNewProduct = (event) => {
    event.preventDefault()
    fetch(`http://localhost:3000/api/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productInfo)
    }).then(res => res.json()).then(result => {
      console.log(result)
    })
  
  }

  
  return (
    <>
      <div className="title">
        <div className="title-text">افزودن محصول جدید</div>
      </div>
      <br />
      <div className="insert">
        <form action="">
          <div>نام محصول </div>
          <input type="text" placeholder="نام ..." value={title} onChange={(event) => setTitle(event.target.value)} />
          <div>قیمت</div>
          <input type="text" placeholder="قیمت محصول ..." value={price} onChange={(event) => setPrice(event.target.value)} />
          <div>تعداد</div>
          <input type="text" placeholder="تعداد محصول ..." value={count} onChange={(event) => setCoutn(event.target.value)} />
          <div>آدرس انبار </div>
          <input type="text" placeholder="آدرس عکس..." value={img} onChange={(event) => setImg(event.target.value)}/>
          <input type="submit" value="ثبت محصول جدید" className="btn" onClick={addNewProduct}/>
        </form>
      </div>
    </>
  );
}
