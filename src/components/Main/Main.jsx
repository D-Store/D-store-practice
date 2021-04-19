import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const Main = ({ bannerPage, postPage }) => {
  return (
    <div className="main">
      <div className="main-banner" ref={bannerPage}>
        <div className="main-banner-item" />
      </div>
      <div className="main-posting" ref={postPage}>
        <div className="main-posting-item">
          <div className="main-posting-title">당신이 원하는 프로젝트</div>
          <Link>
            <div className="main-posting-item-img"></div>
          </Link>
          <Link>
            <div className="main-posting-item-img"></div>
          </Link>
          <Link>
            <div className="main-posting-item-img"></div>
          </Link>
          <Link>
            <div className="main-posting-item-img"></div>
          </Link>
        </div>
        <div className="main-posting-nav">
          <button className="main-posting-nav-item">«</button>
          <button className="main-posting-nav-item">»</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
