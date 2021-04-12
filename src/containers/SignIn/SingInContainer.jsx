import React, { useEffect, useRef, useState } from "react";
import SignIn from "../../components/SignIn/SignIn";
import { useHistory } from "react-router-dom";
import AuthApi from "../../assets/API/AuthApi";

const SingInContainer = () => {
  const history = useHistory();

  const userIdInput = useRef();
  const passwordInput = useRef();
  const errorInputUserId = useRef();
  const errorInputPassword = useRef();
  const errorTryLogin = useRef();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUserId = e => {
    setUserId(e.target.value);
  };

  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  useEffect(()=>{
    const listener = (e) => {
      if(e.key === "Enter"|| e.key === "NumpadEnter"){
        if(userId.length === 0){
          errorInputPassword.current.style.display = "none";
          errorTryLogin.current.style.display = "none"
          errorInputUserId.current.style.display = "block";
          userIdInput.current?.focus();
        }else if(userId.length !== 0){
          errorInputUserId.current.style.display = "none";
          passwordInput.current?.focus();
          if(password.length === 0){
            errorTryLogin.current.style.display = "none";
            errorInputPassword.current.style.display = "block";
          }else{
             tryLogin()
          }
        }
      }
    }
    document.addEventListener("keydown",listener);
    return () => {
      document.removeEventListener("keydown",listener);
    }
  })

  const tryLogin = async () => {
    try {
      if (!userId || !password) {
        alert("아이디 또는 비밀번호를 입력하지 않았습니다.");
      } else {
        const response = await AuthApi.login(userId, password);
        if (response.status === 200) {
          localStorage.setItem("accessToken", response.data.token);
          if (userId === "test" && password === "1234") {
            history.push("/admin/main");
          }else{
            history.push("/");
          }
        } else {
          setPassword("");
          passwordInput.current?.focus();
          alert("로그인을 실패하였습니다.");
        }
      }
    } catch (err) {
      if(err.response.status===400){
        setPassword("");
        errorInputPassword.current.style.display = "none"
        errorTryLogin.current.style.display = "block"
        passwordInput.current?.focus();
        return 
      }else{
        alert("에러가 발생했습니다.")
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

export default SingInContainer;
