import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = ({
  email,
  password,
  name,
  onChangeEmail,
  onChangeUserPw,
  onChangeUserName,
  emailInput,
  passwordInput,
  nameInput,
  handleSignUp,
  emailError,
  passwordError,
  nameError,
  handleAuthEmail,
}) => {
  return (
    <div className="signUp">
      <div className="signUp-form">
        <div className="signUp-form-title">회원가입</div>
        <div className="signUp-form-input">
          <div className="signUp-form-input-title">이메일</div>
          <div className="signUp-form-input-email">
            <input
              className="signUp-form-input-item email-input"
              type="text"
              ref={emailInput}
              placeholder="이메일"
              onChange={e => onChangeEmail(e)}
              value={email}
            />
            <div className="signUp-form-input-button">
              <button
                className="signUp-form-input-button-item email-button"
                onClick={handleAuthEmail}
              >
                인증
              </button>
            </div>
          </div>
          <div ref={emailError} className="signUp-form-input-error hidden">
            아이디를 입력해주세요
          </div>
          <div className="signUp-form-input-title">비밀번호</div>
          <input
            className="signUp-form-input-item"
            type="text"
            ref={passwordInput}
            placeholder="비밀번호"
            onChange={e => onChangeUserPw(e)}
            value={password}
          />
          <div ref={passwordError} className="signUp-form-input-error hidden">
            비밀번호를 입력해주세요
          </div>
          <div className="signUp-form-input-title">이름</div>
          <input
            className="signUp-form-input-item"
            type="text"
            ref={nameInput}
            placeholder="이름"
            onChange={e => onChangeUserName(e)}
            value={name}
          />
          <div ref={nameError} className="signUp-form-input-error hidden">
            이름을 입력해주세요
          </div>
        </div>
        <div className="signUp-form-button">
          <button className="signUp-form-button-item" onClick={handleSignUp}>
            회원가입
          </button>
        </div>
        <div className="signUp-form-signIn">
          <span className="signUp-form-signIn-item">
            이미 계정이 있으신가요?{" "}
            <Link className="signUp-form-signIn-itme-after" to="/signIn">
              로그인
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
