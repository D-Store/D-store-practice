import React, { useState, useEffect, useRef } from "react";
import SignUp from "../../components/SignUp";

const SignUpContainer = () => {
  const passwordInput = useRef();
  const nameInput = useRef();
  const [Userid, setUserId] = useState("");
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
        if (name.length !== 0) {
          console.log("회원가입!");
        } else if (password.length !== 0) {
          nameInput.current?.focus();
        } else {
          passwordInput.current?.focus();
        }
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [Userid, password, name]);
  return (
    <SignUp
      Userid={Userid}
      password={password}
      name={name}
      onChangeUserId={onChangeUserId}
      onChangeUserPw={onChangeUserPw}
      onChangeUserName={onChangeUserName}
      passwordInput={passwordInput}
      nameInput={nameInput}
    />
  );
};

export default SignUpContainer;
