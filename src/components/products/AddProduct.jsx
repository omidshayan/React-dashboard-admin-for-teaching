import React from "react";

export default function AddProduct() {
  return (
    <>
      <div className="title">
        <div className="title-text">افزودن محصول جدید</div>
      </div>
      <br />
      <div className="insert">
        <form action="">
          <div>نام محصول </div>
          <input
            type="text"
            placeholder="نام ..."
            name="name"
            autoComplete="off"
          />
          <div>قیمت</div>
          <input type="text" placeholder="قیمت محصول ..." name="name" />
          <div>تعداد</div>
          <input type="text" placeholder="تعداد محصول ..." name="model" />
          <div>آدرس انبار  </div>
          <input type="text" placeholder="آدرس محصول در انبار ..." name="color" />
          <input type="submit" value="ثبت محصول جدید" className="btn" />
        </form>
      </div>
    </>
  );
}
