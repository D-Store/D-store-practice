import React from 'react';
import { Link } from "react-router-dom"; 

const AdminHeader = () => {
    return(
        <div className="adminHeader">
            <div className="header-main">
                <Link to="/">D'store</Link>
            </div>
        </div>
    )
}

export default AdminHeader;