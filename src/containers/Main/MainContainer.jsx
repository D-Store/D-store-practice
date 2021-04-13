import React, { useEffect } from "react";
import PostApi from "../../assets/API/PostApi";
import Main from "../../components/Main";

const MainContainer = () => {
  const getPosting = async () => {
    try {
      const response = await PostApi.getBoard([-1]);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(getPosting);

  return <Main />;
};

export default MainContainer;
