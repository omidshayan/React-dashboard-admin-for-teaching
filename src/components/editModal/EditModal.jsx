import React from "react";
import "./EditModal.css";
import { AiOutlineClose } from "react-icons/ai";

export default function EditModal({ children, closeModalEdit, onSubmit }) {
  return (
    <>
      <div className="modal-container active-modal">
        <div className="header-modal">
          <div className="icon-modal" onClick={() => closeModalEdit()}>
            <AiOutlineClose />
          </div>
          <div className="title-modal">ویرایش محصول: نام محصول</div>
        </div>
        <hr />
        <form>{children}</form>
        <div className="elements-modal">
          <button href="" className="link-modal" onClick={() => onSubmit()}>
            ویرایش
          </button>
          <button
            href=""
            className="link-modal"
            onClick={() => closeModalEdit()}
          >
            بستن
          </button>
        </div>
      </div>
    </>
  );
}
