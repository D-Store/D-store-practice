import React, { useState, useEffect, useRef } from "react";
import SignUp from "../../components/SignUp";
import { useHistory } from "react-router-dom";
import AuthApi from "../../assets/API/AuthApi";

const SignUpContainer = () => {
  //useHistory
  const history = useHistory();
  //태그선택
  //input
  const userIdInput = useRef();
  const passwordInput = useRef();
  const nameInput = useRef();
  const genderIdInput = useRef();
  //Error
  const userIdError = useRef();
  const passwordError = useRef();
  const nameError = useRef();
  const genderIdError = useRef();
  //input State
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [genderId, setGenderId] = useState("");
  //setState on event
  const onChangeUserId = e => {
    setUserId(e.target.value);
  };
  const onChangeUserPw = e => {
    setPassword(e.target.value);
  };
  const onChangeUserName = e => {
    setName(e.target.value);
  };
  const onChangeUserGenderId = e => {
    setGenderId(e.target.value);
  };
  //Enter 시 포커싱 & 에러메세지
  useEffect(() => {
    const listener = e => {
      if (e.key === "Enter" || e.key === "NumpadEnter") {
        if (userId.length === 0) {
          userIdInput.current?.focus();
          hiddenError();
          userIdError.current.classList.toggle("hidden");
        } else if (password.length === 0) {
          passwordInput.current?.focus();
          hiddenError();
          passwordError.current.classList.toggle("hidden");
        } else if (name.length === 0) {
          nameInput.current?.focus();
          hiddenError();
          nameError.current.classList.toggle("hidden");
        } else if (genderId.length === 0) {
          genderIdInput.current?.focus();
          hiddenError();
          genderIdError.current.classList.toggle("hidden");
        } else {
          console.log("회원가입!");
          handleSignUp(userId, password, name, genderId);
        }
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [userId, password, name, genderId]);
  //회원가입
  const handleSignUp = async () => {
    try {
      const response = await AuthApi.signUp(userId, password, name, genderId);
      alert("회원가입을 성공하였습니다.");
      console.log(response.status);
      history.push("/");
    } catch (err) {
      console.log(err);
      alert("회원가입을 실패하였습니다.");
    }
  };
  //에러메세지 제거
  const hiddenError = () => {
    userIdError.current.classList.add("hidden");
    passwordError.current.classList.add("hidden");
    nameError.current.classList.add("hidden");
    genderIdError.current.classList.add("hidden");
  };

  return (
    <SignUp
      userId={userId}
      password={password}
      name={name}
      genderId={genderId}
      onChangeUserId={onChangeUserId}
      onChangeUserPw={onChangeUserPw}
      onChangeUserName={onChangeUserName}
      onChangeUserGenderId={onChangeUserGenderId}
      userIdInput={userIdInput}
      passwordInput={passwordInput}
      nameInput={nameInput}
      genderIdInput={genderIdInput}
      handleSignUp={handleSignUp}
      userIdError={userIdError}
      passwordError={passwordError}
      nameError={nameError}
      genderIdError={genderIdError}
    />
  );
};

export default SignUpContainer;
