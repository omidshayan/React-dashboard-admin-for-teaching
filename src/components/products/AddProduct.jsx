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
            autocomplete="off"
          />
          <div>مدل  </div>
          <input type="text" placeholder="مدل محصول ..." name="name" />
          <div>قیمت</div>
          <input type="text" placeholder="قیمت محصول ..." name="name" />
          <div>تعداد</div>
          <input type="text" placeholder="تعداد محصول ..." name="model" />
          <div>رنگ  </div>
          <input type="text" placeholder="رنگ محصول ..." name="color" />
          <div>آدرس انبار  </div>
          <input type="text" placeholder="آدرس محصول در انبار ..." name="color" />
          <input type="submit" value="ثبت محصول جدید" className="btn" />
        </form>
      </div>
    </>
  );
}
