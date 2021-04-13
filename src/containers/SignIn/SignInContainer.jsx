import React, { useEffect, useRef, useState } from "react";
import SignIn from "../../components/SignIn/SignIn";
import { useHistory } from "react-router-dom";
import AuthApi from "../../assets/API/AuthApi";

const SignInContainer = () => {
  // useHistory 사용
  const history = useHistory();
  // useRef 설정
  const userIdInput = useRef();
  const passwordInput = useRef();
  const errorInputUserId = useRef();
  const errorInputPassword = useRef();
  const errorTryLogin = useRef();
  // input 할때 사용할 useState 설정
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  //아이디 입력 받기
  const onChangeUserId = e => {
    setUserId(e.target.value);
  };
  //비밀 번호 입력 받기
  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  //엔터키를 사용했을때 다음칸으로 넘어가기, 오류처리(메세지띄워주기), 로그인 시도
  useEffect(() => {
    const listener = e => {
      if (e.key === "Enter" || e.key === "NumpadEnter") {
        if (userId.length === 0) {
          errorInputPassword.current.style.display = "none";
          errorTryLogin.current.style.display = "none";
          errorInputUserId.current.style.display = "block";
          userIdInput.current?.focus();
        } else if (userId.length !== 0) {
          errorInputUserId.current.style.display = "none";
          passwordInput.current?.focus();
          if (password.length === 0) {
            errorTryLogin.current.style.display = "none";
            errorInputPassword.current.style.display = "block";
          } else {
            tryLogin();
          }
        }
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  });

  //로그인 시도 함수
  const tryLogin = async () => {
    try {
      //아이디 비밀번호 입력 유무 확인
      if (!userId || !password) {
        alert("아이디 또는 비밀번호를 입력하지 않았습니다.");
      } else {
        //서버 통신,토큰저장,페이지 라우팅
        const response = await AuthApi.login(userId, password);
        if (response.status === 200) {
          localStorage.setItem("accessToken", response.data.token);
          if (userId === "test" && password === "1234") {
            history.push("/admin/main");
          } else {
            history.push("/");
          }
        } else {
          setPassword("");
          passwordInput.current?.focus();
          alert("로그인을 실패하였습니다.");
        }
      }
    } catch (error) {
      //에러가 있을때 status가 400이면 로그인 실패 아니면 다른 에러
      if (error.response.status === 400) {
        setPassword("");
        errorInputPassword.current.style.display = "none";
        errorTryLogin.current.style.display = "block";
        passwordInput.current?.focus();
        return;
      } else {
        alert("에러가 발생했습니다.");
      }
    }
  };
  return (
    <SignIn
      userId={userId}
      password={password}
      onChangeUserId={onChangeUserId}
      onChangePassword={onChangePassword}
      tryLogin={tryLogin}
      userIdInput={userIdInput}
      passwordInput={passwordInput}
      errorInputUserId={errorInputUserId}
      errorInputPassword={errorInputPassword}
      errorTryLogin={errorTryLogin}
    />
  );
};

export default SignInContainer;
