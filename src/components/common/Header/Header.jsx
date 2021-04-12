import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ isLogin, handleLogOut }) => {
  return (
    <div className="header">
      <div className="header-main">
        <Link to="/">D'store</Link>
      </div>
      {!isLogin ? (
        <div className="header-nav">
          <div className="header-nav-log">
            <Link to="/signIn">SignIn</Link>
            <Link to="/signUp">SingUp</Link>
          </div>
        </div>
      ) : (
        <div className="header-nav">
          <div className="header-nav-function">
            <Link to="/signIn">글쓰기</Link>
            <Link to="/signUp">내정보</Link>
          </div>
          <div className="header-nav-log">
            <a href="/" onClick={() => handleLogOut()}>
              로그아웃
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
