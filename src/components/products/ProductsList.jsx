import React, { useState, useTransition } from "react";
import "./products.css";
import { TbListDetails } from "react-icons/tb";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import EditModal from "../editModal/EditModal";
import Modal from "../modal/Modal";
import DetailsModal from "./../detailsModal/DetailsModal";

export default function ProductsList() {

  // start details modal
  const [isShowModalDetails, setIsShowModalDetails] = useState(false);
  // end details modal

  // start delete modal
  const [isShowModal, setIsShwoModal] = useState(false);
  const confirmDeleteModal = () => {
    console.log('deleted product')
    setIsShwoModal(false);
  };
  // end delete modal

  // start edit modal
  const [isShowModalEdit, setIsShowModalEdit] = useState(false);
  const onSubmitEditModal = () => {
    console.log('editing product')
  }
  // end edit modal

  return (
    <>
      {isShowModalDetails && <DetailsModal closeModal={() => setIsShowModalDetails(false)} />}
      {isShowModal && (
        <Modal
          cancelModal={() => setIsShwoModal(false)}
          confirmDeleteModal={confirmDeleteModal}
        />
      )}

      {isShowModalEdit && (
        <EditModal 
          closeModalEdit={() => setIsShowModalEdit(false)}
          onSubmit={() => onSubmitEditModal()}
        >
          <div className="edit-input-modal">
            <div className="input-lable">نام محصول</div>
            <input type="text" className="edit-modal-input" />
          </div>
          <div className="edit-input-modal">
            <div className="input-lable">قیمت محصول</div>
            <input type="text" className="edit-modal-input" />
          </div>
          <div className="edit-input-modal">
            <div className="input-lable">رنگ محصول</div>
            <input type="text" className="edit-modal-input" />
          </div>
          <div className="edit-input-modal">
            <div className="input-lable">تعداد محصول</div>
            <input type="text" className="edit-modal-input" />
          </div>
        </EditModal>
      )}

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
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>book</td>
              <td>
                <img
                  src="assets/img/profile.png"
                  className="product-list-img"
                  alt="dd"
                />
              </td>
              <td>230</td>
              <td>12</td>
              <td>
                <div
                  className="tooltip"
                  onClick={() => setIsShowModalDetails(true)}
                >
                  <TbListDetails className="product-list-icon-details" />
                  <span className="tooltiptext">جزئیات</span>
                </div>
                <div className="tooltip" onClick={() => setIsShowModalEdit(true)}>
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
