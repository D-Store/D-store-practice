import React, { useState, useEffect, useRef, useCallback } from "react";
import PostApi from "../../assets/API/PostApi";
import Main from "../../components/Main";

const MainContainer = () => {
  const bannerPage = useRef();
  const postPage = useRef();

  const [scrollPoint, setScrollPoint] = useState(0);
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

  const handleScroll = useCallback(e => {
    // 브라우저 총 내용의 크기 (스크롤을 포함한다)
    const { scrollHeight } = document.body;
    // 현재 스크롤바의 위치
    const { scrollTop } = document.documentElement;
    if (e.deltaY > 0) {
      //페이지 다운할때
      bannerPage.current.classList.add("backPage");
      postPage.current.classList.add("backPage");
    } else if (scrollHeight / 100 > scrollTop) {
      //전체 height/100 만큼 스크롤 했을때
      bannerPage.current.classList.remove("backPage");
      postPage.current.classList.remove("backPage");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, true);
    // 스크롤이 발생할때마다 handleScroll 함수를 호출하도록 추가합니다.

    return () => {
      window.removeEventListener("wheel", handleScroll, true);
      // 해당 컴포넌트가 언마운트 될때, 스크롤 이벤트를 제거합니다.
    };
  }, [scrollPoint]);

  //   useEffect(() => {
  //     getPosting().then();
  //   });

  return (
    <Main isLoading={isLoading} bannerPage={bannerPage} postPage={postPage} />
  );
};

export default MainContainer;
