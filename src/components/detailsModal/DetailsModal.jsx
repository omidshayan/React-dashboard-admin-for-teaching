import React, { useState } from "react";
import "./DetailsModal.css";
import { AiOutlineClose } from "react-icons/ai";

export default function Modal( {closeModal}) {
  return (
    <>
      <div className="modal-container active-modal">
        <div className="header-modal">
          <div className="icon-modal" onClick={() => closeModal()}>
            <AiOutlineClose />
          </div>
          <div className="title-modal">جزئیات محصول: نام محصول</div>
        </div>
        <hr />

        <div className="detailsProduct">
          <div className="details-info">
            <div className="detail-content">نام محصول: محصول جدید</div>
            <div className="detail-content">تاریخ ثبت : 1402/8/8</div>
            <div className="detail-content">قیمت : 250</div>
            <div className="detail-content">تعداد : 52</div>
          </div>
          <div className="detail-image">
            <img src="assets/img/profile.png" className="details-img" alt="" />
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
