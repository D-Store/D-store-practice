import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import "./Posting.css";

const Posting = ({
  title,
  content,
  img,
  setContent,
  onChangeTitle,
  onChangeContent,
  onChangeImg,
  handlePosting,
  postImgs,
  imgs,
}) => {
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
              value={title}
              onChange={onChangeTitle}
            />
          </div>
          <div className="posting-form-content">
            <CKEditor
              className="posting-form-content-item"
              editor={ClassicEditor}
              data="<p></p>"
              onReady={editor => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
                onChangeContent({ data });
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
            />

            <div className="posting-form-content-slider">
              <ul className="posting-form-content-slider-ul">
                {/* <li
                  className="posting-form-content-slider-ul-li"
                
                ></li> */}
                {imgs.map((currentImg, key) => {
                  return (
                    <li
                      className="posting-form-content-slider-ul-li"
                      style={{
                        "background-image": `url(${currentImg.imgUrl})`,
                      }}
                      src={currentImg.imgUrl}
                      alt={`이미지${key}`}
                    />
                  );
                })}
              </ul>
            </div>
            <div className="posting-form-content-img">
              <label htmlFor="ex_file">업로드</label>
              <input
                type="file"
                id="ex_file"
                className="posting-form-content-img-item"
                accept="image/jpg,image/png"
                onChange={onChangeImg}
                onClick={postImgs}
                multiple
              />
            </div>
          </div>
          <div className="posting-form-submit">
            <button
              className="posting-form-submit-item"
              onClick={handlePosting}
            >
              제출
            </button>
          </div>
          {/* 제목, 내용, 사진 */}
        </div>
      </div>
    </div>
  );
};

export default Posting;
