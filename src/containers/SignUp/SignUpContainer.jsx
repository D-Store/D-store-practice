import React, { useState, useEffect, useRef } from "react";
import SignUp from "../../components/SignUp";
import AuthApi from "../../assets/API/AuthApi";

const SignUpContainer = () => {
  //태그선택
  const userIdInput = useRef();
  const passwordInput = useRef();
  const nameInput = useRef();
  const genderIdInput = useRef();
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
  //Enter 시 포커싱
  useEffect(() => {
    const listener = e => {
      if (e.key === "Enter" || e.key === "NumpadEnter") {
        if (userId.length === 0) {
          userIdInput.current?.focus();
        } else if (password.length === 0) {
          passwordInput.current?.focus();
        } else if (name.length === 0) {
          nameInput.current?.focus();
        } else if (genderId.length === 0) {
          genderIdInput.current?.focus();
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
      console.log(response.status);
    } catch (err) {
      console.log(err);
    }
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
    />
  );
};

export default SignUpContainer;
