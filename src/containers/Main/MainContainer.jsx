import React, { useState, useEffect, useRef, useCallback } from "react";
import PostApi from "../../assets/API/PostApi";
import Main from "../../components/Main";

const MainContainer = () => {
  const bannerPage = useRef();
  const postPage = useRef();

  const [boradId, setBoradId] = useState([-1]);
  const [isLoading, setIsLoading] = useState(false);
  let isScroll = false;

  // const [isScroll, setIsScroll] = useState(false);

  const getPosting = async () => {
    try {
      setIsLoading(true);
      const response = await PostApi.getBoard(boradId);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const handleScroll = useCallback(
    e => {
      // 브라우저 총 내용의 크기 (스크롤을 포함한다)
      const { scrollHeight } = document.body;
      // 현재 스크롤바의 위치
      const { scrollTop } = document.documentElement;
      if (e.deltaY > 0) {
        //페이지 다운할때
        bannerPage.current.classList.add("backPage");
        postPage.current.classList.add("backPage");
        console.log(isScroll);
        if (!isScroll) {
          e.preventDefault();
        }
        setTimeout(() => {
          isScroll = true;
        }, 700);
      } else if (scrollHeight / 100 > scrollTop) {
        //전체 height/100 만큼 스크롤 했을때
        isScroll = false;
        bannerPage.current.classList.remove("backPage");
        postPage.current.classList.remove("backPage");
      }
    },
    [isScroll]
  );

  useEffect(() => {
    console.log("in", isScroll);
    window.addEventListener("wheel", handleScroll, { passive: isScroll });
    // 스크롤이 발생할때마다 handleScroll 함수를 호출하도록 추가합니다.
    return () => {
      console.log("out");
      window.removeEventListener("wheel", handleScroll, { passive: true });
      // 해당 컴포넌트가 언마운트 될때, 스크롤 이벤트를 제거합니다.
    };
  }, [isScroll]);

  const handleNextPosting = () => {
    console.log("next");
  };

  return (
    <Main
      isLoading={isLoading}
      bannerPage={bannerPage}
      postPage={postPage}
      handleNextPosting={handleNextPosting}
    />
  );
};

export default MainContainer;
