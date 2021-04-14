import React from 'react';
import { Link } from "react-router-dom"; 
import './AdminHeader.css'

const AdminHeader = ({handleLogOut}) => {
    return(
        <div className="admin-header">
            <div className="admin-header-main">
                <Link to="/admin/main">D'store</Link>
            </div>
            <div className="admin-header-items">
                <div className="admin-header-items-options">
                    <Link to="/">글쓰기</Link>
                    <Link to="/">내정보</Link>
                    <Link to="/admin/userInfo">유저 정보</Link>
                </div>
                <div className="admin-header-items-log">
                    <a href="/" onClick={()=> handleLogOut()}>
                        로그아웃
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AdminHeader;