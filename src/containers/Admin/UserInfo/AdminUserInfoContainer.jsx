import React, { useState } from 'react'
import AdminUserInfo from '../../../components/Admin/UserInfo/AdminUserInfo';

const AdminUserInfoContainer = () => {
    //css 관리를 위한 useState
    const [changeClassUser,setChangeClassUser] = useState(true);
    const [changeClassAdmin,setChangeClassAdmin] = useState(false);

    //css 관리 
    const onClickChangeUserCss = (e) => {
        setChangeClassUser(true)
        setChangeClassAdmin(false)
    }
    //css 관리
    const onClickChangeAdminCss = () => {
        setChangeClassUser(false)
        setChangeClassAdmin(true)
    }

    return(
        <>
        <AdminUserInfo
        changeClassUser={changeClassUser}
        changeClassAdmin={changeClassAdmin}
        onClickChangeUserCss={onClickChangeUserCss}
        onClickChangeAdminCss={onClickChangeAdminCss}
        />
        </>
    )
}

export default AdminUserInfoContainer;