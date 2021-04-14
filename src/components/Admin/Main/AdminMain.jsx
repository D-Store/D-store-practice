import React from 'react'
import './AdminMain.css'

const AdminMain = ({
    changeClassUser,
    changeClassAdmin,
    onClickChangeUserCss,
    onClickChangeAdminCss
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
                <div className="admin-main-text-items">
                    유저
                </div>
                <div className="admin-main-text-items">
                    유저
                </div>
                <div className="admin-main-text-items">
                    유저
                </div>
                <div className="admin-main-text-items">
                    유저
                </div>
                <div className="admin-main-text-items">
                    유저
                </div>
                <div className="admin-main-text-items">
                    유저
                </div>
                <div className="admin-main-text-items">
                    유저
                </div>
                <div className="admin-main-text-items">
                    유저
                </div>
                <div className="admin-main-text-items">
                    유저
                </div>
                <div className="admin-main-text-items">
                    유저
                </div>
            </div>
            <div className="admin-main-page-div">
                <div className="admin-main-page-div-items">1</div>
                <div className="admin-main-page-div-items">2</div>
                <div className="admin-main-page-div-items">3</div>
                <div className="admin-main-page-div-items">4</div>
                <div className="admin-main-page-div-items">5</div>
            </div>
        </div>
    )
}

export default AdminMain;