import React from "react";
import "./Posting.css";

const Posting = () => {
  return (
    <div className="posting">
      <div className="content">
        <div className="posting-title">프로젝트 생성</div>
        <div className="posting-form">
          <div className="posting-form-title">
            <input
              type="text"
              className="posting-form-title-item"
              placeholder="제목"
            />
            <div className="posting-form-content">
              <textarea
                className="posting-form-content-item"
                placeholder="내용"
              />
            </div>
            {/* 제목, 내용, 사진 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posting;
