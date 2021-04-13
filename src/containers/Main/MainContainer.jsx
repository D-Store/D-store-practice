import React, { useState, useEffect } from "react";
import PostApi from "../../assets/API/PostApi";
import Main from "../../components/Main";

const MainContainer = () => {
  const [boradId, setBoradId] = useState([-1]);
  const [isLoading, setIsLoading] = useState(false);

  const getPosting = async () => {
    try {
      setIsLoading(true);
      const response = await PostApi.getBoard(boradId);

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPosting().then();
  });

  return <Main isLoading={isLoading} />;
};

export default MainContainer;
