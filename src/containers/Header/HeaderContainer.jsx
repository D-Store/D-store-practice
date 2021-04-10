import React, { useState, useEffect } from "react";
import Header from "../../components/common/Header";

const HeaderContainer = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const Token = localStorage.getItem("accessToken");
    if (Token === null) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, []);

  return <Header isLogin={isLogin} />;
};

export default HeaderContainer;
