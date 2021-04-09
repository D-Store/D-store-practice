import React, { useState, useEffect, useRef } from "react";
import SignUp from "../../components/SignUp";

const SignUpContainer = () => {
  const userIdInput = useRef();
  const passwordInput = useRef();
  const nameInput = useRef();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const onChangeUserId = e => {
    setUserId(e.target.value);
  };
  const onChangeUserPw = e => {
    setPassword(e.target.value);
  };
  const onChangeUserName = e => {
    setName(e.target.value);
  };

  useEffect(() => {
    const listener = e => {
      if (e.key === "Enter" || e.key === "NumpadEnter") {
        if (userId.length === 0) {
          userIdInput.current?.focus();
        } else if (password.length === 0) {
          passwordInput.current?.focus();
        } else if (name.length === 0) {
          nameInput.current?.focus();
        } else {
          console.log("회원가입!");
        }
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [userId, password, name]);
  return (
    <SignUp
      userId={userId}
      password={password}
      name={name}
      onChangeUserId={onChangeUserId}
      onChangeUserPw={onChangeUserPw}
      onChangeUserName={onChangeUserName}
      userIdInput={userIdInput}
      passwordInput={passwordInput}
      nameInput={nameInput}
    />
  );
};

export default SignUpContainer;
