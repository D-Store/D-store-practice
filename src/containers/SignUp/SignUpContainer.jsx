import React, { useState, useEffect, useRef } from "react";
import SignUp from "../../components/SignUp";
import { useHistory } from "react-router-dom";
import AuthApi from "../../assets/API/AuthApi";

const SignUpContainer = () => {
  //useHistory
  const history = useHistory();
  //태그선택
  //input
  const emailInput = useRef();
  const passwordInput = useRef();
  const nameInput = useRef();
  //Error
  const emailError = useRef();
  const passwordError = useRef();
  const nameError = useRef();
  //input State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  //setState on event
  const onChangeEmail = e => {
    setEmail(e.target.value);
  };
  const onChangeUserPw = e => {
    setPassword(e.target.value);
  };
  const onChangeUserName = e => {
    setName(e.target.value);
  };

  const handleAuthEmail = async () => {
    if (!email) {
      alert("이메일을 작성하지 않았습니다.");
      return;
    }
    try {
      const response = await AuthApi.authEmail(email);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  //회원가입
  const handleSignUp = async () => {
    //입력 유무 확인
    if (!email || !password || !name) {
      alert("아직 작성하지 않은 사항이 있습니다.");
      return;
    }
    //회원가입 시도
    try {
      const response = await AuthApi.signUp(email, password, name);
      alert("회원가입을 성공하였습니다.");
      console.log(response.status);
      history.push("/");
    } catch (err) {
      console.log(err);
      alert("회원가입을 실패하였습니다.");
    }
  };
  //Enter 시 포커싱 & 에러메세지
  useEffect(() => {
    const listener = e => {
      if (e.key === "Enter" || e.key === "NumpadEnter") {
        if (email.length === 0) {
          emailInput.current?.focus();
          hiddenError();
          emailError.current.classList.toggle("hidden");
        } else if (password.length === 0) {
          passwordInput.current?.focus();
          hiddenError();
          passwordError.current.classList.toggle("hidden");
        } else if (name.length === 0) {
          nameInput.current?.focus();
          hiddenError();
          nameError.current.classList.toggle("hidden");
        } else {
          console.log("회원가입!");
          handleSignUp(email, password, name);
        }
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [email, password, name]);
  //에러메세지 제거
  const hiddenError = () => {
    emailError.current.classList.add("hidden");
    passwordError.current.classList.add("hidden");
    nameError.current.classList.add("hidden");
  };

  return (
    <SignUp
      email={email}
      password={password}
      name={name}
      onChangeEmail={onChangeEmail}
      onChangeUserPw={onChangeUserPw}
      onChangeUserName={onChangeUserName}
      emailInput={emailInput}
      passwordInput={passwordInput}
      nameInput={nameInput}
      handleSignUp={handleSignUp}
      emailError={emailError}
      passwordError={passwordError}
      nameError={nameError}
      handleAuthEmail={handleAuthEmail}
    />
  );
};

export default SignUpContainer;
