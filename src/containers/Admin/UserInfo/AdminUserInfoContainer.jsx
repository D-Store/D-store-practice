import React, { useEffect, useState } from 'react'
import AdminUserInfo from '../../../components/Admin/UserInfo/AdminUserInfo';
import UserListApi from "../../../assets/API/Admin/UserListApi"

const AdminUserInfoContainer = () => {
    //css 관리를 위한 useState
    const [changeClassUser,setChangeClassUser] = useState(true);
    const [changeClassAdmin,setChangeClassAdmin] = useState(false);

    //전체 유저정보
    const [totalUser,setTotalUser] = useState([]);
    //현재 페이지 번호
    const [currentPage,setCurrentPage] = useState(1);
    //페이지당 유저 정보 개수
    const [userPerPage,setUserPerPage] = useState(10);
    //로딩 관리
    const [loading, setLoading] = useState(false);
    
    //페이지번호
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
    
    //서버에서 전체 유저정보 가져오기
    useEffect( async ()=>{ 
        //로딩중
        setLoading(true)
        const response = await UserListApi.getUserList();
        console.log(response)
        setTotalUser(response.data.userEntity)
        //로딩끝
        setLoading(false)
    },[])

    //한페이지에 띄워줄 유저 인덱스
    const lastOfUser = currentPage * userPerPage;
    const firstOfUser = lastOfUser - userPerPage;

    //페이지에 띄워줄 유저정보
    const currentUser = (showPage) => {
        let currentUser = 0;
        currentUser = showPage.slice(firstOfUser,lastOfUser);
        return currentUser
    }

    //전체 유저 목록에서 페이지당 명수로 끊어서 페이지 개수 찾기
    for(let pushNumber = 1;pushNumber<= Math.ceil(totalUser.length/userPerPage);pushNumber++){
        pageNumbers.push(pushNumber);
    }

    const deleteUsers = async (id) => {
        const response = await UserListApi.deleteUser(id)
        setTotalUser(response.data.userEntity)
    }
    
    //페이지 목록 넘겨주기
    const getUserListMap = pageNumbers.map((number) => (
        <div 
        className="admin-main-page-div-items"
        onClick={()=> setCurrentPage(number)}
        >
            {number}
        </div>
    ))

    return(
        <>
            <AdminUserInfo
            changeClassUser={changeClassUser}
            changeClassAdmin={changeClassAdmin}
            onClickChangeUserCss={onClickChangeUserCss}
            onClickChangeAdminCss={onClickChangeAdminCss}
            currentUser={currentUser(totalUser)}
            getUserListMap={getUserListMap}
            deleteUsers={deleteUsers}
            />
        </>
    )
}

export default AdminUserInfoContainer;