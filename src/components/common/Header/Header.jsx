import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ isLogin, handleLogOut }) => {
  return (
    <div className="header">
      <div className="header-main">D'store</div>
      {!isLogin ? (
        <div className="header-nav">
          <div className="header-nav-item">
            <Link to="/signIn">SignIn</Link>
          </div>
          <div className="header-nav-item">
            <Link to="/signUp">SingUp</Link>
          </div>
        </div>
      ) : (
        <div className="header-nav">
          <div className="header-nav-item">
            <Link to="/signIn">글쓰기</Link>
          </div>
          <div className="header-nav-item">
            <Link to="/signUp">내정보</Link>
          </div>
          <button onClick={() => handleLogOut()}>로그아웃</button>
        </div>
      )}
    </div>
  );
};

export default Header;
