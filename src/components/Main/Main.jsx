import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const Main = ({
  bannerPage,
  postPage,
  handleNextPosting,
  getPosting,
  postings,
}) => {
  return (
    <div className="main">
      <div className="main-banner" ref={bannerPage}>
        <div className="main-banner-item" />
      </div>
      <div className="main-posting" ref={postPage}>
        <div className="content">
          <div className="main-posting-header">
            <div className="main-posting-header-title">
              당신이 원하는 프로젝트
            </div>
            <div className="main-posting-header-nav">
              <button className="main-posting-header-nav-item">«</button>
              <button
                className="main-posting-header-nav-item"
                onClick={getPosting}
              >
                »
              </button>
            </div>
          </div>
          <div className="main-posting-item">
            {postings.map((current, key) => {
              return (
                <Link className="link" to="/">
                  <div
                    className="main-posting-item-img"
                    style={{
                      backgroundImage: `url(http://${current.mainPhoto.fileLocation})`,
                    }}
                  ></div>
                  <div className="mina-posting-item-img">{current.title}</div>
                </Link>
              );
            })}
            {/* <Link className="link" to="/">
              <div className="main-posting-item-img"></div>
              <div className="mina-posting-item-img">제목</div>
            </Link>
            <Link className="link" to="/">
              <div className="main-posting-item-img"></div>
              <div className="mina-posting-item-img">제목</div>
            </Link>
            <Link className="link" to="/">
              <div className="main-posting-item-img"></div>
              <div className="mina-posting-item-img">제목</div>
            </Link>
            <Link className="link" to="/">
              <div className="main-posting-item-img"></div>
              <div className="mina-posting-item-img">제목</div>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
