import React from 'react'
import './AdminUserInfo.css'
import check from "../../../assets/images/check.png"
import falseCheck from "../../../assets/images/falseCheck.png"
import userPng from "../../../assets/images/user.png"
import close from "../../../assets/images/close.png"

const AdminUserInfo = ({
    changeClassUser,
    changeClassAdmin,
    onClickChangeUserCss,
    onClickChangeAdminCss,
    currentUser,
    getUserListMap,
    deleteUsers
}) => {
    console.log(currentUser)
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
                    {   changeClassUser ?
                        currentUser.map((currentUser)=> 
                            <>
                            <div className="admin-main-text-items-form">
                                <div className="admin-main-text-items-profile">
                                <img 
                                className="admin-main-text-items-profile-img"
                                src={userPng}
                                style={currentUser.profileImage?{display:"none"}:{display:"block"}}
                                />
                                </div>
                                <div className="admin-main-text-items-email">
                                    {currentUser.email}
                                </div>
                                <div className="admin-main-text-items-name">
                                    {currentUser.name}
                                </div>
                                <div className="admin-main-text-items-check">
                                        <img 
                                        className="admin-main-text-items-check-img" 
                                        src={check} 
                                        style={currentUser.mailAccess?{display:"block"}:{display:"none"}}
                                        alt=''
                                        />
                                        <img 
                                        className="admin-main-text-items-check-img" 
                                        src={falseCheck} 
                                        style={currentUser.mailAccess?{display:"none"}:{display:"block"}}
                                        alt=""/>
                                </div>
                                <div className="admin-main-text-items-role">
                                    역할 박스
                                </div>
                                <div 
                                className="admin-main-text-items-delete">
                                    <img 
                                    className="admin-main-text-items-delete-btn" 
                                    src={close}
                                    onClick={()=>{deleteUsers(currentUser.id)}}
                                    alt=""
                                    />
                                </div>
                            </div>
                            </>
                        ): <div>asdf</div>
                    }
            </div>
            <div className="admin-main-page-div">
                {getUserListMap}
            </div>
        </div>
    )
}

export default AdminUserInfo;