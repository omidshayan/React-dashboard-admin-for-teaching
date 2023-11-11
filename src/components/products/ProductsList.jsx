import React, { useEffect, useState, useTransition } from "react";
import "./products.css";
import { TbListDetails } from "react-icons/tb";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import EditModal from "../editModal/EditModal";
import Modal from "../modal/Modal";
import DetailsModal from "./../detailsModal/DetailsModal";
import Warning from "./../../components/warnings/Warning";
import axios from 'axios';

export default function ProductsList({allProducts, getProducts}) {
  // start details modal
  const [isShowModalDetails, setIsShowModalDetails] = useState(false);
  const [oneProduct, setOneProduct] = useState({});
  // end details modal

  // start delete modal
  const [isShowModal, setIsShwoModal] = useState(false);
  const [productId, setProductId] = useState(null);


  const confirmDeleteModal = () =>{
    axios.delete(`http://localhost:3000/api/products/${productId}`)
    .then(response => {
      console.log(`Deleted post with ID ${productId}`);
      setIsShwoModal(false);
      getProducts();
    })
  }

  // end delete modal

  // start edit modal
  const [isShowModalEdit, setIsShowModalEdit] = useState(false);
  const [nameTitle, setNameTitle] = useState("");
  const [price, setPrice] = useState("");
  const [count, setCount] = useState("");
  const [img, setImg] = useState("");


  const onSubmitEditModal = () => {
    console.log("submit edit component");
    setIsShowModalEdit(false);

    const productUpdate = {
      title: nameTitle,
      price: price,
      count: count,
      img: img,
    };

    axios.put(`http://localhost:3000/api/products/${productId}`)
    .then((responce) => {
      getProducts();
      setIsShowModalEdit(false);
    })

  };
  // end edit modal

  // start get products in api


  return (
    <>
      {isShowModalDetails && (
        <DetailsModal
          closeModal={() => setIsShowModalDetails(false)}
          oneProduct={oneProduct}
        />
      )}
      {isShowModal && (
        <Modal
          cancelModal={() => setIsShwoModal(false)}
          confirmDeleteModal={confirmDeleteModal}
        />
      )}

      {isShowModalEdit && (
        <EditModal
          closeModalEdit={() => setIsShowModalEdit(false)}
          onSubmit={() => {
            onSubmitEditModal();
          }}
        >
          <div className="edit-input-modal">
            <div className="input-lable">نام محصول</div>
            <input
              type="text"
              className="edit-modal-input"
              value={nameTitle}
              onChange={(event) => setNameTitle(event.target.value)}
            />
          </div>
          <div className="edit-input-modal">
            <div className="input-lable">قیمت محصول</div>
            <input
              type="text"
              className="edit-modal-input"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>
          <div className="edit-input-modal">
            <div className="input-lable">تعداد محصول</div>
            <input
              type="text"
              className="edit-modal-input"
              value={count}
              onChange={(event) => setCount(event.target.value)}
            />
          </div>
          <div className="edit-input-modal">
            <div className="input-lable">آدرس عکس </div>
            <input
              type="text"
              className="edit-modal-input"
              value={img}
              onChange={(event) => setImg(event.target.value)}
            />
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
            {allProducts.map((product, index) => {
              return (
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
                      onClick={() => {
                        setIsShowModalDetails(true);
                        setOneProduct(product);
                      }}
                    >
                      <TbListDetails className="product-list-icon-details" />
                      <span className="tooltiptext">جزئیات</span>
                    </div>
                    <div
                      className="tooltip"
                      onClick={() => {
                        setIsShowModalEdit(true);
                        setNameTitle(product.title);
                        setPrice(product.price);
                        setCount(product.count);
                        setImg(product.img);
                      }}
                    >
                      <AiOutlineEdit className="product-list-icon-edit" />
                      <span className="tooltiptext">ویرایش</span>
                    </div>

                    <div
                      className="tooltip"
                      onClick={() => {
                        setIsShwoModal(true);
                        setProductId(product.id);
                      }}
                    >
                      <AiOutlineDelete className="product-list-icon-delete" />
                      <span className="tooltiptext">حذف</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {!allProducts.length && <Warning msg={"محصولی یافت نشد"} />}
    </>
  );
}
