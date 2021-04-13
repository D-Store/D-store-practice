import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = ({
  email,
  password,
  name,
  GenderId,
  onChangeemail,
  onChangeUserPw,
  onChangeUserName,
  onChangeUserGenderId,
  emailInput,
  passwordInput,
  nameInput,
  genderIdInput,
  handleSignUp,
  emailError,
  passwordError,
  nameError,
  genderIdError,
}) => {
  return (
    <div className="signUp">
      <div className="signUp-form">
        <div className="signUp-form-title">회원가입</div>
        <div className="signUp-form-input">
          <div className="signUp-form-input-title">아이디</div>
          <input
            className="signUp-form-input-item"
            type="text"
            ref={emailInput}
            placeholder="아이디"
            onChange={e => onChangeemail(e)}
            value={email}
          />
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
          <div className="signUp-form-input-title">성별</div>
          <input
            className="signUp-form-input-item"
            type="text"
            placeholder="성별(1,2)"
            ref={genderIdInput}
            onChange={e => onChangeUserGenderId(e)}
            value={GenderId}
          />
          <div ref={genderIdError} className="signUp-form-input-error hidden">
            성별을 입력해주세요
          </div>
        </div>
        <div className="signUp-form-button">
          <button className="signUp-form-button-item" onClick={handleSignUp}>
            회원가입
          </button>
        </div>
        <div className="signUp-form-signIn">
          <span className="signUp-form-signIn-item">
            이미 계정이 있으신가요? <Link to="/signIn">로그인::after</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
