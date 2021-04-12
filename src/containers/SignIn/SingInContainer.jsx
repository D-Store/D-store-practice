import React, { useEffect, useRef, useState } from "react";
import SignIn from "../../components/SignIn/SignIn";
import { useHistory } from "react-router-dom";
import AuthApi from "../../assets/API/AuthApi";

const SingInContainer = () => {
  const history = useHistory();

  const passwordInput = useRef();
  const errorInput = useRef();

  const [userId, setUserId] = useState("");
  const [password, setUserPw] = useState("");

  const onChangeUserId = e => {
    setUserId(e.target.value);
  };

  const onChangeUserPw = e => {
    setUserPw(e.target.value);
  };

  useEffect(()=>{
    const listener = (e) => {
      if(e.key === "Enter"|| e.key === "NumpadEnter"){
        if(userId.length === 0){
          console.log(errorInput.current.style.display)
          errorInput.current.style.display = "block"
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
        console.log(response.config.data.userId);
        if (response.status === 200) {
          alert("로그인을 성공하였습니다.");
          localStorage.setItem("accessToken", response.data.token);
          if (userId === "test" && password === "1234") {
            history.push("/admin/main");
          }else{
            history.push("/");
          }
        } else {
          alert("로그인을 실패하였습니다.");
        }
      }
    } catch (err) {
      alert("에러가 발생했습니다.");
      console.log(err.response.status);
    }
  };
  return (
    <SignIn
      userId={userId}
      password={password}
      onChangeUserId={onChangeUserId}
      onChangeUserPw={onChangeUserPw}
      tryLogin={tryLogin}
      passwordInput={passwordInput}
      errorInput={errorInput}
    />
  );
};

export default SingInContainer;
