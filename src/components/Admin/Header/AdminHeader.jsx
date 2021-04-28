import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./AdminHeader.css";

const AdminHeader = ({
  handleLogOut,
  onClickChangeUserInfoCss,
  changeClassUserInfo,
}) => {
  const activeStyle = {
    color: "white",
  };

  return (
    <div className="admin-header">
      <div className="admin-header-main">
        <Link to="/admin">D'store</Link>
      </div>
      <div className="admin-header-items">
        <div className="admin-header-items-options">
          <NavLink
            className="admin-header-items-options-Link"
            to="/signUp"
            activeStyle={activeStyle}
          >
            글쓰기
          </NavLink>
          <NavLink
            className="admin-header-items-options-Link"
            to="/signIn"
            activeStyle={activeStyle}
          >
            내정보
          </NavLink>
          <NavLink
            className="admin-header-items-options-Link"
            onClick={onClickChangeUserInfoCss}
            to="/admin/userInfo"
            activeStyle={activeStyle}
          >
            유저 정보
          </NavLink>
        </div>
        <div className="admin-header-items-log">
          <a href="/" onClick={() => handleLogOut()}>
            로그아웃
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
