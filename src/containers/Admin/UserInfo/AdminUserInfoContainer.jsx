import React, { useEffect, useState } from 'react'
import AdminUserInfo from '../../../components/Admin/UserInfo/AdminUserInfo';
import UserListApi from "../../../assets/API/Admin/UserListApi"

const AdminUserInfoContainer = () => {
    //css 관리를 위한 useState
    const [changeClassUser,setChangeClassUser] = useState(true);
    const [changeClassAdmin,setChangeClassAdmin] = useState(false);

    const [totalUser,setTotalUser] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [userPerPage,setUserPerPage] = useState(10);
    const [loading, setLoading] = useState(false);

    const pageNumbers = [];


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
    
    useEffect( async ()=>{ 
        setLoading(true)
        const response = await UserListApi.getUserList();
        console.log(response)
        setTotalUser(response.data.userEntity)
        setLoading(false)
    },[])

    const lastOfUser = currentPage * userPerPage;
    const firstOfUser = lastOfUser - userPerPage;
    const currentUser = (showPage) => {
        let currentUser = 0;
        currentUser = showPage.slice(firstOfUser,lastOfUser);
        return currentUser
    }


    for(let pushNumber = 1;pushNumber<= Math.ceil(totalUser.length/userPerPage);pushNumber++){
        pageNumbers.push(pushNumber);
    }
    
    const getUserListMap = pageNumbers.map((number) => (
        <div 
        className="admin-main-page-div-items"
        onClick={()=> setCurrentPage(number)}
        >
            {number}
        </div>
    ))
    console.log(getUserListMap)

    return(
        <>
            <AdminUserInfo
            changeClassUser={changeClassUser}
            changeClassAdmin={changeClassAdmin}
            onClickChangeUserCss={onClickChangeUserCss}
            onClickChangeAdminCss={onClickChangeAdminCss}
            currentUser={currentUser(totalUser)}
            getUserListMap={getUserListMap}
            />
        </>
    )
}

export default AdminUserInfoContainer;