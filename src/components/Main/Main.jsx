import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="main-banner" />
      <div className="main-posting">
        <div className="main-posting-item">
          <div className="main-posting-item-img"></div>
          <div className="main-posting-item-img"></div>
          <div className="main-posting-item-img"></div>
          <div className="main-posting-item-img"></div>
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
