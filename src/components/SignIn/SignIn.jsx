import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

const SignIn = ({
  email,
  password,
  onChangeEmail,
  onChangePassword,
  tryLogin,
  emailInput,
  passwordInput,
  errorInputEmail,
  errorInputPassword,
  errorTryLogin,
}) => {
  return (
    <>
      <div className="signIn">
        <div className="signIn-form">
          <div className="signIn-form-title">로그인</div>
          <div className="signIn-diver">
            <div className="signIn-diver-span">
              <div className="signIn-diver-line"></div>
              <div className="back">
                <span>또는</span>
              </div>
            </div>
          </div>
          <div className="signIn-input">
            <div>
              <input
                className="signIn-input-item"
                type="text"
                name="email"
                placeholder="아이디"
                ref={emailInput}
                onChange={e => onChangeEmail(e)}
                value={email}
              ></input>
            </div>
            <div
              className="errorMessage"
              name="errorDiv"
              style={{ display: "none" }}
              ref={errorInputEmail}
            >
              아이디를 입력해주세요
            </div>
            <div>
              <input
                className="signIn-input-item"
                type="password"
                name="userPw"
                placeholder="비밀번호"
                ref={passwordInput}
                onChange={e => onChangePassword(e)}
                value={password}
              />
            </div>
            <div
              className="errorMessage"
              name="errorDiv"
              style={{ display: "none" }}
              ref={errorInputPassword}
            >
              비밀번호를 입력해주세요
            </div>
            <div
              className="errorMessage"
              name="errorDiv"
              style={{ display: "none" }}
              ref={errorTryLogin}
            >
              가입하지 않은 아이디이거나,잘못된 비밀번호입니다.
            </div>
            <div className="signIn-submit" onClick={tryLogin}>
              로그인
            </div>
            <div className="another-approach">
              <span className="another-approach-item">
                아직 계정이 없으신가요?{" "}
                <Link className="another-approach-item-Link" to="/signUp">
                  회원가입
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
