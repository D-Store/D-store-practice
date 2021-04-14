import React from 'react';
import AdminHeader from '../../../components/Admin/Header/AdminHeader';
import { useHistory } from "react-router-dom";

const AdminHeaderContainer = () => {

    const history = useHistory();
    //로그아웃
    const handleLogOut = () => {
        console.log("logout");
        localStorage.removeItem("accessToken");
        history.push("/");
      };
    return(
        <>
            <AdminHeader handleLogOut={handleLogOut}/>
        </>
    )
}

export default AdminHeaderContainer;