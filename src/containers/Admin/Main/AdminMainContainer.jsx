import React, { useState } from 'react'
import AdminMain from '../../../components/Admin/Main/AdminMain';
import Header from '../../../components/common/Header/Header'

const AdminMainContainer = () => {

    const [changeClassUser,setChangeClassUser] = useState(true);
    const [changeClassAdmin,setChangeClassAdmin] = useState(false);

    const onClickChangeUserCss = (e) => {
        setChangeClassUser(true)
        setChangeClassAdmin(false)
    }

    const onClickChangeAdminCss = () => {
        setChangeClassUser(false)
        setChangeClassAdmin(true)
    }

    return(
        <>
        <Header />
        <AdminMain 
        changeClassUser={changeClassUser}
        changeClassAdmin={changeClassAdmin}
        onClickChangeUserCss={onClickChangeUserCss}
        onClickChangeAdminCss={onClickChangeAdminCss}
        />
        </>
    )
}

export default AdminMainContainer;