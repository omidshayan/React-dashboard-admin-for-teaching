import React, { useState } from "react";
import "./DetailsModal.css";
import { AiOutlineClose } from "react-icons/ai";

export default function Modal( {closeModal, oneProduct}) {
  console.log(oneProduct)
  return (
    <>
      <div className="modal-container active-modal">
        <div className="header-modal">
          <div className="icon-modal" onClick={() => closeModal()}>
            <AiOutlineClose />
          </div>
          <div className="title-modal">جزئیات محصول:  {oneProduct.title}</div>
        </div>
        <hr />

        <div className="detailsProduct">
          <div className="details-info">
            <div className="detail-content">نام محصول:  {oneProduct.title}</div>
            <div className="detail-content">تاریخ ثبت : 1402/8/8</div>
            <div className="detail-content">قیمت : {oneProduct.price}</div>
            <div className="detail-content">تعداد : {oneProduct.count}</div>
          </div>
          <div className="detail-image">
            <img src={oneProduct.img} className="details-img" alt="" />
          </div>
        </div>

        <div className="elements-modal">
          <button className="link-modal"  onClick={() => closeModal()}>
            بستن
          </button>
        </div>
      </div>
    </>
  );
}
