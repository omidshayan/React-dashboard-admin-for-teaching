import React, { useState } from "react";
import "./products.css";
import { TbListDetails } from "react-icons/tb";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

import Modal from "../modal/Modal";

export default function ProductsList() {

  const [isShowModal, setIsShwoModal] = useState(false);

  const cancelModal = () =>{
    setIsShwoModal(false)
  }

  const confirmDeleteModal = () =>{
    setIsShwoModal(false)
  }
  
  return (
    <>
      {isShowModal && <Modal cancelModal={cancelModal} confirmDeleteModal={confirmDeleteModal}/> }
      <h1 className="product-list-title">لیستــــــ محصولاتــــــ</h1>
      <div className="table-wrapper">
        <table className="fl-table">
          <thead>
            <tr>
              <th>#</th>
              <th>نام</th>
              <th>قیمت </th>
              <th>تعداد</th>
              <th>تصویر</th>
              <th>تاریخ</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>book</td>
              <td>230</td>
              <td>12</td>
              <td>
                <img
                  src="assets/img/profile.png"
                  className="product-list-img"
                  alt="dd"
                />
              </td>
              <td>1402/5/5</td>
              <td>
                <div className="tooltip">
                  <TbListDetails className="product-list-icon-details" />
                  <span className="tooltiptext">جزئیات</span>
                </div>
                <div className="tooltip">
                  <AiOutlineEdit className="product-list-icon-edit" />
                  <span className="tooltiptext">ویرایش</span>
                </div>
                <div className="tooltip" onClick={() => setIsShwoModal(true)}>
                  <AiOutlineDelete className="product-list-icon-delete" />
                  <span className="tooltiptext">حذف</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
