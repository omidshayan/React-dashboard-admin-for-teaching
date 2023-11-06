import React from 'react'
import {AiOutlineHome} from 'react-icons/ai';
import {FiUsers} from 'react-icons/fi';
import {MdOutlineProductionQuantityLimits} from 'react-icons/md';

import {Link} from 'react-router-dom';


export default function Sidebar() {
  return (
   <>
        <div className="sidebar">
        <div className="sidebar-section">
            <div className="brand-name">
                Arya Tech
            </div>
            <div className="avatar">
                <div className="img-avatar">
                    <img src="assets/img/profile.png" alt="" />
                </div>
                <div className="info-avatar">
                    <div className="text-avatar">
                        <div>Arya Tech</div>
                    </div>
                    <span className="fas fa-chevron-down"></span>
                </div>
            </div>
            <div className="sidebar-item">
                <ul>
                    <li><Link to={'/'}  className="active">
                            <AiOutlineHome className='dashboard-icon' />
                            <span>dashboard</span>
                        </Link></li>
                    <li>
                        <Link to={'/products'}>
                        <MdOutlineProductionQuantityLimits className='dashboard-icon' />
                            <span>products </span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'users'}>
                        <FiUsers className='dashboard-icon' />
                            <span>users</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
   </>
  )
}
