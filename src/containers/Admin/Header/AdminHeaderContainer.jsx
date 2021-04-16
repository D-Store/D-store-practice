import React, { useState } from 'react';
import AdminHeader from '../../../components/Admin/Header/AdminHeader';
import { useHistory } from "react-router-dom";

const AdminHeaderContainer = () => {

    const history = useHistory();

    const [changeClassUserInfo,setChangeClassUserInfo] = useState(false);

    const onClickChangeUserInfoCss = () => {
        setChangeClassUserInfo(true)
    }

    //로그아웃
    const handleLogOut = () => {
        console.log("logout");
        localStorage.removeItem("accessToken");
        history.push("/");
      };
    return(
        <>
            <AdminHeader 
            handleLogOut={handleLogOut}
            onClickChangeUserInfoCss={onClickChangeUserInfoCss}
            changeClassUserInfo={changeClassUserInfo}
            />
        </>
    )
}

export default AdminHeaderContainer;