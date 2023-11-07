import React, { useEffect, useState, useTransition } from "react";
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
    setIsShowModalEdit(false)
    console.log('editing product')
  }
  // end edit modal


  // start get products in api
  const [allProducts, setAllProducts ] = useState([]);
  
  useEffect(() =>{
    fetch('http://localhost:3000/api/products').then(res => res.json()).then(products => setAllProducts(products));
  },[])

// end get products in api

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
            {
              allProducts.map((product, index) => {
                return(
                  <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.title}</td>
                  <td>
                    <img
                      src={product.img}
                      className="product-list-img"
                      alt="dd"
                    />
                  </td>
                  <td>{product.price}</td>
                  <td>{product.count}</td>
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
                )
              } )
            }
     
          </tbody>
        </table>
      </div>
    </>
  );
}
