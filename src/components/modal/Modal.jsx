import React, { useState } from 'react'
import './Modal.css';
import {AiOutlineClose} from 'react-icons/ai';


export default function Modal( {cancelModal, confirmDeleteModal}) {


  return (
    <>
        <div className="modal-container active-modal">
            <div className="header-modal">
            <div className="icon-modal" onClick={() => cancelModal()}><AiOutlineClose /></div>
            <div className="title-modal">جهت حذف مطمئن هستید؟</div>
            </div>
            <div className="elements-modal">
                <button href="" className='link-modal' onClick={() => confirmDeleteModal()}>بله حذف شود</button>
                <button href="" className='link-modal' onClick={() => cancelModal()}>کنسل</button>
            </div>
        </div>
    </>
  )
}
