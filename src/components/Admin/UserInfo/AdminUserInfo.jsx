import React from 'react'
import './AdminUserInfo.css'

const AdminUserInfo = ({
    changeClassUser,
    changeClassAdmin,
    onClickChangeUserCss,
    onClickChangeAdminCss,
    currentUser,
    getUserListMap
}) => {

    return(
        <div className="admin-main-form">
            <div className="admin-main-title">
                    유저 정보
            </div>
            <div className="admin-main-text">
                <div className="admin-main-text-title">
                    <div 
                    className={changeClassUser ? "admin-main-text-title-item-user clicked":"admin-main-text-title-item-user"}
                    onClick={()=>{onClickChangeUserCss()}}
                    >
                        유저
                    </div>
                    <div 
                    className={changeClassAdmin ? "admin-main-text-title-item-admin clicked":"admin-main-text-title-item-admin"}
                    onClick={()=>{onClickChangeAdminCss()}}
                    >
                        어드민
                    </div>
                </div>
                <div className="admin-main-text-title-subTitle">
                    <div className="admin-main-text-title-subTitle-profile">프로필</div>
                    <div className="admin-main-text-title-subTitle-email">이메일</div>
                    <div className="admin-main-text-title-subTitle-name">이름</div>
                    <div className="admin-main-text-title-subTitle-check">이메일 인증여부</div>
                    <div className="admin-main-text-title-subTitle-role">역할</div>
                    <div className="admin-main-text-title-subTitle-delete">유저 삭제</div>
                </div>
                <div className="admin-main-text-items">
                    <div className="admin-main-text-items-form">
                    </div>
                    {
                        currentUser.map((currentUser)=> 
                            <>
                            <div className="admin-main-text-items-form">
                                <div className="admin-main-text-items-profile">
                                프로필
                                </div>
                                <div className="admin-main-text-items-email">
                                    {currentUser.email}
                                </div>
                                <div className="admin-main-text-items-name">
                                    {currentUser.name}
                                </div>
                                <div className="admin-main-text-items-check">
                                    인증여부
                                </div>
                                <div className="admin-main-text-items-role">
                                    역할 체크박스
                                </div>
                                <div className="admin-main-text-items-delete">
                                    삭제 버튼
                                </div>
                            </div>
                            </>
                        )
                    }
                </div>
            </div>
            <div className="admin-main-page-div">
                {getUserListMap}
            </div>
        </div>
    )
}

export default AdminUserInfo;