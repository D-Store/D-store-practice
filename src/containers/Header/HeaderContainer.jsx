import React, { useState, useEffect } from "react";
import Header from "../../components/common/Header";
import { useHistory } from "react-router-dom";

const HeaderContainer = () => {
  const history = useHistory();
  //isLogin
  const [isLogin, setIsLogin] = useState(false);
  //isLogin 여부
  useEffect(() => {
    const Token = localStorage.getItem("accessToken");
    if (Token === null) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  });

  const handleLogOut = () => {
    console.log("logout");
    localStorage.removeItem("accessToken");
    history.push("/");
  };

  return <Header isLogin={isLogin} handleLogOut={handleLogOut} />;
};

export default HeaderContainer;
